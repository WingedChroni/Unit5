import { useState, createContext, useEffect } from "react";

export const LikesContext = createContext ();

export default function LikesContextProvider (props){

    const [likes, setLikes] = useState([]);

    useEffect(()=>{
        console.log("context loaded")
        //is there a value in localstorage
        const storedLikes = localStorage.getItem("likesList");
        console.log("value is ", storedLikes);
        if (storedLikes){
            setLikes(JSON.parse(storedLikes))
        }
        //otherwise it uses the default value
    },[])

    const addItem = (itemToAdd) =>{
        console.log("added", itemToAdd);
        let newLikes = [...likes, itemToAdd];

        setLikes (newLikes);

        localStorage.setItem ("likesList", JSON.stringify(newLikes));
    }

    const removeItem = (productId) =>{
        console.log("removed", productId);
        console.log(likes.filter(item=>item.id !== productId));
        let newLikes = likes.filter(item=>item.id !== productId);
        console.log("new LIkes");
        console.log(newLikes);
        setLikes (newLikes);

        localStorage.setItem("likesList", JSON.stringify (newLikes));
   
    }

    return(
        <LikesContext.Provider value = {{likes, setLikes, addItem, removeItem}} >
            {props.children}
        </LikesContext.Provider>   
     )
    

}