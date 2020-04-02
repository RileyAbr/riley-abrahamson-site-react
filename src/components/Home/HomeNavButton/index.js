import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class HomeNavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faceDirect: this.props.faceDirect
        }
    }

    sendFaceToParent = () => {
        this.props.parentCallback(this.state.faceDirect);
    }

    sendEmptyToParent = () => {
        this.props.parentCallback(4);
    }

    render() {
        return (
            <div className="home-nav-wrapper">
                <NavLink className="home-nav-button"
                    onMouseEnter={this.sendFaceToParent}
                    // onMouseLeave={this.sendEmptyToParent}
                    to={"/" + this.props.linkTo}
                >
                    <img
                        className="home-nav-icon"
                        src={this.props.imgSrc}
                        alt={this.props.altText}
                    />
                </NavLink>
                <h1 className="home-nav-title">{this.props.altText}</h1>
            </div>
        )
    }
}

export default HomeNavButton;
