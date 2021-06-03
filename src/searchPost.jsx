import React, { Component } from 'react';

class SearchPost extends Component {
    state = { 
        userId:''
     };

     chnageHandler = (e) =>{
         this.setState({[e.target.name]:e.target.value})
     }
     handleSubmit = (e) =>{
        e.preventDefault(); 
        console.log(this.state);
     }
    render() { 
        const{userId} = this.state;
        return (       
            <div>
                <div className="container">
                    <div className="w-75 mx-auto shadow p-5">
                        <h2 className="text-center mb-5">Search A Post</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter User Id" name="userId" value={userId} onChange={this.chnageHandler}></input>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default SearchPost;