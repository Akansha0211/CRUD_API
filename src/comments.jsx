import React, { Component } from 'react';
import axios from 'axios';

class Comments extends Component {
    state = { 
        comments:[]
     };
     async componentDidMount(){
         const url = 'https://jsonplaceholder.typicode.com/comments'
         const response = await axios.get(url)
         const data = await response.data;
         this.setState({comments:data})
     }
    render() { 
        return ( 
            <div>
                <table className="table table-hover table-responsive-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th>Post Id</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.comments.map((comment)=>{
                            const{postId, id, name, email, body} = comment
                            return(
                                <tr>
                                    <td>{comment.postId}</td>
                                    <td>{comment.id}</td>
                                    <td>{comment.name}</td>
                                    <td>{comment.email}</td>
                                    <td>{comment.body}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Comments;