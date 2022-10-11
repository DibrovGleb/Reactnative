import Header from "./components/Header";
import { useState } from "react";
import Loading from "./components/Loading";
import ImageSelect from "./components/ImageSelect";

const App = () => {
  const [load, setload] = useState(true)
    setTimeout(() => {
      setload(null)
    }, 1000)

  return(
    load ? <Loading/> : 
    <>
      <Header/>
      <ImageSelect/> 
    </>
  )
};

export default App;