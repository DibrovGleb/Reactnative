import { useState } from "react";
import { Wrap, Text, TextInput, Button} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";

export default function AddElement (){
    const [text, onChangeText] = useState(""),
          [size, setSize] = useState(16),
          [bold,setBold] = useState(false),
          [italic, setItalic] = useState(false)

    return(
    <>
        <Wrap spacing={2} mt={16} center >
        <Text
        style={{borderWidth:1, borderColor:'grey', borderRadius:10, padding:7}}>
        Размер текста:<Text style={{fontWeight: 'bold'}}>{size}</Text></Text>
            <Button title={props => <Icon size={24} name="plus" {...props} />}
            onPress={()=>(setSize(size+1))}/>
            <Button title={props => <Icon size={24} name="minus" {...props} />}
            onPress={()=>(setSize(size-1))}/>
        </Wrap>

        <Image style={{width:150, height:150}} source={{
            uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        }}/>
        <Image style={{width:150, height:150}} source={{
            uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        }}/>
        <Image style={{width:150, height:150}} source={{
            uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        }}/>
    </>
    )
}