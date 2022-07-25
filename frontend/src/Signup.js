import { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = ({getUser}) => {
    
    const [user_name, setUsername] = useState('');
    const [user_email, setEmail] = useState('');
    const [user_pass, setPass] = useState('');
    const history = useHistory();

    const submitUser = async (e) => {
        e.preventDefault();
        const userData = {
            "username": user_name,
            "email": user_email,
            "password": user_pass,
        }

    const result = await fetch('http://127.0.0.1:8000/api/add/' ,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    const resultInJson = await result.json();
    console.log(resultInJson)
    getUser(resultInJson)
    history.push('/')
    }


    return ( 
        <div className="create">
            <h2>Sign up</h2>
            <form onSubmit={submitUser}>
                <label>User name:</label>
                <input 
                    value={user_name}  
                    type="text" 
                    required 
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"/>
                <label>Email:</label>
                <input 
                    value={user_email}
                    type="email" 
                    required 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"/>
                <label>Password:</label>
                <input 
                    value={user_pass}
                    type="password" 
                    required 
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Password"/>
                <button>Sumbit</button>
                <p>{user_name}</p>
                <p>{user_email}</p>
                <p>{user_pass}</p>
            </form>
        </div>
     );
}
 
export default Signup;