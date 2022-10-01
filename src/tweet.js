import React from "react";
import './App.css'
// function Tweet (props){
function Tweet ({name, opinion, likes}){

    return(
        <div className="tweet">
            <h3>{name}</h3>
            <p>{opinion}</p>
            <h3>{likes}</h3>
            {/* <h3>{props.name}</h3>
            <p>{props.opinion}</p>
            <h3>{props.likes}</h3> */}
        </div>
    ); 
} 
export default Tweet