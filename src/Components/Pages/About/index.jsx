
import { Link } from 'react-router-dom'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "./index.scss"
import {base_URL} from '../../Utils/apiLink'

const About = () => {

  const [data,setData] = useState([])

  useEffect(()=>{
    axios.get(`${base_URL}`).then((response)=>{
    console.log(response.data)
    setData(response.data)

    })
  },[])


  return (
    <div className='about'>
<table id="customers">
            <thead>
            <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Description</th>
    <th>Price</th>
    <th>Actions</th>
  </tr>
            </thead>
 <tbody>

 {
    
    data.map((item)=>(
      <tr key={item.id}>
      <td>{item.id}</td>
    <td>{item.title}</td>
    <td>{item.description.slice(0,15)}</td>
    <td>{item.price}$</td>
    <td>
    <Link to={`/details${item.id}`}>
    <span className='Details'>Details</span> 
    </Link>
   
      / <span className='Delete'>Delete</span> 
           </td>
    </tr>
    ))}

  
 </tbody>
  
</table>
    </div>
                
  )
}

export default About