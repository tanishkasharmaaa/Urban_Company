import { Box,Heading,Text,Image,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,Button, List, ListItem, Divider } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import { carousel1, carousel2, carousel3, carousel4, service } from "../dataBase/service";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export function Home(){
let{isOpen,onOpen,onClose}=useDisclosure()
 let [selectedService,setSelectedService]=useState(null);
 

function handleModal(service ){
setSelectedService(service)

onOpen()
}

    return(
        <Box mt={{base:'120px'}}>
        <Navbar/>
        <Box display='flex' gap={{ base: '4', md: '10%' }} flexDirection={{ base: 'column', md: 'row' }} p={5}>
      <Box flex='1'>
        <Text fontSize={{ base: '2xl', md: '5xl' }} color='gray.700' mb={5}>Home services at your doorstep</Text>
        <Box>
        <Text fontSize={["16px", "18px", "20px", "24px", "28px"]}>
      What are you looking for?
    </Text>
          <Box display='grid' gridTemplateColumns='repeat(auto-fill, minmax(150px, 1fr))' gap={6}>
          
          {service.map((service, i) => (
            <Box key={i}>
            <Box onClick={()=>handleModal(service,i)}   textAlign='center' p={3} boxShadow='sm' borderRadius='md' _hover={{ boxShadow: 'md' }} transition='box-shadow 0.2s'>
             <Box display='flex' justifyContent='center' alignItems='center'><Image src={service.image} alt={service.title} mb={3} borderRadius='md' /></Box> 
              <Text fontSize='lg' color='gray.600'>{service.title}</Text>
              
            </Box>
           
            </Box>
          ))}
        </Box></Box>
      </Box>
      <Box flex='1' display='flex' justifyContent='center' alignItems='center' mt={{ base: 5, md: 0 }}>
        <Image 
          src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg" 
          borderRadius='md' 
          boxShadow='md'
        />
      </Box>
    </Box>
    <br /><br />
    <Box
      display="flex"
      gap="30px"
      overflowX="auto"
      p="20px"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',  
        'scrollbar-width': 'none',  
      }}
    >
      {carousel1.map((ele, i) => (
        <Link to={ele.link} key={i}>
          <Box minW="400px" flexShrink="0">
            <Image
              src={ele.img}
              w="100%"
              h="auto"
              borderRadius="md"
              boxShadow="md"
              _hover={{ boxShadow: "lg" }}
            />
          </Box>
        </Link>
      ))}
    </Box>

    <Box p={5}>
      <Text fontSize={{ base: '2xl', md: '5xl' }} color="gray.700" mb={5} fontWeight="bold" textAlign="center">
        New and noteworthy
      </Text>
      <Box
        display="flex"
        gap="30px"
        overflowX="auto"
        p="20px"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',  // Internet Explorer 10+
          'scrollbar-width': 'none',  // Firefox
        }}
      >
        {carousel2.map((ele, i) => (
          <Link to={ele.link} key={i} _hover={{ textDecoration: 'none' }}>
            <Box p={5} minW={{ base: "250px", md: "400px" }} flexShrink="0" cursor="pointer">
              <Image
                src={ele.img}
                w="100%"
                h="250px"
                borderRadius="md"
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
              />
              <br />
              <Box display='flex' justifyContent='center'><Text fontSize={{ base: '1xl', md: '3xl' }} fontWeight='500'>{ele.title}</Text></Box>
              
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
    <Box p={5}>
      <Text fontSize={{ base: '2xl', md: '5xl' }} color="gray.700" mb={5} fontWeight="bold" textAlign="center">
        Most booked services
      </Text>
      <Box
        display="flex"
        gap="30px"
        overflowX="auto"
        p="20px"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',  // Internet Explorer 10+
          'scrollbar-width': 'none',  // Firefox
        }}
      >
        {carousel3.map((ele, i) => (
          <Link to={ele.link} key={i} _hover={{ textDecoration: 'none' }}>
            <Box p={5} minW={{ base: "250px", md: "400px" }} flexShrink="0" cursor="pointer">
              <Image
                src={ele.img}
                w="100%"
                h="250px"
                borderRadius="md"
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
              />
              <br />
              <Box display='block' justifyContent='center' ><Text fontSize={{ base: '1xl', md: '2xl' }} fontWeight='500'>{ele.title}</Text>
              <Text fontSize={{ base: '1xl', md: '2xl' }}>{ele.price}</Text></Box>
              
            </Box>
          </Link>
        ))}
      </Box>
    </Box>

    <Box p={5}>
      <Link to='/SalonForWomen'><Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216851653-cc8265.jpeg"/></Link>
      
    </Box>

    <Box p={5}>
      <Text fontSize={{ base: '2xl', md: '5xl' }} color="gray.700" mb={5} fontWeight="bold" textAlign="center">
        Salon for Women
      </Text>
      <Box
        display="flex"
        gap="30px"
        overflowX="auto"
        p="20px"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',  // Internet Explorer 10+
          'scrollbar-width': 'none',  // Firefox
        }}
      >
        {carousel4.map((ele, i) => (
          <Link to={ele.link} key={i} _hover={{ textDecoration: 'none' }}>
            <Box p={5} minW={{ base: "250px", md: "400px" }} flexShrink="0" cursor="pointer">
              <Image
                src={ele.image}
                w="100%"
                h="250px"
                borderRadius="md"
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
              />
              <br />
              <Box display='flex' justifyContent='center'><Text fontSize={{ base: '1xl', md: '3xl' }} fontWeight='500'>{ele.title}</Text></Box>
              
            </Box>
          </Link>
        ))}
      </Box>
    </Box>

    <Box p={5}>
      <Link to='/MassageForMen'><Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216827166-bc6957.jpeg"/></Link>
      
    </Box>



    <Box 
      bg='#e6e9ed'
      color="black" 
      py={{ base: 12, md: 16 }} 
      px={4} 
      textAlign={{ base: "center", md: "left" }} 
      fontWeight="medium"
    >
      <Box 
        display={{ base: "block", md: "flex" }} 
        justifyContent={{ base: "center", md: "space-between" }} 
        alignItems="flex-start" 
        flexDirection={{ base: "column", md: "row" }} 
        maxWidth="1200px" 
        mx="auto" 
        mb={8}
      >
        <Box mb={{ base: 8, md: 0 }} mr={{ base: 0, md: 8 }}>
        <Box display={{base:'flex'}} justifyContent={{base:'center'}}><Image 
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_144,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648471968852-1f2b01.png" 
            alt="Company Logo" 
            h="auto" 
            w={{ base: "200px", md: "200px" }} 
            mb={{ base: 4, md: 0 }} 
          /></Box>  
          
          <Box>
            <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} mb={4}>Company</Heading>
            <List>
              <ListItem>About us</ListItem>
              <ListItem>Term & conditions</ListItem>
              <ListItem>Privacy policy</ListItem>
              <ListItem>Anti-discrimination policy</ListItem>
              <ListItem>Career</ListItem>
            </List>
          </Box>
        </Box>
        
        <Box mb={{ base: 0, md: 0 }} mr={{ base: 0, md: 8 }} mt='60px'>
          <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} mb={4}>Customer</Heading>
          <List>
            <ListItem>UC reviews</ListItem>
            <ListItem>Categories near you</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Contact us</ListItem>
          </List>
        </Box>
        
        <Box mb={{ base: 8, md: 0 }} mr={{ base: 0, md: 8 }} mt='60px'>
          <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} mb={4}>For Partners</Heading>
          <List>
            <ListItem>Register as an professional</ListItem>
          </List>
        </Box>
        
        <Box  mt='60px'>
          <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} mb={4}>Social Links</Heading>
          <List display="flex">
            <ListItem mr={4} fontSize="xl"><RiInstagramFill /></ListItem>
            <ListItem mr={4} fontSize="xl"><FaFacebook /></ListItem>
            <ListItem mr={4} fontSize="xl"><FaTwitter /></ListItem>
            <ListItem fontSize="xl"><FaLinkedin /></ListItem>
          </List>
        </Box>
      </Box>
      
      <Divider color='black' h="2px" my={8} />

      
      <Text mt={8} textAlign="center" fontSize={{ base: "sm", md: "md" }}>
        © Copyright 2024 Urban Company. All rights reserved. | CIN: U74140DL2014PTC274413
      </Text>
    </Box>
    {
              selectedService&&(
                 <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedService.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display='grid' gridTemplateColumns='repeat(3,1fr)' gridRowGap='10px'columnGap="10px">
            {
              selectedService.items.map((service,i)=>(
               <Link to={service.link}  key={i}>
              <Box alignItems='center' alignContent='center' textAlign='center'>
                <Image src={service.img}/>
              </Box>
              <Text>{service.name}</Text>
            </Link>  
              ))
            }
           
          </ModalBody>

          <ModalFooter>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
              )
            }
        </Box>
    )
}