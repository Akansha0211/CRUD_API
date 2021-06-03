import axios from 'axios';
import React, { Component } from 'react';


class UpdatePost extends Component {
    state = { 
        id:'',
        title:'',
        body:''
     };
    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    };
    
    updatePost = (e)=>{
        axios.put(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`,{
            id: this.state.id,
            title:this.state.title,
            body:this.state.body
        })
        .then(response=>{
            console.log(response.data)
        })
        .catch(error=>{
            console.log(error)
        });
        //STILL WORKING ON IT..
    }
    render() { 
        return ( 
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center">Update Post</h2>
                    <div>
                        <form onSubmit={this.updatePost}>
                            <div className="form-group mb-3">
                                <input type="number" className="form-control" value={this.state.id} name="id" onChange={this.changeHandler} placeholder="Enter Post Id" required></input>
                            </div>
                            <div className="form-group mb-3">
                                <textarea type="text" className="form-control" value={this.state.title} name="title" onChange={this.changeHandler} placeholder="Enter new Title" required></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <textarea type="text" className="form-control" value={this.state.body} name="body" onChange={this.changeHandler} placeholder="Enter new Body" required></textarea>
                            </div>
                            <center>
                                <button className="btn btn-danger">Update</button>
                            </center>
                        </form>                       
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default UpdatePost;