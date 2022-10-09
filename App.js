import Header from "./components/Header";
import ShowMessage from "./components/ShowMessage";
import Switches from "./components/Switches";
import FlexBoxes from "./components/FlexBoxes";
import WrapBoxes from "./components/WrapBoxes";
import {Provider, ActivityIndicator, Stack, Text} from "@react-native-material/core";
import { useState } from "react";
import Loading from "./components/Loading";

const App = () => {
  const [load, setload] = useState(true)
    setTimeout(() => {
      setload(null)
    }, 1000)

  return(
    load ? <Loading/> : <>
      <Header/> 
      <Provider> 
      <ShowMessage/>
      <Switches/>
      <FlexBoxes/>
      <WrapBoxes/>
      </Provider>
    </>
  )
};

export default App;