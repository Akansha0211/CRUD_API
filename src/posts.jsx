import React, { Component } from 'react';
import axios from 'axios';

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
                        <div>
                            <p>{post.userId}</p>
                            <p>{post.id}</p>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Posts;