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
                    height={ 350 }
                    width={350}
                    ref={ this.setRef }
                    screenshotFormat="image/jpeg"
                    videoConstraints={ videoConstraints }
                />
                <div className='capture-button-container' >
                    <Button 
                        className='take-picture'
                        onClick={ this.capture }
                        style={{ backgroundColor: 'transparent', border: 'none' }}
                    >
                        <Icon 
                            type="chrome" 
                            style={{ 
                                fontSize: '5vw',
                             }}
                        />
                    </Button>
                </div>
            </div>)
    }
}

export default Camera