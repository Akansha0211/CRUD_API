import React, { Component } from 'react';

class AddUser extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-5">Add A Post</h2>
                    <form>
                        <div className="form-group mb-3">
                            <textarea type="text" className="form-control" placeholder="Enter post title" name="title"></textarea>
                
                        </div>
                        <div className="form-group">
                            <textarea type="text" className="form-control" placeholder="Enter Post Body" name="body"></textarea>
                        </div>
                        <button className="btn btn-primary btn-block">Add Post</button>
                    </form>
                </div>
                
            </div>
         );
    }
}
 
export default AddUser;