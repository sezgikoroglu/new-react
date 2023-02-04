import Modal from "./Modal/modal";
import Personlist from "./Personlist/personlist";
import EditModal from "./Modal/editModal";
import { createContext } from "react";
import { useState,useEffect } from  "react";

export const PersonContext=createContext()

function Main(){
    
    const personArray= JSON.parse(localStorage.getItem("personlist")) || []
    const [personList,setPersonList]=useState(personArray)
    const [personEdit,setPersonEdit]=useState({name:"",age:"",job:"",price:"",id:""})
    const modal=false;
    const editmodal=false;
    const [showModal,setShowModal]=useState(modal)
    const [showEditModal,setShowEditModal]=useState(editmodal)
    localStorage.setItem("personlist",JSON.stringify(personList))
    
    return(
        <PersonContext.Provider value={{personList,personEdit,setPersonEdit,setPersonList}}  >
        <div className={showModal||showEditModal ? "transparan mainDiv " : "mainDiv"}>
            <table>
                <thead>
                <tr className="title">
                    <th>Name</th>
                    <th>Age</th>
                    <th>Job</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {personList.map((person,index)=><Personlist key={index} id={index} idPerson={person.id=index} setEditModal={setShowEditModal} person={person} index={index}/>)} 
                </tbody>
            </table>
          
            <button className="add-btn" onClick={()=>{setShowModal(true)}}>Add New Person</button>
        </div>
          {showModal &&  <Modal setModal={setShowModal}/>}
          {showEditModal &&  <EditModal   setEditModal={setShowEditModal} />}
          
        </PersonContext.Provider>
        
    )
    
}

export default Main