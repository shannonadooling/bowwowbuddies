import React, { Component } from 'react';


export default class HomePane extends Component {
  render(){ 
    const {username, imgURL} = this.props.profile 
    return (<div>
              <div>
                {username} {imgURL}
              </div>            
            </div>)
  }
}