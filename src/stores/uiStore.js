import { observable, action, computed } from 'mobx';
import axios from 'axios';

export class uiStore {
    @observable verifyModalVisible = false;
    @observable verifying = true;
    @observable validUser = true;
    @observable previewUrl = '';
    @observable learnMoreModalVisible = false;
    @observable registerInfoModalVisible = false;
    @observable userName = '';
    @observable registrationPinVisible = false;

    @action 
    setModalVisibility = (visible) => {
        this.verifyModalVisible = visible
        // console.log(' :: :: :: Set Modal Visibility: ', visible);
    }

    @action
    setVerifying = (status) => {
        this.verifying = status;
    }

    @action
    setPreview = (url) => {
        this.previewUrl = url;
    }

    @action
    resetPreview = () => this.previewUrl = '';
    
    @action
    setLearnMoreModalVisibility = (visible) => {
        this.learnMoreModalVisible = visible
    }
    
    @action
    setRegisterInfoModalVisibility = (visible) => {
        this.registerInfoModalVisible = visible;
    }

    @action
    setUserValidity = (valid) => {
        this.validUser = valid;
    }

    @action
    setRegistrationPinVisibility = (visible) => {
        this.registrationPinVisible = visible;
    }
}

export default new uiStore();