import React, { Component } from 'react';
import Camera from './Camera';
import VerificationModal from './VerificationModal';
import DocusignModal from './DocusignModal';
import { Steps, Icon } from 'antd';
import '../styles/cameraStyles.css';

const Step = Steps.Step;

class CameraScreen extends Component {

    render() {
        return (
            <div className='camera-screen' >
                
                <div className="camera-container" >
                    <Camera />
                    <VerificationModal />
                    <DocusignModal />
                </div>
            </div>
        )
    }
}

export default CameraScreen