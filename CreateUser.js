import React, { useState } from "react";

function CreateUser() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    function makeUser() {
        let data={name, age, address}
        console.warn("MakeUser Called", data)
    }

    return (

        <div>
            <h1>Welcome to CreateUser</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} name="username" 
            value={name} placeholder="Username"/><br /><br />
            <input type="text" onChange={(e) => setAge(e.target.value)} name="age" 
            value={age} placeholder="Age"/><br /><br />
            <input type="text" onChange={(e) => setAddress(e.target.value)} name="address" 
            value={address} placeholder="Address"/><br /><br />
            <button onClick={makeUser} >Create User</button>
        </div>
    )
}
export default CreateUser;