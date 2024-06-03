import { Box, Text, Image, Badge, Button } from "@chakra-ui/react";
import { Navbar } from "../../Components/Navbar";
import { selectSpaForWomen, spaForWomenPackage } from "../../dataBase/SpaForWomen";
import { AccordionTag } from "../../Components/Accordion";
import { useEffect, useState } from "react";
import { CartComponentSpaForWomen} from "../../payment/CartComponentSpaForWomen";

export function SpaForWomen() {
  const [spaCart, setSpaCart] = useState(() => {
    const storedCart = localStorage.getItem('newSpaForWomen');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const handleAddToCart = (ele) => {
    setSpaCart((prevCart) => [...prevCart, ele]);
  };

  useEffect(() => {
    localStorage.setItem('newSpaForWomen', JSON.stringify(spaCart));
  }, [spaCart]);

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
           Spa Prime
          </Text>
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={4}
          >
            {selectSpaForWomen.map((ele, i) => (
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
        <Box 
  flex="1"
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
          <Image
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_829,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1695974316102-7edcb3.jpeg"
            borderRadius="md"
            boxShadow="md"
            w="100%"
            maxW={{ base: "100%", lg: "auto" }}
            objectFit="cover"
          />
          <Box display="flex" flexDirection={{ base: "column", lg: "row" }} mt={{ base: 4, lg: 8 }}>
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
              {spaForWomenPackage.map((ele, i) => (
                <Box key={i} borderRadius="md" bg="white" boxShadow="md" p={4} mb={4}>
                  <Badge colorScheme="green" mb={2}>
                    PACKAGE
                  </Badge>
                  <Box display='flex' justifyContent='space-between'>
                    <Text fontSize="2xl" fontWeight="500" mb={2}>
                      {ele.title}
                    </Text>
                    <Button
                      colorScheme="teal"
                      variant='ghost'
                      size="lg"
                      borderRadius="md"
                      boxShadow="md"
                      _hover={{ boxShadow: "lg" }}
                      onClick={() => handleAddToCart(ele)}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                  <Text fontWeight="500" mb={2}>
                    ₹{ele.price.toLocaleString()}
                  </Text>
                  <Text>{ele.time}</Text>
                  <Text color='grey' mb={2}>{ele.service?.waxing}</Text>
                  <Text color='grey' mb={2}>{ele.service?.Facial}</Text>
                  <Text color='grey' mb={2}>{ele.service?.faceCleansing}</Text>
                  <Text color='grey' mb={2}>{ele.service?.pedicure}</Text>
                  <Text color='grey' mb={2}>{ele.service?.facialHairRemoval}</Text>
                  <AccordionTag />
                </Box>
              ))}
            </Box>
            <CartComponentSpaForWomen cart={spaCart} setCart={setSpaCart} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

