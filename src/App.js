// import Counter from "./Components/Counter";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Details from "./Components/Pages/Details";
// import Card from "./Components/Card";


function App() {
  
// const person = [
//   {title:"Tofiq",description:"Movsumov"},
//   {title:"Samir",description:"Movsumov"},
//   {title:"Terane",description:"Movsumov"},
//   {title:"Samire",description:"Movsumov"}               
// ]
 

  
  return (
    <div className="App">
  
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/details:id" element={<Details/>} />
    </Routes>

















    {/* <Counter/>   */}
    {/* {
      person.map((item,index)=>(
        <Card key={index} title={item.title} description={item.description}/>
      ))
    } */}
    
    

 
    
    </div>
  );
}

export default App;
