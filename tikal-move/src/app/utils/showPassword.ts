//@ts-nocheck
import { useState } from "react";
import {BsEye, BsEyeSlash} from 'react-icons/bs'

// ok what's wrong with this frfr?


export default function ShowPassword(){

  const [password, setPassword] = useState('')
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(BsEyeSlash)

  const handleToggle = ()=> {
  
    if(type === 'password'){
      setIcon(BsEye)
      setType('text')
    } else {
      setIcon(BsEyeSlash)
      setType('password')
    }
    handleToggle()
  }
  

}
