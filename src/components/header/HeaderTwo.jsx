import React, { Component } from 'react'
import "./HeaderTwoStyles.css"

class HeaderTwo extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-content">
                    <h1><a href="/">HOME > </a>{this.props.heading}</h1>
                    <p>{this.props.sub}</p>
                </div>
            </div>
          )
    }
  
}

export default HeaderTwo