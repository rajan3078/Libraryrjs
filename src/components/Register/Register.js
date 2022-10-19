import './Register.css';
import Header from '../Header/Header';


const Register=()=>{
     return(<>
     <Header/>
      <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="text-center">
          <h1>Sign up</h1>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">

      </div>
      <div className="col-md-4 background-register">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">First Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Enter email"/>

          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Last Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Enter email"/>

          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Enter email"/>

          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <button type="submit" className="btn btn-outline-success">Submit</button>
              </div>

            </div>
          </div>

        </form>
      </div>
      <div className="col-md-4">

      </div>
    </div>
  </div>
     </>)
}

export default Register;