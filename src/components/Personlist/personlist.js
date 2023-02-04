import { useState } from "react";
import { useContext } from "react";
import { PersonContext } from "../main";

function Personlist({person,index,setEditModal}){
   
    const {personEdit,setPersonEdit} = useContext(PersonContext)
    const {personList,setPersonList} = useContext(PersonContext)
    
    const edit=(e)=>{
        setEditModal(true)
        
        let element=e.target.parentElement.parentElement.parentElement
        
        let personEdit={
            name:element.children[0].innerText,
            age:element.children[1].innerText,
            job:element.children[2].innerText,
            price:element.children[3].innerText,
            id:element.id
        
        }  
        setPersonEdit(personEdit)
        console.log(personEdit)
    }
    return(
        <>
        <tr className="item" id={index} >
                <td  name="name">{person.name}</td>
                <td  name="age">{person.age}</td>
                <td  name="job">{person.job}</td>
                <td  name="price">{person.price}</td>
                {/* <td ><button onClick={()=>setPersonList([ ...personList.slice(0,index), ...personList.slice(index+1)])}>Delete</button></td>
                <td id={index}><button onClick={edit}>Edit</button></td> */}
                <td className="buttons" id={index}><button onClick={()=>setPersonList([ ...personList.slice(0,index), ...personList.slice(index+1)])}>  <img src="images/trah.png" alt="" /> </button>
                <button onClick={edit}><img src="images/edit-new-icon-22.png" alt="" /></button></td>
        </tr>
        </>
    )
}

export default Personlist