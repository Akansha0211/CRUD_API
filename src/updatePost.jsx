import React, { Component } from 'react';


class UpdatePost extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center">Update Post</h2>
                    <div>
                        <form>
                            <div className="form-group mb-3">
                                <input type="number" className="form-control" placeholder="Enter Post Id" required></input>
                            </div>
                            <div className="form-group mb-3">
                                <textarea type="text" className="form-control" placeholder="Enter new Title" required></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <textarea type="text" className="form-control" placeholder="Enter new Body" required></textarea>
                            </div>
                            <center>
                                <button className="btn btn-danger" onClick={this.updatePost}>Update</button>
                            </center>
                        </form>                       
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default UpdatePost;