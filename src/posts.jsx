import React, { Component } from 'react';
import axios from 'axios';
import './posts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteForever from '@material-ui/icons/DeleteForever';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


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
                <div className ="add-icon-parent">
                    <span className="add_icon"><AddCircleOutlineIcon/></span>
                </div>
                {this.state.posts.map((post)=>{
                    const{userId, id, title, body} = post
                    return(
                        <div className="post card">
                            
                            <div className="ids">
                                <p className="userId badge alert-info">{post.userId}</p>
                                <p className="id badge alert-warning">{post.id}</p>
                            </div>
                            <p className="title">{post.title}</p>          
                            <p className="body">{post.body}</p>
                            <div className="icon">
                                <span className="icon"><ThumbUpAltIcon/></span>
                                <span className="icon"><ThumbDownIcon/></span>
                                <span className="icon"><DeleteForever/></span>
                            </div>
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Posts;