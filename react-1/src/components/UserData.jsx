import { useState } from 'react'

function UserData(){

    const [data, setData] = useState({

        name: "Ayushi",
        age: 10,
        city: "Agra"
    });

    function updateName() {
        setData({
            ...data,             // Spread operator to copy existing data
            name: "Ayushi Bansal"
        });
    }                

    return (
        <>
        <h1>Name: {data.name}</h1>
        <h1>Age: {data.age}</h1>
        <h1>City: {data.city}</h1>

        <button onClick={updateName}>Update Name</button>
        </>
    )
}

export default UserData