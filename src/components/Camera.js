import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import Webcam from "react-webcam";
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import axios from 'axios';
import '../styles/cameraStyles.css';


@inject("uiStore")
@observer
class Camera extends Component {
    setRef = webcam => {
        this.webcam = webcam;
    };
    
    capture = async () => {
        const { uiStore } = this.props;
        const imageSrc = this.webcam.getScreenshot();
        uiStore.setModalVisibility(true);
        console.log('>>>>> Screen shot :: ', imageSrc);

        let res = await axios.post('https://12f2c9b8.ngrok.io/face_recognition', {
            image: imageSrc,
        })
    };

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
                        {/* <button 
                            className='menu-button' 
                            onClick={ this.reset }
                        >
                            <i 
                                className="material-icons md-48"
                                style={{ fontSize: '48px' }}
                            >cached</i>
                        </button> */}
                    </div>
                </div>
            </div>)
    }
}

export default Camera