import React, { Component } from 'react';
import { Modal, Icon } from 'antd';
import { observer, inject } from 'mobx-react';
import Webcam from "react-webcam";

@inject("uiStore")
@observer
class CameraModal extends Component{
    setRef = webcam => {
        this.webcam = webcam;
    };

    render() {
        const { uiStore } = this.props;
        const videoConstraints = {
            width: '720',
            height: '1280',
            facingMode: "user"
        };

        return (
            <Modal 
                    title="Take a Picture!"
                    width="36vw"
                    visible={ uiStore.cameraModalVisible }
                    destroyOnClose={ true }
                    onCancel={() => { uiStore.setCameraModalVisibility(false) }}
                    onOk={() => { uiStore.setCameraModalVisibility(false) }}
                >
                <div style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: '5px',
                    position: 'relative'
                }} >
                    <Webcam 
                        audio={ false }
                        ref={ this.setRef }
                        height={ 480 }
                        width={ 480 }
                        style={{ zIndex: 2 }}
                        screenshotFormat="image/jpeg"
                        videoConstraints={ videoConstraints }
                    />
                    <button 
                        className='menu-button' 
                        style={{ bottom: '10vw', left: '48vw', position: 'fixed', zIndex: 1002 }}
                        onClick={ this.capture }
                    >
                        <i 
                            className="material-icons md-48"
                            style={{ fontSize: '48px' }}
                        >camera</i>
                    </button>
                </div>
            </Modal>
        )
    }
}

export default CameraModal