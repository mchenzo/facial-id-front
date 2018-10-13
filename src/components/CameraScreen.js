import React, { Component } from 'react';
import Camera from './Camera';
import '../styles/cameraStyles.css';

class CameraScreen extends Component {

    render() {
        return (
            <div className="camera-container" >
                <Camera />
            </div>
        )
    }
}

export default CameraScreen