import { useState } from "react"





export const LogIn = () => {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
       console.log(`user submitted : username : ${username} and password ${password}`)
    }


    return <form onSubmit={handleSubmit} >

        <label>Username</label>
        <input 
        type="text" 
        value={username} 
        onChange={(event) => {
            setUsername(event.target.value)
        }} />

        <br />

        <label>Password</label>
        <input 
        type="password"
        value={password} 
        onChange={(event) => {
            setPassword(event.target.value)
        }}/>


        <div>
            <button style={{width: "100%"}} type="submit">Log In</button>
        </div>
        <hr /><hr /><hr />

        <div>
            Username: {username}
        </div>
        <div>
            Password: {password}
        </div>
    </form>
}