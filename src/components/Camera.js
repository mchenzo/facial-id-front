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

    reset = () => {

    }

    render() {
        const videoConstraints = {
            width: '1300',
            height: '1300',
            facingMode: "user"
        };

        return (
            <div>
                <Webcam 
                    audio={ false }
                    ref={ this.setRef }
                    height={ window.innerHeight }
                    width={ window.innerWidth }
                    style={{ marginLeft: '-1vw', marginTop: '-1vw' }}
                    screenshotFormat="image/jpeg"
                    videoConstraints={ videoConstraints }
                />
                <div className='camera-wrapper' >
                    <div className='camera-menu' >
                        <button 
                            className='menu-button' 
                            style={{ marginRight: '1vw' }}
                            onClick={ this.capture }
                        >
                            <i 
                                className="material-icons md-48"
                                style={{ fontSize: '48px' }}
                            >camera</i>
                        </button>
                        <button 
                            className='menu-button' 
                            onClick={ this.reset }
                        >
                            <i 
                                className="material-icons md-48"
                                style={{ fontSize: '48px' }}
                            >cached</i>
                        </button>
                    </div>
                </div>
            </div>)
    }
}

export default Camera