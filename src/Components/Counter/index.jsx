import React,{useState} from 'react'
import Button from '../Button'
import CounterText from '../counterText'
import "./index.scss"
import InputText from '../InputText'



const Counter = () => {

  
const [count,setCount] = useState(0)

const [word,setWord] = useState("")
 



const Increment = () =>{
  setCount(count+1)
}
const Decrement = ()=>{
  if(count!==0){
    setCount(count-1)
  }
  else{
    alert("Hop")
  }
}

const addWord = () =>{
  setWord("")
  console.log(word);
}

const handleClick = (e)=>{
  setWord(e.target.value)
  
}


  return (
    <div className='counter'>
   
    
      
<Button text="+" onClick={Increment} />
<CounterText count={count}/>
<Button text="-" onClick={Decrement} />




<Button onClick={addWord} text="Add word"/>

<input type="text" name="" id="" value={word} onChange={handleClick}/>
<InputText word={word}/>


    </div>
  )
}

export default Counter