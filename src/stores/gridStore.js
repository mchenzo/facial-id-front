import { observable, action } from 'mobx';

export class GridStore {
    @observable gridData = {}

    @action
    setGridData = (data) => {
        this.gridData = data;
    }

    getGridData = () => {
        return this.gridData;
    }
}

export default new GridStore();