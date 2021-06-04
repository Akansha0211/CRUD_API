import React, { Component } from 'react';
import {AppContext} from './posts';
import Posts from './posts'

class Likes extends Component {
    state = {  }
    render() { 
        return ( 
            <Posts>
                <div className="container">
                    <div className="w-75 mx-auto shadow p-5">
                        <h1 className="text-center mb-4">Likes</h1>
                        <AppContext.Consumer>{(data)=><h3>{data.title}</h3>}</AppContext.Consumer>
                    </div>
                </div>
            </Posts>
         );
    }
}
 
export default Likes;