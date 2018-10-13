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
            <div 
                className='col-1-2' 
                style={{ marginLeft: '2vw' }}
            >
                <Webcam 
                    audio={ false }
                    ref={ this.setRef }
                    screenshotFormat="image/jpeg"
                    videoConstraints={ videoConstraints }
                />
                <div className='capture-menu' >
                    <button 
                        className='menu-button' 
                        style={{ marginRight: '1vw' }}
                        onClick={ this.capture }
                    >
                        <i 
                            className="material-icons md-48"
                            style={{ fontSize: '64px' }}
                        >camera</i>
                    </button>
                    <button className='menu-button' >
                        <i 
                            className="material-icons md-48"
                            style={{ fontSize: '64px' }}
                        >camera</i>
                    </button>
                </div>
            </div>)
    }
}

export default Camera