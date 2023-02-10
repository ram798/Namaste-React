import { createContext } from "react";

const UserContext = createContext({
    user:{
    name:"Krishna",
    email:"nenedevudu@gmail.com",
}});

export default UserContext;