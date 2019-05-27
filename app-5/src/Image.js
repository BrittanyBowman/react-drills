//Create an Image component that renders an <img /> element. The src for the <img /> should be passed down as a prop from the parent component. You can use whatever image URL you would like to or you can get a placeholder from https://placeholder.com/

import React, { Component } from 'react';

class Image extends Component {

    render() {
        return (
            <div><center>
                <img src={this.props.myImage} alt="Sunshine" />
                <h2>Sunshine Image</h2>
                </center>
            </div>
        )
    }
}

export default  Image;