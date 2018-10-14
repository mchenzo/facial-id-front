import { observable, action, computed } from 'mobx';
import axios from 'axios';

export class uiStore {
    @observable verifyModalVisible = false;
    @observable learnMoreModalVisible = false;

    @action 
    setModalVisibility = (visible) => {
        this.verifyModalVisible = visible
        // console.log(' :: :: :: Set Modal Visibility: ', visible);
    }
    
    @action
    setLearnMoreModalVisibility = (visible) => {
        console.log(' open learn more modal ::: ::: :: ::: ', this.learnMoreModalVisible)
        this.learnMoreModalVisible = visible
    }
}

export default new uiStore();