import './AddBook.css';
import Header from '../Header/Header';

const AddBook=()=>{

    return (<>
    <Header/>
     <div className="container">
          <div className="row">
              <div className="col-md-12">
                <div  className="text-center">
                     <h1>Add Book</h1>
                  </div>
              </div>
          </div>
          <div className="row">
            
              <div className="col-md-4">
                <form>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Book ID  </label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                     
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Book Title</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                       
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Book Description</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                       
                      </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Author Name</label>
                      <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Books available</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                      </div>
                    <div className="row">
                        <div className="col-12">
                            <div  className="text-center">
                               <button type="submit" className="btn btn-outline-success">Add</button>
                            </div>
                           
                        </div>
                    </div>
                   
                  </form>
              </div>
              <div className="col-md-4">

            </div>
              <div className="col-md-4">

              </div>
          </div>
      </div>
    </>)

}
export default AddBook;