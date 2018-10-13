import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import '../styles/home.css';
import '../styles/button.css';

class HomeScreen extends Component {
    render() {
        return (
            <div className='homeScreen' > 
                <div className='row' >
                    <div className='col-1-3' ></div>
                    <div className='col-1-3' ></div>
                    <div className='col-1-3 float-right bottom' >
                        <h1>GET</h1>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-1-3' ></div>
                    <div className='col-1-3' ></div>
                    <div className='col-1-3 float-right top' >
                        <h1>STARTED</h1>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-1-3' ></div>
                    <div className='col-1-3' ></div>
                    <div className='col-1-3 float-right center' >
                        <Button 
                            type="primary"
                            className="btn signin"
                        >
                            <Icon type="login" />Login
                        </Button>
                        <Button 
                            type="primary"
                            className="btn register"
                        >
                            <Icon type="form" />Register
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeScreen