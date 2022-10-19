import './Table.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Table = () => {

    const[getForm,setForm]=useState({
        bookID:'',
        bookTitle:'',
        bookDescription:'',
        bookAuthor:'',
        bookAvailable:56
    });

    const[getIndex,setIndex] = useState(-1);

    const [getList,setList]=useState([
        {
        bookId:1,
        title:"Harry Potter",
        description:"Welcome to description",
        name:"akash",
        available:44
      },
      {
        bookId:2,
        title:"C",
        description:"Welcome to C",
        name:"akash",
        available:44
      },
      {
        bookId:3,
        title:"C++",
        description:"Welcome to C++",
        name:"akash",
        available:44
      },
      {
        bookId:4,
        title:"Java",
        description:"Welcome to Java",
        name:"akash",
        available:44
      },

]);

const onDeleteHandler=(index)=>{
      alert(index);
    let list = getList;
    list.splice(index,1);
    setList([...list]);
}

const onEditHandler=(index)=>{
       setIndex(index);
       setForm({
        bookID:getList[index].bookId,
        bookTitle:getList[index].title,
        bookDescription:getList[index].description,
        bookAuthor:getList[index].name,
        bookAvailable:getList[index].available
       });
}

const onChangeHandler=(event)=>{
    setForm({...getForm,[event.target.name]:event.target.value})
}

const onFinalEditHandlerSubmit=(event)=>{
    event.preventDefault();
      let list = getList;
      list[getIndex].bookId= getForm.bookID;
      list[getIndex].title = getForm.bookTitle;
      list[getIndex].description = getForm.bookDescription;
      list[getIndex].name = getForm.bookAuthor;
      list[getIndex].available = getForm.bookAvailable;
      setForm([...list]);
}

    return (<>
       <Header/>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        <h1>Add Book</h1>
                    </div>
                </div>
            </div>
            <div className="row">

                <div className="col-md-4">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Book ID  </label>
                            <input type="text"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <button  type="submit" className="btn btn-outline-success"><Link to="/addbook">Add</Link></button>
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
            <div className="row">
                <div className="col-md-1">

                </div>
                <div className="col-md-10">
                    <table className="table">
                        <thead>
                            <tr>
                              
                                <th scope="col">Book ID</th>
                                <th scope="col">Book Title</th>
                                <th scope="col">Book Description</th>
                                <th scope="col">Author Name</th>
                                <th>Books available</th>
                                <th>Edit/Delete</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getList.map((obj,index)=>{
                                return( <tr key={index}>
                                    
                                    <td>{obj.bookId}</td>
                                    <td>{obj.title}</td>
                                    <td>{obj.description}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.available}</td>
                                    <td><i className="fa fa-pencil-square-o" onClick={()=>onEditHandler(index)} data-toggle="modal" data-target="#exampleModal" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;<i className="fa fa-trash" onClick={()=>onDeleteHandler(index)} aria-hidden="true"></i></td>
                                    <td><a href="">Purchase</a></td>
                                </tr>)

                            })}
                           
                           
                           

                        </tbody>
                    </table>
                </div>
                <div className="col-md-1">

                </div>
            </div>

       
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
                    <div className="form-group">
                      <label>Book ID</label>
                      <input type="text" onChange={onChangeHandler}  value={getForm.bookID} className="form-control" name="bookID"/>
                     
                    </div>
                    <div className="form-group">
                        <label>Book Title</label>
                        <input type="text" onChange={onChangeHandler} value={getForm.bookTitle} className="form-control" name="bookTitle"/>
                       
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Book Description</label>
                        <input type="text" onChange={onChangeHandler} value={getForm.bookDescription} className="form-control" name="bookDescription"/>
                       
                      </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Author Name</label>
                      <input type="text" onChange={onChangeHandler} value={getForm.bookAuthor} className="form-control" name="bookAuthor"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Books available</label>
                        <input type="text" onChange={onChangeHandler} value={getForm.bookAvailable} className="form-control" name="bookAvailable"/>
                      </div>
                    <div className="row">
                        <div className="col-12">
                            <div  className="text-center">
                               <button type="submit" data-dismiss="modal" onClick={onFinalEditHandlerSubmit} className="btn btn-outline-success">Edit</button>
                            </div>
                           
                        </div>
                    </div>
                   
                  </form>
      </div>
    
    </div>
  </div>
</div>
        </div>
    </>)
}
export default Table;