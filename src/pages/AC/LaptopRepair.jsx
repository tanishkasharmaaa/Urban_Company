import { Box, Text, Image, Badge, Button, ListItem,List } from "@chakra-ui/react";
import { Navbar } from "../../Components/Navbar";
import { AccordionTag } from "../../Components/Accordion";
import { useEffect, useState } from "react";

import { acRepairPackage, selectAcRepair } from "../../dataBase/acRepair";
import { CartComponentAcRepair } from "../../payment/CartComponentAcRepair";
import { laptopPackage, selectLaptopRepair } from "../../dataBase/laptopRepair";
import { CartComponentLaptopRepair } from "../../payment/CartComponentLaptopRepair";

export function LaptopRepair() {
  const [getLaptopRepairCart, setGetLaptopRepairCart] = useState(() => {
    const storedCart = localStorage.getItem('newLaptopRepairCart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const handleAddToCart = (ele) => {
    setGetLaptopRepairCart((prevCart) => [...prevCart, ele]);
  };

  useEffect(() => {
    localStorage.setItem('newLaptopRepairCart', JSON.stringify(getLaptopRepairCart));
  }, [getLaptopRepairCart]);

  return (
    <>
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
            Make up
          </Text>
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={4}
          >
            {selectLaptopRepair.map((ele, i) => (
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
        <Box flex="1" alignItems="center">
          <Image
            src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_829,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1684404847373-61e0ad.jpeg"
            borderRadius="md"
            boxShadow="md"
            height='450px'
            w="100%"
            maxW={{ base: "100%", lg: "auto" }}
            objectFit="cover"
          />
          <Box display="flex" flexDirection={{ base: "column", lg: "row" }} mt={{ base: 1, lg: 1 }}>
            <Box p={5} overflowY="auto" height={{ base: "300px", md: "490px" }} marginTop={{ base: "30px", md: "50px" }}>
              {laptopPackage.map((ele, i) => (
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
<List>
                  <ListItem color='grey' mb={2}>{ele.service?.first}</ListItem>
                  <ListItem color='grey' mb={2}>{ele.service?.second}</ListItem>
                  <ListItem color='grey' mb={2}>{ele.service?.third}</ListItem>
                 </List> 
                  <AccordionTag />
                </Box>
              ))}
            </Box>
            <CartComponentLaptopRepair cart={getLaptopRepairCart} setCart={setGetLaptopRepairCart} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
