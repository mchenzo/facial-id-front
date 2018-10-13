import { observable, action, computed } from 'mobx';

export class ReportStore {
    @observable reportData = []
    @observable largeCapReport = []
    @observable preemptScreen = []
    @observable weatherReportLoading = false;

    @action
    setReportData = (data) => {
        this.reportData = data;
    }

    @action
    setLargeCapReport = (data) => {
        this.largeCapReport = data;
    }

    @action
    setPreemptScreen = (data) => {
        this.preemptScreen = data;
    }

    @action
    updateLargeCapReport = (dataPt) => {
        this.largeCapReport.push(dataPt);
        // console.log(' :: :: :: Updating large cap rep :: :: :: ', this.largeCapReport)
    }

    @action 
    updatePreemptScreen = (dataPt) => {
        this.preemptScreen.push(dataPt)
    }

    @action
    resetLargeCapReport = () => {
        this.largeCapReport = [];
    }

    @action
    resetPreemptScreen = () => {
        this.preemptScreen = []
    }

    @action
    toggleWeatherReportLoading = () => {
        // console.log(':: Toggle loading :: ', this.weatherReportLoading)
        this.weatherReportLoading = !this.weatherReportLoading;
    }

    @computed get
    getReportData() {
        return this.reportData;
    }

    @computed get
    getLargeCapReport() {
        // console.log(':: Getting Large Cap Report :: ', this.largeCapReport)
        return this.largeCapReport;
    }

    @computed get
    getPreemptScreen() {
        return this.preemptScreen;
    }

}

export default new ReportStore();