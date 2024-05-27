import { Accordion,Box,AccordionButton,AccordionItem,AccordionPanel } from "@chakra-ui/react"
import { AiOutlinePlusCircle } from "react-icons/ai";

export function AccordionTag(){
    return(
        <Accordion allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    bg={isExpanded ? "blue.500" : "gray.200"}
                    color={isExpanded ? "white" : "black"}
                    _hover={{ bg: isExpanded ? "blue.600" : "gray.300" }}
                    _focus={{ boxShadow: "none" }}
                    borderRadius="md"
                    p={2}
                    mb={2}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Details
                    </Box>
                    {isExpanded ? (
                      null
                    ) : (
                      <AiOutlinePlusCircle fontSize="20px" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  bg="white"
                  color="black"
                  borderRadius="md"
                  boxShadow="md"
                  p={4}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
    )
}
