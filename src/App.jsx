
import { useEffect, useState } from "react";
import { FaRegImages } from "react-icons/fa6";
import Post from "./Layouts/Post";
import Popup from "./Components/Popup";
import { getDatabase,onValue,remove , push, ref, set} from "firebase/database";
import toast, { Toaster } from 'react-hot-toast';


const App = () => {
const db = getDatabase();
const [arr,setArr]=useState([])
const [caption,setCaption]=useState([])
const [input,setInput]=useState("")





const henddellSend =()=>{

   if (input == "") {
    toast.error("input this value")
    return;
  } else {
   set(
      push(ref(db, "users")),
      {
        caption: input,
      }
    ) .then(() => {
      toast.success("Post added successfully");
      setInput("");
    })


}

};

useEffect(() => {
  const starCountRef = ref(db, "users/");

  onValue(starCountRef, (snapshot) => {
    let arr = [];

    snapshot.forEach((item) => {
      arr.push({ ...item.val(), id: item.key });
    });

    setCaption(arr);
  });
}, []);


 const henddeleDelt = (item) => {
    remove (ref(db, "users/"+ item.id))
  };

  return (
    <div className="pt-[200px] flex flex-col items-center justify-center">
      <h1 className="text-8xl font-display font-bold mb-10">TODO <span  className="text-8xl text-orange-600 font-display font-bold mb-10">APP</span></h1>
      <div className="w-[500px] h-[500px] flex-col bg-amber-700 rounded-2xl">
        <input value={input} onChange={(e)=>setInput(e.target.value)} className="w-[400px] mb-5 h-[50px] border font-normal font-display border-2 border-amber-100 rounded-2xl pl-4 text-2xl ml-[50px] outline-none mt-10 placeholder:text-2xl placeholder:font-display" type="text" placeholder="Caption"/>
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
 
         
       {caption.map((item) => (
        <Post
          key={item.id}
          textt={item.caption}
          onDelete={() => henddeleDelt(item)}
        />
      ))}
        
       <Popup/>
   
       <Toaster
  position="top-center"
   reverseOrder={false}
/>
    </div>
  )
}

export default App