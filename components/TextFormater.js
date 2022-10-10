import { useState } from "react";
import { Wrap, Text, TextInput, Button, Badge} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function TextFormater (){
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
            <Button title="B" onPress={()=>(bold ? setBold(null): setBold('bold'))}/>
            <Button title="I" onPress={()=>(italic ? setItalic(null): setItalic('italic'))}/>
        </Wrap>
        <TextInput multiline numberOfLines={6}
        style={{margin:14}} inputStyle={{fontSize:size, fontWeight:bold, fontStyle:italic}}
        variant="outlined" placeholder="Введите текст для форматирования"
        onChangeText={text => onChangeText(text)}/>
        
    </>
    )
}