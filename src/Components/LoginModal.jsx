import { Modal,ModalFooter,ModalOverlay,ModalContent,ModalCloseButton,ModalHeader,ModalBody, Input ,Checkbox,Button,Box,useDisclosure,Link} from "@chakra-ui/react"
import { useEffect, useState } from "react"


export function LoginModal({open,close}){
    let [phoneNumber,setPhoneNumber]=useState('');
    let [authNumber,setAuth]=useState(()=>{
        let store=localStorage.getItem('storedNumber');
        return store?JSON.parse(store):''
    })
let [proceed,setProceed]=useState(false);
let[inputNumber,setInputNumber]=useState('');

const { isOpen:isProceedOpen, onOpen:onProceedOpen, onClose:onProceedClose } = useDisclosure()



useEffect(()=>{
    localStorage.setItem('storedNumber',JSON.stringify(authNumber))
},[authNumber])



    function handlePhoneNumber(e){
       
        setPhoneNumber(e.target.value)
        
    }

    function handleProceed(){
        setAuth(phoneNumber)
        setProceed(true)
        onProceedOpen()
    }
    function handleValidation(){
        let getStoreItemValue=JSON.parse(localStorage.getItem('storedNumber'))

if(getStoreItemValue===inputNumber){
  let matched='matched'
localStorage.setItem('matched',JSON.stringify(matched))
onProceedClose()
    }
    else{
      alert('Incorrect Credential')
    }

    }
    return(<>
 
    {
        proceed===true?(
            <Modal  isOpen={isProceedOpen} onClose={onProceedClose}>
        <ModalOverlay />
        <ModalContent p={4}>
            <Link onClick={()=>setProceed(false)}>Edit Number</Link>
          <ModalHeader>Validation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Input type="number" onChange={(e)=>setInputNumber(e.target.value)} placeholder="Enter registered Number"/>
           <br /><br />
           <Button w='100%' onClick={handleValidation}>Validation</Button>
          </ModalBody>

          <ModalFooter>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
        ):(<Modal isOpen={open} onClose={close}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login/Signup</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          
        <Input type="tel" onChange={handlePhoneNumber}  placeholder="Enter your Number"/>
            <br /><br />
  <label>
        <Checkbox defaultChecked/> Get oder updates on WhatsApp</label>
        <Box p={5}> 
            <Button isDisabled={phoneNumber.length<10?true:false}  onClick={handleProceed} width='100%'>Proceed</Button>
        </Box>
       
          </ModalBody>
        
         
        </ModalContent>
      </Modal>)
    }
    
   </>
        
    )
}