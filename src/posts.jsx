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
import UpdateRoundedIcon from '@material-ui/icons/UpdateRounded';

export const AppContext = React.createContext(); // creating context object

class Posts extends Component {
    state = { 
        posts:[]
     };
     //To manage GET REQUESTS FROM JSON API
    async componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await axios.get(url);
        const data = await response.data;
        this.setState({posts:data})
        console.log(this.state.posts);
    }
    
    // To manage DELETE REQUESTS
    handleDelete = (id,e)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response=>{
                console.log(response);
                console.log(response.data);
            })
        const posts = this.state.posts.filter(item=>item.id !==id);
        this.setState({posts});    
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
                    const{ userId,id,title, body} = post
                    return(
                        <div className="post card">
                            <p className="title">{post.title}</p>          
                            <p className="body">{post.body}</p>
                            <div className="icon">
                                <Link to="/post/update"><button className="icon"><UpdateRoundedIcon/></button></Link>
                                <AppContext.Provider value={this.state}>
                                    <button className="icon icon-like" ><ThumbUpAltIcon/></button>
                                </AppContext.Provider>
                                <button className="icon icon-dislike"><ThumbDownIcon/></button>
                                <button className="icon icon-delete" onClick={(e)=> this.handleDelete(post.id, e)}><DeleteForever/></button>
                            </div>
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Posts;