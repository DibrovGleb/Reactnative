import React from "react";
import { Flex, Box, Text } from "@react-native-material/core";

export default function FlexBoxes (){
  return(
    <Flex >
      <Box h={80} style={{ backgroundColor: '#6200ee'}}>
        <Text color="#fff">Flex item 1</Text>
      </Box>
      <Box h={60} style={{ backgroundColor: '#5b00e5bf' }}>
        <Text color="#fff">Flex item 2</Text>
      </Box>
      <Flex h={40} style={{ backgroundColor: '#5b00e563' }}>
        <Text>Flex item 3</Text>
      </Flex>
    </Flex>
  )
};
