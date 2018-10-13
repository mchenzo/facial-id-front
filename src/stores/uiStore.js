import { observable, action, computed } from 'mobx';
import axios from 'axios';

export class uiStore {
    @observable cameraVisible = true;

    @action 
    setCameraVisibility = (visible) => {
        this.cameraVisible = visible
        console.log(' :: :: :: Set Camera Visibility: ', visible)
    }

    
}

export default new uiStore();