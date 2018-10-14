import { observable, action, computed } from 'mobx';
import axios from 'axios';

export class uiStore {
    @observable verifyModalVisible = false;
    @observable verifying = true;
    @observable validUser = true;
    @observable previewUrl = '';
    @observable learnMoreModalVisible = false;
    @observable userName = '';
    @observable docusignModalVisible = false;

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
        console.log(' open learn more modal ::: ::: :: ::: ', this.learnMoreModalVisible)
        this.learnMoreModalVisible = visible
    }

    @action
    setUserValidity = (valid) => {
        this.validUser = valid;
    }

    @action
    setUserName = (name) => {
        this.userName = name;
        console.log('set username to ', this.userName)
    }
}

export default new uiStore();