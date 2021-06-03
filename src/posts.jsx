import React, { Component } from 'react';
import axios from 'axios';
import './posts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteForever from '@material-ui/icons/DeleteForever';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';



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
                <div className="search">
                    <Link to="/post/userId"><button className="search-icon"><SearchIcon/></button></Link>
                    <span className="search-text">Search Post</span>
                </div>
                <Link to="/add/post">
                    <div className ="add-icon-parent">   
                        <AddCircleOutlineIcon  className="add_icon" />
                    </div>
                </Link>
                {this.state.posts.map((post)=>{
                    const{ title, body} = post
                    return(
                        <div className="post card">
                            <p className="title">{post.title}</p>          
                            <p className="body">{post.body}</p>
                            <div className="icon">
                                <span className="icon icon-like"><ThumbUpAltIcon/></span>
                                <span className="icon icon-dislike"><ThumbDownIcon/></span>
                                <span className="icon icon-delete"><DeleteForever/></span>
                            </div>
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Posts;