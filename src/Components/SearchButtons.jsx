import { Box, Button, Icon } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

export function SearchButtons({ nav }) {
  return (
    <Box>
      <MotionButton 
        onClick={() => nav('/SalonForWomen')} 
        variant='ghost' 
        color='grey' 
        whileHover={{ scale: 1.1 }}
      >
        <Icon as={LinkIcon} /> Salon
      </MotionButton>
      <MotionButton 
        onClick={() => nav('/SpaForWomen')} 
        variant='ghost' 
        color='grey' 
        whileHover={{ scale: 1.1 }}
      >
        <Icon as={LinkIcon} /> Spa
      </MotionButton>
      <MotionButton 
        onClick={() => nav("/MakeUp")} 
        variant='ghost' 
        color='grey' 
        whileHover={{ scale: 1.1 }}
      >
        <Icon as={LinkIcon} /> Makeup
      </MotionButton>
      <MotionButton 
        onClick={() => nav("/MassageForMen")} 
        variant='ghost' 
        color='grey' 
        whileHover={{ scale: 1.1 }}
      >
        <Icon as={LinkIcon} /> Massage
      </MotionButton>
      <MotionButton 
        onClick={() => nav("/SalonForMen")} 
        variant='ghost' 
        color='grey' 
        whileHover={{ scale: 1.1 }}
      >
        <Icon as={LinkIcon} /> Men salon
      </MotionButton>
      <MotionButton 
        onClick={() => nav("/AcRepair")} 
        variant='ghost' 
        color='grey' 
        whileHover={{ scale: 1.1 }}
      >
        <Icon as={LinkIcon} /> Ac repair
      </MotionButton>
      <MotionButton 
        onClick={() => nav("/LaptopRepair")} 
        variant='ghost' 
        color='grey' 
        whileHover={{ scale: 1.1 }}
      >
        <Icon as={LinkIcon} /> Laptop repair
      </MotionButton>
      <MotionButton 
        onClick={() => nav("/Refrigerator")} 
        variant='ghost' 
        color='grey' 
        whileHover={{ scale: 1.1 }}
      >
        <Icon as={LinkIcon} /> Refrigerator
      </MotionButton>
    </Box>
  );
}
