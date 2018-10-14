import React, { Component } from 'react';
import { Upload, Icon } from 'antd';
import '../styles/newUserScreen.css';

class NewUserScreen extends Component {

    

    render() {
        const uploadButton = (
            <div>
                <Icon type='plus' />
                <div className="ant-upload-text"><p className='upload-text' >Upload a calm selfie</p></div>
            </div>
        );

        return(
            <div className='new-user-screen' >
                <div className='new-user-top-bar' >
                    <div className='take-photo-wrapper' >
                        
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
                            // action="//jsonplaceholder.typicode.com/posts/"
                            // beforeUpload={beforeUpload}
                            // onChange={this.handleChange}
                        >
                            {/* {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton} */}
                            { uploadButton }
                        </Upload>
                    </div>
                </div>
                <div className='new-user-bottom-bar' >
                    <div className='new-user-bottom-left' >
                    </div>
                    <div className='new-user-bottom-right' >
                    </div>
                </div>
            </div>
        )
    }
}

export default NewUserScreen