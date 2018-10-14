import { observable, action, computed } from 'mobx';
import axios from 'axios';

export class uiStore {
    @observable verifyModalVisible = false;
    @observable verifying = true;
    @observable validUser = true;
    @observable previewUrl = '';
    @observable learnMoreModalVisible = false;

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
        console.log(' open learn more modal ::: ::: :: ::: ', this.learnMoreModalVisible)
        this.learnMoreModalVisible = visible
    }

    @action
    setUserValidity = (valid) => {
        this.validUser = valid;
    }
}

export default new uiStore();