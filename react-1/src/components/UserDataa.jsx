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

// useEffect ke andr jo fn dete vo ek hi baar chlta, agr usse dubara chlana h to use dependency array me variable 
// pass krna pdta h, jiske change hone pr useEffect dobara chlta h. agr dependency array empty h to useEffect sirf 
// ek hi baar chlta h.