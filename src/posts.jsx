import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    state = {  }

    async componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await axios.get(url);
        const data = await response.data;
        console.log(data);
    }
    
    render() { 
        return ( 
            <div>
                <h1>HELLO AKANSHA</h1>
            </div>
         );
    }
}
 
export default Posts;