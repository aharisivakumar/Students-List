import { useContext } from "react"
import { StudentContext } from "./studentcontext"
function Studentlist(){
    const {students,addFavourite}=useContext(StudentContext)
    return(
        
        <div className="bg-emerald-400  w-100 rounded-md p-2">
        <h2 className="text-center">Student List</h2>
        {students.map((student)=>{
            return(
            <div key={student.id} className="bg-white flex items-center justify-between p-2 m-2 rounded-md">{student.name}-{student.department}<button onClick={()=>{addFavourite(student)}} className="bg-red-500 p-1 ml-4 rounded-md">Favourite</button></div>
            )
        })}
        </div>
    )
}
export default Studentlist