import { CheckBox } from "react-native-web";
import { Text, ListItem, Flex } from "@react-native-material/core";
import { Image } from "react-native";
import { useState } from "react";

export default function ImageSelect(){
    const [isSelected, setSelection] = useState(false),
          [isActive, setActive] = useState(false)

    return(
        <>
        <ListItem
        leading={<CheckBox value={isSelected} onValueChange={setSelection}/>}
        title={<Text>Активирован ли чекбокс: {isSelected ? "👍" : "👎"}</Text>}
        onPress={()=>(setSelection(!isSelected))}/>
        <ListItem
        leading={<CheckBox value={isActive} onValueChange={setActive}/>}
        title={<Text>Показать картинку: {isActive ? "👍" : "👎"}</Text>}
        onPress={()=>(setActive(!isActive))}/>
        <Flex m={10} center>
            <Text>Картинка {isActive?<Text>показана</Text>:<Text>скрыта</Text>}</Text>
            {
                isActive && <Image style={{width:150, height:150}} source={{
                    uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
                }}/>
            }
        </Flex>
        </>
    )
}