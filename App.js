import Header from "./components/Header";
import ShowMessage from "./components/ShowMessage";
import Switches from "./components/Switches";
import FlexBoxes from "./components/FlexBoxes";
import WrapBoxes from "./components/WrapBoxes";
import {Provider} from "@react-native-material/core";

const App = () => {
  return(
  <>
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