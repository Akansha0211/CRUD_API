import React, { Component } from 'react';
import axios from 'axios';

class SearchPost extends Component {
    state = { 
        userId:'',
     };

     chnageHandler = (e) =>{
         this.setState({[e.target.name]:e.target.value})
     }
     handleSubmit = async e =>{
        e.preventDefault(); 
        console.log(this.state);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.userId}`)
        const data = response.data;
        console.log(data)
     }
    render() { 
        const{userId} = this.state;
        return (       
            <div>
                <div className="container">
                    <div className="w-75 mx-auto shadow p-5">
                        <h2 className="text-center mb-5">Search A Post</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter Post Id" name="userId" value={userId} onChange={this.chnageHandler}></input>
                            </div>
                            <center>
                                <button className="btn btn-primary ">Search</button>
                            </center>
                        </form>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default SearchPost;