import { Box, Text, Image, Badge, Button, SimpleGrid } from "@chakra-ui/react";
import { Navbar } from "../../Components/Navbar";
import { AccordionTag } from "../../Components/Accordion";
import { useEffect, useState } from "react";

import { WaterPuriferPackage, selectWaterPurifier } from "../../dataBase/waterPurifier";
import { CartComponentWaterPurifier } from "../../payment/CartComponentWaterPurifier";

export function WaterPurifier() {
  const [waterPurifierCart, setWaterPurifierCart] = useState(() => {
    const storedCart = localStorage.getItem('newWaterPurifierCart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const handleAddToCart = (ele) => {
    setWaterPurifierCart((prevCart) => [...prevCart, ele]);
  };

  useEffect(() => {
    localStorage.setItem('newWaterPurifierCart', JSON.stringify(waterPurifierCart));
  }, [waterPurifierCart]);

  return (
    <Box mt={{base:'130px'}}>
      <Navbar />
      <Box
        display={{ base: 'block', lg: 'flex' }}
        mt={{ base: '50px', lg: '100px' }}
        gap={{ base: '5px', lg: '10px' }}
        px={{ base: 4, md: 8 }}
      >
        <Box flex={{ base: "1", lg: "0 0 30%" }} p={2}>
          <Text
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            mb={{ base: 4, md: 8 }}
            color="gray.700"
          >
          Water Purifier
          </Text>
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={4}
          >
            {selectWaterPurifier.map((ele, i) => (
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
        <Box flex="1"
  alignItems="center"
  overflowY="scroll"
  height={{ base: '900px', md: '1000px' }}
  css={{
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',  
    'scrollbar-width': 'none',  
}}>
          <SimpleGrid columns={{base:1,md:2}} mt={{ base: 4, lg: 8 }}>
            <Box p={5}  flex="1"
  alignItems="center"
  overflowY="scroll"
  height={{ base: '500px', md: '600px' }}
  css={{
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',  
    'scrollbar-width': 'none',  
}}>
              {WaterPuriferPackage.map((ele, i) => (
                <Box key={i} borderRadius="md" bg="white" boxShadow="md" p={4} mb={4}>
                  <Badge colorScheme="green" mb={2}>
                    PACKAGE
                  </Badge>
                  <Box display='flex' justifyContent='space-between' alignItems="center">
                    <Box flex="1">
                      <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }} fontWeight="500" mb={2}>
                        {ele.title}
                      </Text>
                      <Text fontWeight="500" mb={2}>
                        ₹{ele.price.toLocaleString()}
                      </Text>
                      <Text mb={2}>
                        <Text color="grey">{ele.service.first}</Text>
                        <Text color="grey">{ele.service.second}</Text>
                      </Text>
                      <AccordionTag />
                    </Box>
                    <Box textAlign="center" ml={4}>
                      <Image 
                        width={{ base: '60px', md: '80px', lg: '100px' }} 
                        src={ele.image} 
                        mb={2} 
                        borderRadius="md"
                        boxShadow="md"
                      />
                      <Button
                        colorScheme="teal"
                        variant='solid'
                        size="md"
                        borderRadius="md"
                        boxShadow="md"
                        _hover={{ boxShadow: "lg" }}
                        onClick={() => handleAddToCart(ele)}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box flex={{ base: "1", lg: "0 0 30%" }} mt={{ base: 4, lg: 0 }} ml={{ lg: 4 }}>
             <Box bg={'lightgray'}> <CartComponentWaterPurifier cart={waterPurifierCart} setCart={setWaterPurifierCart} /></Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
