import Header from "./components/Header";
/*import ShowMessage from "./components/ShowMessage";
import Switches from "./components/Switches";
import FlexBoxes from "./components/FlexBoxes";
import WrapBoxes from "./components/WrapBoxes";
import {Provider} from "@react-native-material/core";*/
import { Wrap, Text, Button, Flex } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";
import { useState } from "react";
import Loading from "./components/Loading";

const imgArr = require.context('./pokemons', false, /\.(png|svg)$/),
      images = imgArr.keys().map(imgArr)

function CreateImage (){
  let randomIndex = Math.floor(Math.random() * 11)

  return <Image style={{width:100, height:100}} 
          source={{uri: images[randomIndex],}} alt="" />
}

const App = () => {
  const [load, setload] = useState(true),
        [count, setCount] = useState(0),
        [imagesList, setInputList] = useState([]),
        [view, setView] = useState('row'),
        onClickPlus = ()=>{
          setCount(count + 1)
          setInputList(imagesList.concat(<CreateImage key={imagesList.length} />))
        },
        onClickMinus = ()=>{ 
          if(count >0) setCount(count - 1); setInputList(imagesList.slice(0, imagesList.length - 1))
        }
        setTimeout(() => {
          setload(null)
        }, 1000)

  return(
    //load ? <Loading/> : 
    <>
      <Header/>
      <Wrap spacing={2} mt={16} center style={{gap:10}}>
        <Text style={{borderWidth:1, borderColor:'grey', borderRadius:10, padding:7}}>
        Количество покемонов: {count}</Text>
        <Button title={props => <Icon size={24} name="plus" {...props} />}
        onPress={()=>onClickPlus()}/>
        <Button title={props => <Icon size={24} name="minus" {...props} />}
        onPress={()=>onClickMinus()}/>
        <Button title="Изменить вид" 
        onPress={()=>view != 'row' ? setView('row') : setView('column') }/>
      </Wrap>
      <Flex style={{gap:10}} direction={view} mt={10} p={10}  wrap content="start">
        {imagesList}
      </Flex>
    </>
  )
};

export default App;