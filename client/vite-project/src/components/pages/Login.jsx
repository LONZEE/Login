import { useState } from 'react'

export default function Login() {
  const [ data, setData ] = useState({
    email: '',
    password: ''
  })

  const loginUser = (e) => {
    e.preventDefault() // prevent page refresh
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