import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";


const Chatbox = ({ fetchAgain, setFetchAgain }) => {
 

  return (
    <Box
      display="flex" 
      
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};


export default Chatbox
