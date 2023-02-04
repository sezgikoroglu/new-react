import { useContext } from "react";
import { PersonContext } from "../main";


function Modal({setModal}){
 
    let person={name:"", age:"", job:"", price:""}
   
    const {personList,setPersonList} = useContext(PersonContext)

    const addPerson=(e)=>{
        person[e.target.name]=e.target.value
    }

    const addPersonToArray=()=>{
        if (!(person.name === "" || person.age === "" || person.price === "" || person.job === "")) {
            setPersonList([...personList,person])
            setModal(false)
                            }
    }

    return(
        <div className="modal">

            <h2>Add a New Person</h2>
            <input onChange={addPerson} name="name"  placeholder="name.."/>
            <input onChange={addPerson} name="age"  placeholder="age.."/>
            <input onChange={addPerson} name="job"  placeholder="job.."/>
            <input onChange={addPerson} name="price"  placeholder="price.."/>

            <div className="btn-div">
                <button onClick={(()=>setModal(false))} className="close-btn">Close</button>
                <button onClick={addPersonToArray} className="add-btn">Add</button>
            </div>
        </div>
    )
}

export default Modal