import {useEffect,useState} from "react";
function useEffectDemo(){
    connst [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("")
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch (error => console.error("error fetching user:",error));
},[]);
return(
    <>
        <h2>User List</h2>
        {users.map((user)=>(
        <div className="card" key={user.id}>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>

        </div>
        ))}
    </>
);
}