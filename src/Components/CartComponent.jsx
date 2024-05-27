import { Box,Text,Button,Badge } from "@chakra-ui/react"
import { AccordionTag } from "./Accordion"
import { Link } from "react-router-dom"
export function CartComponent({getItemFromCart}){
    console.log(getItemFromCart)
    return(
        <Box>
            <Box>
        <Box p={5} overflowY="auto" height="400px" marginTop="50px">
          {getItemFromCart.map((ele, i) => (
            <Box key={i} borderRadius="md" bg="white" boxShadow="md" p={4} mb={4}>
              <Badge colorScheme="green" mb={2}>
                PACKAGE
              </Badge>
              <Box display='flex' justifyContent='space-between'>
                <Text fontSize="2xl" fontWeight="500" mb={2}>
                  {ele.title}
                </Text> 
               
              </Box>
              <Text fontWeight="500" mb={2}>
                ₹{ele.price.toLocaleString()}
              </Text>
              <Text mb={2}>{ele.service?.waxing}</Text>
              <Text mb={2}>{ele.service?.Facial}</Text>
              <Text mb={2}>{ele.service?.faceCleansing}</Text>
              <Text mb={2}>{ele.service?.pedicure}</Text>
              <Text mb={2}>{ele.service?.facialHairRemoval}</Text>
              <AccordionTag/>
            </Box>
          ))}
        </Box>
        
      </Box><Box
  bg="teal"
  p={{ base: 3, md: 5 }}
  color="white"
  boxShadow="md"
  width="100%"
  borderRadius="md"
  mt={4}
  display="flex"
 justifyContent='space-between'
  alignItems="center"
>
  <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" color="white">
    Total:
  </Text>
  <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" color="white">
    ₹ { getItemFromCart.reduce((acc, curr) => acc + Number(curr.price), 0).toLocaleString()}
  </Text>
  <Link to='/cartSalonForWomen'>View Cart Page</Link>
</Box>

</Box>
      
    )
}