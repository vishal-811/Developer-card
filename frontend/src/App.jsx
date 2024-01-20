import Form from './components/Form'
import Card from './components/Card'
import { useState } from 'react'


const App=()=>{
  const [formdata ,setFormdata] =useState([]);
  function formclick(data){
    // console.log(data.name)
     setFormdata([...formdata,data]);
  }
  return(
    <>
        <Form onclickhandler={formclick}/>
        <Card data={formdata}/>
    </>
  )
}


export default App;