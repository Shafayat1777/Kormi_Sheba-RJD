import { useState } from "react";
import { useHistory } from "react-router-dom";
// import Token from './Token';
const Login = ({getUser}) => {

    const [user_name, setUsername] = useState('');
    const [user_pass, setPass] = useState('');
    const [t, setR] = useState(false);
    const history = useHistory();

    const submitUser = async (e) => {
        e.preventDefault();
        const userData = {
            "username": user_name,
            "password": user_pass,
        }
        console.log('Hello')
    const result = await fetch('http://127.0.0.1:8000/api-token-auths/' ,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).catch( (e)=>{
        setR(true)
    })

    const resultInJson = await result.json();
    console.log(resultInJson)
    
    getUser(resultInJson);
    history.push('/')
    }

    return ( 
        <div className="login">
            <h2>Log in</h2>
            <form onSubmit={submitUser}>
                <label>User name:</label>
                <input 
                    value={user_name}  
                    type="text" 
                    required 
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"/>
                <label>Password:</label>
                <input 
                    value={user_pass}
                    type="password" 
                    required 
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Password"/>
                <button>Sumbit</button>
                {t && <p>Invalid Credentials</p>}
                <p>{user_name}</p>
                <p>{user_pass}</p>
            </form>
        </div>
        
     );
}
 
export default Login;