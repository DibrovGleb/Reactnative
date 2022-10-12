import Header from "./components/Header";
/*import ShowMessage from "./components/ShowMessage";
import Switches from "./components/Switches";
import FlexBoxes from "./components/FlexBoxes";
import WrapBoxes from "./components/WrapBoxes";
import {Provider} from "@react-native-material/core";*/
import { useState } from "react";
import Loading from "./components/Loading";
import AddElement from "./components/AddElement";

const imgArr = require.context('./pokemons', false, /\.(png|svg)$/),
      images = imgArr.keys().map(imgArr)

function CreateImage (){
  let randomIndex = Math.floor(Math.random() * 11)
  return <img src={images[randomIndex]} alt="" />
}

const App = () => {
  const [load, setload] = useState(true)
    setTimeout(() => {
      setload(null)
    }, 1000)

  return(
    //load ? <Loading/> : 
    <>
      <Header/>
      <AddElement/>
    </>
  )
};

export default App;