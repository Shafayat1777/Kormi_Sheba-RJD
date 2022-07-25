import {useState} from 'react'

const UserPage = ({info}) => {
    const [user_name, setUsername] = useState(info.username);
    // const [user_id, setID] = useState(info.user_id);
    const [user_email, setEmail] = useState(info.email);
    const [user_firstName, setfirstName] = useState(info.first_name);
    const [user_lastName, setlastName] = useState(info.last_name);
    
    const submitUser = async (e) => {
        e.preventDefault();
        const userData = {
            "id": info.user_id,
            "password": info.password,
            "last_login": info.last_login,
            "is_superuser": info.is_superuser,
            "username": user_name,
            "first_name": user_firstName,
            "last_name": user_lastName,
            "email": user_email,
            "is_staff": info.is_staff,
            "is_active": info.is_active,
            "date_joined": info.date_joined,
            "groups": [],
            "user_permissions": []
        }
        console.log(info.id)
    const result = await fetch(`http://127.0.0.1:8000/api/update_user/${info.user_id}/` ,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    const resultInJson = await result.json();
    console.log(resultInJson)
    }
    
    return ( 
        <div className="userPage">
            {user_name && <h2>{user_name}'s Profile</h2>}
            {!user_name && <h2>User Profile</h2>}
            <form onSubmit={submitUser}>
                <label>User name:</label>
                <input 
                    value={user_name}  
                    type="text" 
                    required 
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"/>
                {/* <label>Id:</label>
                <input 
                    value={user_id}
                    type="text" 
                    required 
                    onChange={(e) => setID(e.target.value)}
                    placeholder="id"/> */}
                <label>E-mail:</label>
                <input 
                value={user_email}
                type="email" 
                required 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"/>
                <label>First name:</label>
                <input 
                value={user_firstName}
                type="text" 
                required 
                onChange={(e) => setfirstName(e.target.value)}
                placeholder="First name"/>
                <label>Last name:</label>
                <input 
                value={user_lastName}
                type="text" 
                required 
                onChange={(e) => setlastName(e.target.value)}
                placeholder="Last name"/>
                <button>Update</button>
            </form>
        </div>
     );
}
 
export default UserPage;