import { observable, action, computed } from 'mobx';
import axios from 'axios';

export class uiStore {
    @observable screenModalVisible = false;
    @observable currentSym = '';
    @observable companyName = ''
    @observable ceo = ''
    @observable sector = ''
    @observable industry = ''
    @observable website = ''
    @observable description = ''
    @observable logo = ''

    @action
    openScreenModal = (sym) => { 
        this.screenModalVisible = true 
        this.setCurrentSymbol(sym)
        console.log(' ------ :: setting the Current symbol in UI store :: ----- ', this.currentSym)
        // console.log(' >>> Opening Modal <<< ', this.screenModalVisible)
    }

    @action
    setCurrentSymbol = async (sym) => {
        this.currentSym = sym
        let res = await axios.post('https://powerful-island-65241.herokuapp.com/company-info', {
            symbol: sym,
        })
        // let res = await axios.post('http://127.0.0.1:5000/company-info', {
        //     symbol: sym,
        // })
        this.companyName = res.data.companyName;
        this.ceo = res.data.CEO;
        this.sector = res.data.sector;
        this.industry = res.data.industry;
        this.website = res.data.website;
        this.description = res.data.description;
        this.logo = res.data.logo;
        console.log(' ------ :: Business Card :: -----  ', res.data)
    }

    @action
    closeScreenModal = () => { 
        this.screenModalVisible = false 
    }

    @computed get
    getScreenModalVisibility() { 
        return this.screenModalVisible;
    }
}

export default new uiStore();