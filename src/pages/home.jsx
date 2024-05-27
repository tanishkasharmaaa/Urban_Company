import { Box,Heading,Text,Image,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import { service } from "../dataBase/service";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Home(){
let{isOpen,onOpen,onClose}=useDisclosure()
 let [selectedService,setSelectedService]=useState(null);
 

function handleModal(service ){
setSelectedService(service)

onOpen()
}

    return(
        <div style={{marginTop:'80px'}}>
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
        </div>
    )
}