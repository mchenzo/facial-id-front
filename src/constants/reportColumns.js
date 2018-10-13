import React from 'react';
import { Icon } from 'antd';

export const sectorColumns = [{
  title: 'Sector Symbol',
  dataIndex: 'sector',
  key: 'sector',
}, {
  title: 'Sector Description',
  dataIndex: 'desc',
  key: 'desc',
}, {
  title: 'Current Monthly Trend Status',
  dataIndex: 'monthStatus',
  render: (monthlyStatus) => <span><Icon type={`arrow-${monthlyStatus}`} theme="outlined" className={`report-${monthlyStatus}`}/>  {monthlyStatus}</span>,
  key: 'monthStatus',
}, {
  title: 'Current Monthly Trend Duration',
  dataIndex: 'monthDur',
  key: 'monthDur',
}, {
  title: 'Current Weekly Trend Status',
  render: (weeklyStatus) => <span><Icon type={`arrow-${weeklyStatus}`} theme="outlined" className={`report-${weeklyStatus}`}/>  {weeklyStatus}</span>,
  dataIndex: 'weekStatus',
  key: 'weekStatus',
}, {
  title: 'Current Weekly Trend Duration',
  dataIndex: 'weekDur',
  key: 'weekDur',
}, {
  title: 'Current Daily Trend Status',
  render: (dailyStatus) => <span><Icon type={`arrow-${dailyStatus}`} theme="outlined" className={`report-${dailyStatus}`}/>  {dailyStatus}</span>,
  dataIndex: 'dailyStatus',
  key: 'dailyStatus',
}, {
  title: 'Current Daily Trend Duration',
  dataIndex: 'dailyDur',
  key: 'dailyDur',
}];


export const stockColumns = [{
  title: 'Company Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Stock Symbol',
  render: (args) => <a onClick={ () => args[0](args[1]) } >{ args[1] }</a>,
  dataIndex: 'stock',
  key: 'stock',
}, {
  title: 'Market Cap',
  dataIndex: 'cap',
  key: 'cap',
},{
  title: 'Monthly Status/Duration',
  render: (args) => <span><Icon type={ `arrow-${args[0]}` } theme="outlined" className={`report-${args[0]}`} /> { args[1] }</span>,
  dataIndex: 'MStatus',
  key: 'MStatus',
}, {
  title: 'Weekly Status/Duration',
  render: (args) => <span><Icon type={ `arrow-${args[0]}` } theme="outlined" className={`report-${args[0]}`} /> { args[1] }</span>,
  dataIndex: 'WStatus',
  key: 'WStatus',
}, {
  title: 'Daily Status/Duration',
  render: (args) => <span><Icon type={ `arrow-${args[0]}` } theme="outlined" className={`report-${args[0]}`} /> { args[1] }</span>,
  dataIndex: 'DStatus',
  key: 'DStatus',
}, {
    title: 'Price / 52 Week High / 52 Week Low',
    render: (args) => <span>{args[0]} / {args[1]} / {args[2]}</span>,
    dataIndex: 'PriceRange',
    key: 'PriceRange'
}, {
    title: 'Daily ∆P-U/∆P-L',
    dataIndex: 'DPUBD',
    key: 'DPUBD'
}, {
    title: 'Recent RSI Peak Slope (Daily / Hourly)',
    dataIndex: 'RSIDir',
    key: 'RSIDir'
}, {
    title: 'Recent Price Peak Slope (Daily / Hourly)',
    dataIndex: 'PriceDir',
    key: 'PriceDir'
}];

export const initialSectorData = [{
    key: 1, 
    sector: 'XLF',
    desc: 'Financial'    // XLF VFH KRE Financial Sector
},{
    key: 2, 
    sector: 'VFH',
    desc: 'Financial' 
},{
    key: 3, 
    sector: 'KRE',
    desc: 'Financial' 
},{
    key: 4, 
    sector: 'XLB',
    desc: 'Materials'    // XLB VAW Materials Sector
},{
    key: 5, 
    sector: 'VAW',
    desc: 'Materials' 
},{
    key: 6, 
    sector: 'XLE',
    desc: 'Energy'    // XLE VDE XOP Energy Sector
},{
    key: 7, 
    sector: 'VDE',
    desc: 'Energy' 
},{
    key: 8, 
    sector: 'XOP',
    desc: 'Energy' 
},{
    key: 9, 
    sector: 'XLV',
    desc: 'Health Care'    // XLV IBB XBI Health Care Sector
},{
    key: 10, 
    sector: 'IBB',
    desc: 'Health Care' 
},{
    key: 11, 
    sector: 'XBI',
    desc: 'Health Care' 
},{
    key: 12, 
    sector: 'XLY',
    desc: 'Consumer Discretionary'    // XLY VCR Consumer Discretionary Sector
},{
    key: 13, 
    sector: 'VCR',
    desc: 'Consumer Discretionary' 
},{
    key: 14, 
    sector: 'XLI',
    desc: 'Industrials'    // XLI ITA VIS Industrials Sector
},{
    key: 15, 
    sector: 'ITA',
    desc: 'Industrials' 
},{
    key: 16, 
    sector: 'VIS',
    desc: 'Industrials' 
},{
    key: 17, 
    sector: 'XLK',
    desc: 'Information Technologies'    // XLK VGT FDN Information Technologies Sector
},{
    key: 18, 
    sector: 'VGT',
    desc: 'Information Technologies' 
},{
    key: 19, 
    sector: 'FDN',
    desc: 'Information Technologies' 
},{
    key: 20, 
    sector: 'XLP',
    desc: 'Consumer Staples'    // XLP VDC Consumer Staples Sector
},{
    key: 21, 
    sector: 'VDC',
    desc: 'Consumer Staples' 
},{
    key: 22, 
    sector: 'VNQ',
    desc: 'Real Estate'  // VNQ SCHH IYR Real Estate Sector
},{
    key: 23, 
    sector: 'SCHH',
    desc: 'Real Estate' 
},{
    key: 24, 
    sector: 'IYR',
    desc: 'Real Estate' 
},{
    key: 25, 
    sector: 'VOX',
    desc: 'Telecommunication Services'    // VOX IYZ Telecommunication Services Sector
},{
    key: 26, 
    sector: 'IYZ',
    desc: 'Telecommunication Services' 
},{
    key: 27, 
    sector: 'XLU',
    desc: 'Utilities'    // XLU VPU Utilities Sector
},{
    key: 28, 
    sector: 'VPU',
    desc: 'Utilities' 
}];
