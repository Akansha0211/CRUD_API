import React, { Component } from 'react';
import {Consumer} from './context';

class Likes extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h1 className="text-center mb-4">Likes</h1>
                </div>
            </div>
         );
    }
}
 
export default Likes;