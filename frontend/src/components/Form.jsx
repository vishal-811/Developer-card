import { useState } from "react";
import axios from "axios"

const Form=({onclickhandler})=>{
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const[interest,setInterest] =useState('');
    const [link,setLink]=useState('');
    function namehandler(e){
        setName(e.target.value)
    }
   
    function descriptionhandler(e){
        setDescription(e.target.value);
    }

    function interesthandler(e){
        setInterest(e.target.value);
    }
  
    function linkhandler(e){
        setLink(e.target.value);
    }

   async  function formsubmithandler(e){
        e.preventDefault();

        const response =await axios.post('http://localhost:3000/user/card',{
            name,
            description,
            interest,
            link
        })

        if(response.status==201){
            console.log(response.data);
            onclickhandler(response.data);
        }

    }

    return(
            <>
            <h1>Generate the Developer Card</h1>
          <form onSubmit={formsubmithandler}>
             <input type="text" placeholder="Enter your Name" value={name} onChange={namehandler}/>
             <br></br>
             <input type="text" placeholder="Description" value={description} onChange={descriptionhandler}/>
             <br></br>
             <input type="text" placeholder="interest" value={interest} onChange={interesthandler}/>
             <br></br>
             <input type="text" placeholder="link" value={link} onChange={linkhandler}/>
             <br></br>
             <button>Generate Card</button>
          </form>
          </>
    )
}


export default Form;