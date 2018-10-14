import React, { Component } from 'react';
import { Upload, Icon } from 'antd';
import NewUserButton from './NewUserButton';
import CameraModal from './CameraModal';
import { inject, observer } from 'mobx-react';
import IconButton from './IconButton';
import '../styles/newUserScreen.css';

const ICONSTYLE = { fontSize: '22px', color: '#FFF', margin: '1vw' }
const INPUTSTYLE = { 
    background: 'transparent', 
    color: '#FFF', 
    placeholder: '#FFF', 
    border: 'none', 
    margin: '1vw',
    fontFamily: 'Raleway',
    fontSize: '16px', 
    fontWeight: 200
}

@inject("uiStore")
@observer
class NewUserScreen extends Component {

    render() {
        const { uiStore } = this.props;

        const uploadButton = (
            <div>
                <Icon type='cloud-upload' style={{ fontSize: '48px' }} />
                <div className="ant-upload-text"><h1>Upload a calm selfie</h1></div>
            </div>
        );

        return(
            <div className='new-user-screen' >
                <div className='new-user-top-bar' >
                    <div className='take-photo-wrapper' >
                        <button className='take-photo' onClick={ () => uiStore.setCameraModalVisibility(true) } >
                            <Icon 
                                type="camera" 
                                theme="filled" 
                                style={{ fontSize: '48px' }}
                            /> <h1>Take a calm selfie</h1>
                        </button>
                    </div>
                    <div className='big-or' >
                        <h1>OR</h1>
                    </div>
                    <div className='upload-wrapper' >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                        >
                            { uploadButton }
                        </Upload>
                    </div>
                </div>
                <div className='new-user-bottom-bar' >
                    <div className='new-user-bottom-left' >
                        <div className='new-user-entry' >
                            <Icon type="user" theme="outlined" style={ ICONSTYLE } />
                            <div className='new-user-divider' ></div>
                            <input size="medium" placeholder="NAME" style={ INPUTSTYLE } className='new-user-field' />
                        </div>
                        <div className='new-user-entry' >
                            <Icon type="lock" theme="filled" style={ ICONSTYLE } />
                            <div className='new-user-divider' ></div>
                            <input size="medium" placeholder="CLASS PIN" style={ INPUTSTYLE } className='new-user-field' />
                        </div>
                        <NewUserButton 
                            text="SIGN IN"
                        />
                        
                        <div
                            style={{ 
                                color: '#FFF',
                                fontFamily: 'Raleway',
                                fontSize: '16px',
                                marginTop: '1vw'
                            }}
                        >Sign in with</div>

                        <div className='icon-button-container' > 
                            <IconButton type="gitlab" />
                            <IconButton type="google" />
                            <IconButton type="linkedin" />
                        </div>
                    </div>
                    <div className='new-user-bottom-right' >
                        <div className='new-user-entry' >
                            <Icon type="user" theme="outlined" style={ ICONSTYLE } />
                            <div className='new-user-divider' ></div>
                            <input size="medium" placeholder="NAME" style={ INPUTSTYLE } className='new-user-field' />
                        </div>
                        <div className='new-user-entry' >
                            <Icon type="mail" theme="filled" style={ ICONSTYLE } />
                            <div className='new-user-divider' ></div>
                            <input size="medium" placeholder="EMAIL" style={ INPUTSTYLE } className='new-user-field' />
                        </div>
                        <div className='new-user-entry' >
                            <Icon type="environment" theme="filled" style={ ICONSTYLE } />
                            <div className='new-user-divider' ></div>
                            <input size="medium" placeholder="SCHOOL" style={ INPUTSTYLE } className='new-user-field' />
                        </div>
                        <NewUserButton 
                            text="REGISTER"
                        />
                    </div>
                </div>
                <CameraModal />
            </div>
        )
    }
}

export default NewUserScreen