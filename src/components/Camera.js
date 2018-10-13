import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import Webcam from "react-webcam";
import '../styles/cameraStyles.css';

class Camera extends Component {
    setRef = webcam => {
        this.webcam = webcam;
    };
    
    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        console.log('>>>>> Screen shot :: ', imageSrc);
    };


    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

        return (
            <div>
                <Webcam 
                    audio={ false }
                    ref={ this.setRef }
                    screenshotFormat="image/jpeg"
                    videoConstraints={ videoConstraints }
                />
                <div className='capture-button-container' >
                    <button className='capture-button' >

                    </button>
                </div>
            </div>)
    }
}

export default Camera