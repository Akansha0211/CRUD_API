import axios from 'axios';
import React, { Component } from 'react';
// import {useHistory} from 'react-router-dom';

class AddPost extends Component {
    state={
        title:'',
        body:''
    };
    
    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault(); 
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(response=>{
                console.log(response);
            })
            .catch(error=>{
                console.log(error);
            })  
        
    }

    render() { 
        const {title, body} = this.state;
        return ( 
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-5">Add A Post</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="from-group mb-3">
                            <textarea type="text" className="form-control" placeholder="Enter Post Title" name="title" value={title} onChange={this.changeHandler} required></textarea>
                        </div>
                        <div className="from-group mb-3">
                            <textarea type="text" className="form-control" placeholder="Enter Post Body" name="body" value={body} onChange={this.changeHandler} required></textarea>
                        </div>
                        <center>
                            <button className="btn btn-primary btn-block">Add Post</button>
                        </center>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default AddPost;