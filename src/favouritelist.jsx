import { useContext } from "react"
import { StudentContext } from "./studentcontext"

function Favouritelist(){
    const {favouritestudent,removeFavourite}=useContext(StudentContext)
    return(
        <div className="bg-emerald-400  w-100 rounded-md p-2">
        <h1>Add Favourite Student</h1>
        {favouritestudent.map((student)=>{
            return(
            <div key={student.id} className="bg-white flex items-center justify-between p-2 m-2 rounded-md">
                {student.name} - {student.department}
                <button onClick={()=>removeFavourite(student)} className="bg-red-500 p-1 ml-4 rounded-md">remove</button>
            </div>
            )
        })}
        </div>
    )
}
export default Favouritelist