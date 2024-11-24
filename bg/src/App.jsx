import { useState ,useCallback} from 'react'
import './App.css'

function App() {

  const[length,setLength] = useState(8);
  const [number,setNumber]  = useState(false);
  const[char,setChar] = useState(false);
  const[Password,setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcqwertyuioplkjhgfdszxcvbnm";

    if(number) str+="0123456789";
    if(char) str+="~!@#$%^&*{}[]()";

    for(let i = 1;i<length;i++){

      let charS = Math.floor(Math.random()*str.length+1);
      pass = str.charAt(charS);

    }

    setPassword(pass);

  },[length,number,char,setPassword])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray'>
      Hello
    </div>
    </>
  )
}

export default App
