import { useContext, useState } from "react"
import { StudentContext } from "./studentcontext"
function Studentform(){
    const {addStudent}=useContext(StudentContext)

    const [name,setname]=useState("")
    const [department,setdepartment]=useState("")
    const departments=["CSE","ECE","EEE","MECH","CIVIL"]
    const handlesubmit=()=>{
        if(!name || !department)
        {
            alert("Enter name and select department")
            return;
        }
        addStudent({
            id:Date.now(),
            name:name.trim(),
            department:department,
        })
        setname("")
        setdepartment("")
    }
    return(
        <div className="bg-white p-5 rounded-md text-center">
        <h1 className="text-3xl animate-pulse">New Student    <span class="inline-block w-2 h-6 bg-gray-800 animate-blink ml-10"></span></h1>
        <input type="text"
        value={name}
        onChange={(e)=>{setname(e.target.value)}} 
        className="border border-black w-[60%] p-1 rounded-3xl text-lg bg-transparent m-2 " />
        <h2 className="text-2xl m-2">Select Department</h2>
        {
            departments.map((dept)=>{
                return(
                <label key={dept} className=" bg-orange-400 p-2 cursor-pointer rounded-md m-5 text black" >
                    <input type="checkbox"
                     checked={department===dept}
                     onChange={()=>{setdepartment(dept)}}
                     className="w-4 h-4 accent-lime-600 cursor-pointer"/>
                    <span>{dept}</span></label>
                )
                
            })
        }
        <br />
        <br />
        <button onClick={handlesubmit} className="bg-green-700 p-2 m-2 rounded cursor-pointer">Add</button>
        </div>
    )
}
export default Studentform