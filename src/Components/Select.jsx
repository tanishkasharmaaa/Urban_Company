import { Select } from "@chakra-ui/react"
export function SelectTag({name,handleChange}){
    return(
        <Select 
        display={{base:'none',md:'flex',lg:'flex'}}
        name={name}
      color='gray' 
      placeholder="Select a location" 
      w={{ base: 'none', md: '300px' }} 
      mb={{ base: 3, md: 0 }}
      onChange={handleChange}
    >
      <option value="Connaught Place">Connaught Place</option>
      <option value="Rajouri Garden">Rajouri Garden</option>
      <option value="Chandni Chowk">Chandni Chowk</option>
      <option value="Hauz Khas Village">Hauz Khas Village</option>
      <option value="Saket">Saket</option>
      <option value="Karol Bagh">Karol Bagh</option>
      <option value="Lajpat Nagar">Lajpat Nagar</option>
      <option value="Greater Kailash">Greater Kailash</option>
      <option value="Janpath">Janpath</option>
      <option value="Sadar Bazaar">Sadar Bazaar</option>
      <option value="Defence Colony">Defence Colony</option>
      <option value="Dwarka">Dwarka</option>
      <option value="Vasant Kunj">Vasant Kunj</option>
      <option value="Paharganj">Paharganj</option>
      <option value="Khan Market">Khan Market</option>
      <option value="Nehru Place">Nehru Place</option>
      <option value="Shahdara">Shahdara</option>
      <option value="Rohini">Rohini</option>
      <option value="Noida">Noida</option>
      <option value="Siri Fort">Siri Fort</option>
    </Select>
    )
}
