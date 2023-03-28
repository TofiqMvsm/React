import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./details.scss"
import { base_URL } from '../../Utils/apiLink'
const Details = () => {
    const {id} = useParams()
    const [data,setData] = useState({})

useEffect(()=>{
    axios.get(`${base_URL}/${id}`).then((response)=>{
    setData(response.data)
    console.log(response.data);
    })
},[])
 const {title,description,image,price} = data
  return (
    <div className='details-page'>
    <img src={image} alt="product" className='image' />
    <h1>{title}</h1>
    <p>{description}</p>
    <span>{price}</span>
    </div>
  )
}

export default Details