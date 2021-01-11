/*import React,{useState} from 'react'
const Form=()=>{

    const [email, emailchanged] = useState("sheiljagandhi156@gmail.com");
    const [name, namechanged] = useState("selja");
    const handler=(e)=>{
      //  countchanged(count+1);
        const a=e.target.name

        a(e.target.value);
        console.log(e.target.name);
    }
    return(<React.Fragment>
      <form>
          <label>Full Name:</label>
          <input type="text" name="namechanged" onChange={handler} value={name}></input><br></br>
          <label>Email:</label>
          <input type="text" name="email"></input><br></br>
          <button type="submit">Submit</button>
      </form>
    </React.Fragment>);
}
export default Form;
*/
import React from 'react'
import "./form.css"
import {useForm} from'react-hook-form';
const Form=()=>{
    const {register,handleSubmit,errors}=useForm();

    
    return(<React.Fragment>
        
        <form onSubmit={handleSubmit(d =>{
            console.log(d);
            console.log(JSON.stringify(d))
            })}>

    <label>First Name:</label>
    <input type="text" id="name"  name="name" ref={register({required:true,minLength:5})} placeholder="Your name.."></input>
    {errors.name && <span>Please Enter Proper Name</span>}
    <br></br>
    <label>Email:</label>
    <input type="email" id="email" name="email" ref={register({required:true})} placeholder="Your last name.."></input>
    {errors.email && <span>Please Enter Proper Email</span>}
    <br></br>
    
    <input type="submit" value="Submit"></input><br></br>
        </form>
        
      </React.Fragment>);
}
export default Form;