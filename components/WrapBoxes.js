import React from "react";
import { Wrap, Box, Text} from "@react-native-material/core";

export default function WrapBoxes (){
  return(
    <Wrap mt={10} items="center" spacing={3}>
      <Box w={140} h={90} style={{ backgroundColor: '#6200ee'}}>
        <Text color="#fff">Wrap item 1</Text>
      </Box>
      <Box w={140} h={60} style={{ backgroundColor: '#5b00e5bf' }}>
        <Text color="#fff">Wrap item 2</Text>
      </Box>
      <Box maxW={100} h={50} style={{ backgroundColor: '#5b00e563' }}>
        <Text>Wrap item 3</Text>
      </Box>
    </Wrap>
  )
};
