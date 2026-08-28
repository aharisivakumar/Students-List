import Studentform from "./studentform"
import Studentlist from "./studentlist"
import Favouritelist from "./favouritelist"
function App(){
  
  return(
    <div className="bg-blue-950 p-8 font-black">
      <Studentform/>
      <hr/>
      <div className="flex flex-row justify-between m-14">
      <Studentlist/>
      <hr/>
      <Favouritelist/>
      </div>
      
    </div>
  )
}
export default App