import './Login.css';
import download from '../../assets/images/download.jpg';
import { useNavigate } from "react-router-dom";

const Login=()=>{

  let navigate = useNavigate();

  const onLoginHandler=(event)=>{
          event.preventDefault();
          navigate('table');
  }

 return (<div className="container-fluid login-background">
 <div className="row">
     <div className="col-md-12">
       <div  className="text-center">
            <h1>Sign up</h1>
         </div>
     </div>
 </div>
 <div className="row">
     <div className="col-md-4">

     </div>
     <div className="col-md-4 background-login">
         <div className="row">
             <div className="col-md-4">
               <img  width="100" height="100" src={download}/>
             </div>
             <div className="col-md-8">
                 <h1>LIBRARY</h1>
                 <h4>MANAGEMENT SYSTEM</h4>
             </div>
         </div>
       <form>
     
             <div className="form-group">
               <label htmlFor="exampleInputEmail1">Email</label>
               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              
             </div>
           <div className="form-group">
             <label htmlFor="exampleInputPassword1">Password</label>
             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
           </div>
           <div className="row">
               <div className="col-12">
                   <div  className="text-center">
                      <button onClick={onLoginHandler} type="submit" className="btn btn-outline-success">Login</button>
                   </div>
                  
               </div>
           </div>
          
         </form>
     </div>
     <div className="col-md-4">

     </div>
 </div>
</div>)
}
export default Login;