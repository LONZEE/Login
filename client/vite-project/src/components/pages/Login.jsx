import { useState } from 'react'
import axios from 'axios'
import  Toast  from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const navigate = useNavigate()
  const [ data, setData ] = useState({
    email: '',
    password: ''
  })

  const loginUser = async (e) => {
    e.preventDefault() // prevent page refresh
    const { email, password } = data 
    try { 
    const { data } = await axios.post('/login', { email, password });
    if (data.error) {
      return Toast.error(data.error)
    } else {
      setData({})
      Toast.success('User logged in successfully')
      navigate('/')
    }
  }
  catch (error) {
    console.log(error)
  }
}


  return (
    <div>
      <form onSubmit={loginUser}>
        <input
          type="email"
          placeholder='enter email ...'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder='enter password ...'
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
