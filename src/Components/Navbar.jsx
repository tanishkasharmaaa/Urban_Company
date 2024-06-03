import { Box, Button, Input, ModalOverlay, Modal, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Text, ModalFooter, useDisclosure, Divider, MenuButton, MenuItem, MenuList, Menu } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { forSearch } from "../dataBase/service";
import { SelectTag } from "../Components/Select";
import { LoginModal } from "./LoginModal";
import { SearchButtons } from "./SearchButtons";
import { FaCircleUser } from "react-icons/fa6";
import { useRef } from "react";

export function Navbar() {
  let navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(() => JSON.parse(localStorage.getItem('matched')) || '');
  const [filteredData, setFilteredData] = useState([]);
  const [display, setDisplay] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();

  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(JSON.parse(localStorage.getItem('matched')) || '');
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  function handleSearch(e) {
    filterSearch(e.target.value);
  }

  let filterSearch = (value) => {
    if (value !== "") {
      let filtered = [...forSearch];
      filtered = filtered.filter((ele) =>
        ele.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  function handleModalDisplay() {
    if (!display) {
      setDisplay(true);
      onLoginOpen();
    } else {
      setDisplay(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem('storedNumber');
    localStorage.removeItem('matched');
    setIsLoggedIn('');
  }

  return (
    <>
      <Box 
        bg='white' 
        w='100%' 
        p={{ base: 2, md: 5 }} 
        color='black' 
        display='flex' 
        flexDirection={{ base: 'column', md: 'row' }} 
        justifyContent='space-between' 
        alignItems='center' 
        boxShadow='md' 
        position='fixed' 
        top={0} 
        zIndex={1000}
        
      >
        <Box mb={{ base: 3, md: 0 }}>
          <Link to='/'>
            <Image height='50px' w={{ base: '150px', md: '200px' }} src="https://seeklogo.com/images/U/urban-company-logo-A99D1E722A-seeklogo.com.png" />
          </Link>
        </Box>
        <Box 
          display={{base:'block',md:'flex',lg:'flex'}} 
          flexDirection={{ base: 'row', md: 'row' }} 
          justifyContent='space-around' 
          alignItems='center' 
          w={{ base: '100%', md: '60%' }} 
        >
          <Box><SelectTag /></Box>
          <Box>
            <Input 
              onClick={onOpen}
              placeholder="Search here..." 
              mx={{ base: 0, md: 3 }} 
              w={{ base: '100%', md: '300px' }} 
              mb={{ base: 3, md: 0 }}
            />
          </Box>
        </Box>
        <Box>
          {isLoggedIn === '' ? (
            <Button onClick={handleModalDisplay} colorScheme='gray' variant='outline' w={{ base: '100%', md: 'auto' }}>Login</Button>
          ) : (
            <Menu>
              <MenuButton borderRadius='25px' as={Button} display={{base:'none'}}>
                <FaCircleUser />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Box>
      </Box>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Service</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Input
                ref={inputRef}
                onChange={handleSearch}
                placeholder="Search service e.g. : AcRepair"
                focusBorderColor="teal.500"
                borderColor="gray.300"
                _hover={{ borderColor: "gray.400" }}
              />
              <br />
              <Box
                height={{ base: "150px", md: "200px" }} 
                overflowY="scroll" 
                border="1px solid" 
                borderColor="gray.200" 
                borderRadius="md" 
                p={4} 
              >
                {filteredData.length === 0 ? (
                  <Text></Text>
                ) : (
                  filteredData.map((ele, i) => (
                    <Box onClick={() => navigate(`${ele.link}`)}
                      key={i}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      p={2}
                      borderBottom="1px solid"
                      borderColor="gray.200"
                      _last={{ borderBottom: "none" }}
                    >
                      <Text flex="1" mr={2}>{ele.title}</Text>
                      <Image
                        src={ele.image}
                        boxSize={{ base: "40px", md: "50px" }}
                        borderRadius="md"
                      />
                    </Box>
                  ))
                )}
              </Box>

              <Divider />
              <Text fontSize='20px' fontWeight='500'>Trending Searches</Text><br />
              <SearchButtons nav={navigate} />
            </Box>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>

      {display && (
        <LoginModal open={isLoginOpen} close={onLoginClose} />
      )}
    </>
  );
}
