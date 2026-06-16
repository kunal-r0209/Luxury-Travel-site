import React, { Component } from 'react'
import './Destination.css'

export default class DestinationData extends Component {
    render() {
        return (
            <div className={this.props.cName}>
                <div className="descText">
                    <h2>{this.props.heading}</h2>
                    <p >{this.props.headingText}
                    </p>
                </div>
                <div className="destImages">
                    <img src={this.props.img1} alt="img" />
                    <img src={this.props.img2} alt="img" />
                </div>
            </div>
        )
    }
}
