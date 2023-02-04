import { useState } from "react"
import { useContext } from "react";
import { PersonContext } from "../main";

function EditModal({setEditModal}){
 
    const {personEdit,setPersonEdit}=useContext(PersonContext)
    const {personList,setPersonList} = useContext(PersonContext)
    const [name, setName] = useState(personEdit.name);
    const [age, setAge] = useState(personEdit.age);
    const [job, setJob] = useState(personEdit.job);
    const [price, setPrice] = useState(personEdit.price);
    const id=personEdit.id;
    console.log(personEdit)
    console.log(name,age,job,price)
   
    const addPersonToArray=(e)=>{
       
        if (!(name === "" || age === "" || price === "" || job === "")) {
        
           let updatedperson={name:name,age:age,job:job,price:price,id:id}
           const updatedList=personList.map((person) => person.id == id ? updatedperson : person)
           console.log([...updatedList])
           setPersonList([...updatedList])
           setEditModal(false)
                            }
    }
    return(
        <div className="modal">
            <h2>Edit Person</h2>
            <input onChange={(e)=> setName(e.target.value)}   name="name"   value={name}  required  placeholder="name.."/>
            <input onChange={(e)=> setAge(e.target.value)}    name="age"    value={age}   required  placeholder="age.."/>
            <input onChange={(e)=> setJob(e.target.value)}    name="job"    value={job}   required  placeholder="job.."/>
            <input onChange={(e)=> setPrice(e.target.value)}  name="price"  value={price} required  placeholder="price.."/>
            <div className="btn-div">
                <button onClick={(()=>setEditModal(false))} className="close-btn">Close</button>
                <button onClick={addPersonToArray} className="add-btn">Edit</button>
            </div>
        </div>
    )
}
export default EditModal