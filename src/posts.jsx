import React, { Component } from 'react';
import axios from 'axios';
import './posts.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Posts extends Component {
    state = { 
        posts:[]
     };

    async componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await axios.get(url);
        const data = await response.data;
        this.setState({posts:data})
        console.log(this.state.posts);
    }
    
    render() { 
        return ( 
            <div>
                {this.state.posts.map((post)=>{
                    const{userId, id, title, body} = post
                    return(
                        <div className="post card">
                            <p className="userId">{post.userId}</p>
                            <p className="id">{post.id}</p>
                            <p className="title">{post.title}</p>
                            <p className="body">{post.body}</p>
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Posts;