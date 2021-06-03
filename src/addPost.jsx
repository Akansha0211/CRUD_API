import axios from 'axios';
import React, { Component } from 'react';
// import {useHistory} from 'react-router-dom';

class AddPost extends Component {
    state={
        post:{title:'', body:''}
    };
    
    handleChange = ({currentTarget:textarea}) =>{
        const post = {...this.state.post};
        post[textarea.name] = textarea.value;
        this.setState({post});
    };

   
    handleSubmit = async e =>{
        e.preventDefault();
        console.log("Submitted");
        console.log(this.state.post);

        //call the api 
        
        await axios.post('http://localhost:3000',this.state.post)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            });


        // //redirect 
        // this.props.history.push('/');
    }
    render() { 
        const {post} = this.state;
        return ( 
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-5">Add A Post</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="from-group mb-3">
                            <textarea type="text" className="form-control" placeholder="Enter Post Title" name="title" value={post.title} onChange={this.handleChange} required></textarea>
                        </div>
                        <div className="from-group mb-3">
                            <textarea type="text" className="form-control" placeholder="Enter Post Body" name="body" value={post.body} onChange={this.handleChange} required></textarea>
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