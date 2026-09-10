// consumer file

import UserContext from "./UserContext";
import { useContext } from "react";

function UserDataa(){
    const {user, setUser} = useContext(UserContext);  // useContext() is a hook that allows you to access the value of a context object. It takes a context object as an argument and returns the current value of that context.

    return (
        <>
        <h1>Name: {user.name}</h1>
        <h1>Age: {user.age}</h1>

        <button onClick={() => {
            setUser({
                ...user,
                name: "Ayushi bansal"
            })
        }}>Change Name</button>
        </>
    )
}
export default UserDataa;