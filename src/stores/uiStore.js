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
    @observable docusignModalVisible = false;
    @observable pinModalVisible = false;

    @action 
    setModalVisibility = (visible) => {
        this.verifyModalVisible = visible
        // console.log(' :: :: :: Set Modal Visibility: ', visible);
    }

    @action
    setDocusignModalVisibility = (visible) => {
        this.docusignModalVisible = visible;
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

    @action
    setUserName = (name) => {
        this.userName = name;
        console.log('set username to ', this.userName)
    }

    @action
    setPinModalVisibility = (visible) => {
        this.pinModalVisible = visible;
    }
}

export default new uiStore();