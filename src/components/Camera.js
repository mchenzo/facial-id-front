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

    b64toBlob = (b64Data, contentType='', sliceSize=512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }

    
    capture = async () => {
        const { uiStore } = this.props;
        const imageSrc = this.webcam.getScreenshot();
        uiStore.setVerifying(true);
        uiStore.resetPreview();
        uiStore.setModalVisibility(true);
        let strImage = imageSrc.replace(/^data:image\/[a-z]+;base64,/, "");

        let res = await axios.post('http://104.248.190.139:5000/face_recognition', {
            image: strImage,
        })

        let contentType = 'image/jpeg';
        let blob = this.b64toBlob(strImage, contentType);
        let blobUrl = URL.createObjectURL(blob);


        console.log(' >>>> Receiving Res :::::  ::::: :::: ', res.data, blobUrl)
        uiStore.setPreview(blobUrl);
        uiStore.setVerifying(false);


    };

    render() {
        const videoConstraints = {
            width: '2600',
            height: '2600',
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
                    </div>
                </div>
            </div>)
    }
}

export default Camera