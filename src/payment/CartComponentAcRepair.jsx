import { Box, Text, Button, Badge, Heading ,Image} from "@chakra-ui/react";
import { AccordionTag } from "../Components/Accordion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function CartComponentAcRepair({ cart, setCart }) {
  console.log(cart)
  const handleDelete = (index) => {
    setCart((previous) => previous.filter((_, i) => i !== index));
  };

  return (
    <Box>
    <Box p={5}  flex="1"
  alignItems="center"
  overflowY="scroll"
  height={{ base: '500px', md: '500px' }}
  css={{
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',  
    'scrollbar-width': 'none',  
}}>
      {cart.length == 0 ? (
        <Box >
          <Box display='flex' justifyContent='center'>
          <Image w='50%' src='https://cdn-icons-png.flaticon.com/512/6792/6792962.png' />
          </Box>
          <Box display='flex' justifyContent='center'><Text fontSize='25px'>Add something to cart</Text></Box>
         
        </Box>
      ) : (
        cart.map((ele, i) => (
          <Box key={i} borderRadius="md" bg="white" boxShadow="md" p={4} mb={4}>
            <Box>
                <Image src={ele.image}/>
            </Box>
            <Badge colorScheme="green" mb={2}>
              PACKAGE
            </Badge>
            <Box display='flex' justifyContent='space-between'>
              <Text fontSize="2xl" fontWeight="500" mb={2}>
                {ele.title}
              </Text>
              <Button variant='ghost' colorScheme="red" onClick={() => handleDelete(i)}>Delete</Button>
            </Box>
            <Text fontWeight="500" mb={2}>
              ₹{ele.price.toLocaleString()}
            </Text>
            <Text mb={2}>{ele.service?.first}</Text>
            <Text mb={2}>{ele.service?.second}</Text>
            <Text mb={2}>{ele.service?.third}</Text>
           
            <AccordionTag />
          </Box>
        ))
      )}
    </Box>
    <Box
      bg="teal"
      p={{ base: 3, md: 5 }}
      color="white"
      boxShadow="md"
      width="100%"
      borderRadius="md"
      mt={4}
      display="flex"
      justifyContent={{ base: 'center', md: 'space-between' }}
      alignItems="center"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" color="white" textAlign={{ base: 'center', md: 'left' }}>
        Total: ₹{cart.reduce((acc, curr) => acc + Number(curr.price), 0).toLocaleString()}
      </Text>
      <Link to='/paymentAcRepair' style={{ color: 'white', marginTop: { base: '10px', md: '0' }, marginLeft: { base: '0', md: '10px' } }}>View Cart Page</Link>
    </Box>
  </Box>
  )  
}
