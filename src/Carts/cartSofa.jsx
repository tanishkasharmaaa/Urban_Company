import { Box, Text, Button, Badge, Image, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalBody } from "@chakra-ui/react"
import { AccordionTag } from '../Components/Accordion';
import { SelectTag } from '../Components/Select'
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LoginModal } from "../Components/LoginModal";
import { useNavigate } from "react-router-dom";

export function CartSofa() {
  const [getSofa, setGetSofa] = useState([]);
  const [auth, setAuth] = useState(null);
  const [display, setDisplay] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => JSON.parse(localStorage.getItem('matched')) || '');
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isCompletion, onOpen: onCompletionOpen, onClose: onCompletionClose } = useDisclosure();
  const navigate = useNavigate();
  const [input, setInputs] = useState({
    location: '',
    houseNo: '',
    landmark: '',
    street: '',
    time: ''
  });

  useEffect(() => {
    const fetchData = () => {
      const sofa = JSON.parse(localStorage.getItem('newSofaCart')) || [];
      const authData = JSON.parse(localStorage.getItem('matched'));
      setGetSofa(sofa);
      setAuth(authData);
    };

    fetchData();

    window.addEventListener('storage', fetchData);
    return () => window.removeEventListener('storage', fetchData);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(JSON.parse(localStorage.getItem('matched')) || '');
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  function handleModalDisplay() {
    if (!display) {
      setDisplay(true);
      onLoginOpen();
    } else {
      setDisplay(false);
    }
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setInputs({ ...input, [name]: value });
  }

  function handleProceed() {
    if (getSofa.length === 0) {
      alert('Your cart is empty. Please add services to proceed.');
     navigate('/Sofa')
    }

    if (input.location !== '' && input.houseNo !== '' && input.landmark !== '' && input.street !== '') {
      onOpen();
    } else {
      alert('Please fill the complete information');
    }
  }

  function handlePaymentComplete() {
    onCompletionOpen();
    onClose();
    setTimeout(()=>{
       navigate('/')
    },1000)
   
  }

  function handleDelete(index) {
    const updatedCart = getSofa.filter((_, i) => i !== index);
   setGetSofa(updatedCart);
    localStorage.setItem('newSofaCart', JSON.stringify(updatedCart));
  }

  return (
    <>
      <Box display="flex" alignItems="center" p={4}>
        <Box>
          <Image
            width={{ base: '40px', md: '50px' }}
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_36,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1688650021762-cc2e3d.jpeg"
          />
        </Box>
        <Box ml={3}>
          <Text fontWeight="600" fontSize={{ base: '20px', md: '25px' }}>
            CheckOut
          </Text>
        </Box>
      </Box>
      <Box display={{ base: 'block', md: 'flex' }} flexDirection={{ base: 'column', md: 'row' }} p={4} gap={4}>
        <Box flex={{ base: '1', md: '0 0 40%' }} p={4} bg="gray.50" borderRadius="md" boxShadow="md">
          {!auth ? (
            <Box textAlign="center">
              <Text mb={4}>Please login to continue</Text>
              <Button colorScheme="teal" onClick={handleModalDisplay}>Login</Button>
            </Box>
          ) : (
            <Box display="flex" flexDirection="column" gap={4}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_36,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1690278194843-5037f4.jpeg"
                  borderRadius="md"
                  boxShadow="md"
                />
              </Box>
              <Box textAlign="center">
                <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">Send booking details to</Text>
                <Text fontSize={{ base: "sm", md: "md" }}>{JSON.parse(localStorage.getItem('storedNumber'))}</Text>
              </Box>
              <SelectTag name='location' handleChange={handleChange} />
              <Box display="flex" flexDirection="column" gap={2}>
                <Input name="houseNo" value={input.houseNo} placeholder="House Number" p={2} borderRadius="md" boxShadow="sm" onChange={handleChange} />
                <Input name="landmark" value={input.landmark} placeholder="Landmark" p={2} borderRadius="md" boxShadow="sm" onChange={handleChange} />
                <Input name="street" value={input.street} placeholder="Street" p={2} borderRadius="md" boxShadow="sm" onChange={handleChange} />
              </Box>
              <Input name="datetime" type="datetime-local" p={2} borderRadius="md" boxShadow="sm" onChange={handleChange} />
              <Button colorScheme="teal" size="lg" borderRadius="md" boxShadow="md" _hover={{ boxShadow: "lg" }} onClick={handleProceed}>
                Proceed Payment
              </Button>
            </Box>
          )}
        </Box>
        <Box flex="1" p={4} borderRadius="md" boxShadow="md" bg="gray.50">
          <Box overflowY="scroll" height={{ base: 'auto', md: '500px' }}>
            {getSofa.map((ele, i) => (
              <Box key={i} borderRadius="md" bg="white" boxShadow="md" p={4} mb={4}>
                <Box>
                    <Image src={ele.image}/>
                </Box>
                <Badge colorScheme="green" mb={2}>
                  PACKAGE
                </Badge>
                <Box display="flex" justifyContent="space-between">
                  <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="500" mb={2}>
                    {ele.title}
                  </Text>
                  <Button variant='ghost' colorScheme="red" onClick={() => handleDelete(i)}>Delete</Button>
                </Box>
                <Text fontWeight="500" mb={2}>
                  ₹{ele.price.toLocaleString()}
                </Text>
                <Text mb={2}>{ele.service.first}</Text>
                <Text mb={2}>{ele.service?.second}</Text>
                <Text mb={2}>{ele.service?.third}</Text>
               
                <AccordionTag />
              </Box>
            ))}
          </Box>
          <Box mt={4} bg="teal" p={{ base: 3, md: 5 }} color="white" borderRadius="md" boxShadow="md" textAlign="center">
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold">
              Total: ₹{getSofa.reduce((acc, curr) => acc + Number(curr.price), 0).toLocaleString()}
            </Text>
          </Box>
        </Box>
      </Box>
      {display && (
        <LoginModal open={isLoginOpen} close={onLoginClose} />
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Gate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input value={`₹${getSofa.reduce((acc, curr) => acc + Number(curr.price), 0).toLocaleString()}`} isReadOnly />
            <Button colorScheme="teal" mt={4} onClick={handlePaymentComplete}>Proceed to Payment</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={isCompletion} onClose={onCompletionClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Done</ModalHeader>
          </ModalContent>
         </Modal>
         </>
         )
}