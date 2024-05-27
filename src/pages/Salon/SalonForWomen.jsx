import { Box, Text, Image, Badge,Button} from "@chakra-ui/react";
import { Navbar } from "../../Components/Navbar";
import { selectService } from "../../dataBase/SalonForWomen";
import { packages } from "../../dataBase/SalonForWomen";
import { AccordionTag } from "../../Components/Accordion";
import { useEffect, useState } from "react";
import { CartComponent } from "../../Components/CartComponent";

export function SalonForWomen() {

let [cart,setCart]=useState(()=>{
    let storeToCart=localStorage.getItem('newCart');
    return storeToCart?JSON.parse(storeToCart):[]
})
let getItemFromCart=JSON.parse(localStorage.getItem('newCart'))

console.log(getItemFromCart)

function handleAddtoCart(ele){
setCart([...cart,ele])

}

useEffect(()=>{
    function sendingToCart(){
      return   localStorage.setItem('newCart',JSON.stringify(cart))
    }
    sendingToCart()
    return()=>{
         window.removeEventListener('beforeunload',sendingToCart)
    }
  

},[cart])
  return (
    <>
      <Navbar />
      <Box
      id="Box"
        display={{base:'grid',lg:'flex'}}
        gridTemplateColumns={{base:'1fr',lg:'repeat(2,1fr)'}}
       
        mt="100px"
        gap="10px"
        px={{ base: 4, md: 8 }}
      >
        <Box flex={{ base: "1", lg: "0 0 30%" }} p={2}>
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            mb={{ base: 4, md: 8 }}
            color="gray.700"
          >
            Salon Prime
          </Text>
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={4}
          >
            {selectService.map((ele, i) => (
              <Box
                key={i}
                alignItems="center"
                textAlign="center"
                p={2}
                boxShadow="md"
                borderRadius="md"
                _hover={{ boxShadow: "lg" }}
                bg="white"
              >
                <Box display="flex" justifyContent="center" mb={2}>
                  <Image
                    w={{ base: "80px", md: "100px" }}
                    h={{ base: "80px", md: "100px" }}
                    borderRadius="20px"
                    src={ele.image}
                  />
                </Box>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="semibold"
                  color="gray.600"
                >
                  {ele.title}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
        <Box alignItems="center">
  <Image
    src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_829,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1690564871238-9984f8.jpeg"
    borderRadius="md"
    boxShadow="md"
    w={{ base: "100%", lg: "auto" }}
    maxW="100%"
    objectFit="cover"
  />
  <Box display='flex' >

  
  <Box p={5} overflowY="auto" height="400px" marginTop="50px">
    {packages.map((ele, i) => (
      <Box key={i} borderRadius="md" bg="white" boxShadow="md" p={4} mb={4}>
        <Badge colorScheme="green" mb={2}>
          PACKAGE
        </Badge>
        <Box display='flex' justifyContent='space-between'>
        <Text fontSize="2xl" fontWeight="500" mb={2}>
          {ele.title}
        </Text> 
        <Button  colorScheme="teal"
  size="lg"
  borderRadius="md"
  boxShadow="md"
  _hover={{ boxShadow: "lg" }} onClick={()=>handleAddtoCart(ele)}>Add to Cart</Button>
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
  
<CartComponent getItemFromCart={getItemFromCart} handleAddtoCart={handleAddtoCart}/>
  
  </Box>
</Box>
</Box>
    </>
  );
}
