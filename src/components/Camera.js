import React, { Component } from 'react';
import Webcam from "react-webcam";
import '../styles/cameraStyles.css';


class Camera extends Component {


    render() {
        return (
            <div className='cam-container' >
                <Webcam />
            </div>
        )
    }
}

export default Camera