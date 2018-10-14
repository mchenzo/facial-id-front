import { observable, action, computed } from 'mobx';
import axios from 'axios';

export class uiStore {
    @observable verifyModalVisible = false;
    @observable verifying = true;
    @observable previewUrl = '';
    @observable learnMoreModalVisible = false;
    @observable registerInfoModalVisible = false;

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
}

export default new uiStore();