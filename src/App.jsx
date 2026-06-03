import { FaRegImages } from "react-icons/fa6";




const App = () => {

const henddellSend =()=>{
  console.log("infut");
  
}


  return (
    <div className="pt-[200px] flex flex-col items-center justify-center">
      <div className="w-[500px] h-[500px] flex-col bg-amber-700 rounded-2xl">
        <input className="w-[400px] mb-5 h-[50px] border font-normal font-display border-2 border-amber-100 rounded-2xl pl-4 text-2xl ml-[50px] outline-none mt-10 placeholder:text-2xl placeholder:font-display" type="text" placeholder="Caption"/>
 <div className="flex gap-10">
       <div className="justify-center items-center flex w-[150px] h-[50px] mb-5 font-semibold cursor-pointer ml-[50px] font-display text-2xl rounded-2xl border border-2 border-amber-50">
          <FaRegImages className="text-amber-50"/>
      </div>
      <div className="justify-center items-center flex w-[150px] h-[50px] mb-5 font-semibold cursor-pointer ml-[50px] font-display text-2xl rounded-2xl border border-2 border-amber-50">
          <FaRegImages className="text-amber-50"/>
      </div>
 </div>
        <div>
          <button onClick={henddellSend} className=" w-[400px] h-[50px] font-semibold cursor-pointer ml-[50px] font-display text-2xl rounded-2xl bg-amber-50">Send</button>
        </div>
        
      </div>

    </div>
  )
}

export default App