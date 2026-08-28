import {createContext, useState} from "react"
export const StudentContext=createContext()
export function Studentprovider({children}){
    const [students,setStudents]=useState([])
    const [favouritestudent,setFavouritestudent]=useState([])

    const addStudent=(student)=>{
        const duplicate = students.some((item)=>
            item.name.toLowerCase()===student.name.toLowerCase()
        );
        if(duplicate){
            alert(" Student Alredy Exists !")
            return
        }
        setStudents((prev)=>[...prev,student])
    }
        const addFavourite = (student)=>{
            setFavouritestudent((prev)=>[...prev,student]);
            setStudents((prev)=>
                prev.filter((item)=>item.id!==student.id)
            )            
        }
        const removeFavourite = (student)=>{
            setFavouritestudent((prev)=>
                prev.filter((item)=>item.id!==student.id)
            )
            setStudents((prev)=>[...prev,student])
        }



return(
    <StudentContext.Provider
    value={{students,favouritestudent,addStudent,addFavourite,removeFavourite,}}>
        {children}
    </StudentContext.Provider>
)
}