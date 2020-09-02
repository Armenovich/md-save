import React from 'react';
import './App.scss';
import TopMenu from './TopMenu/index';
import CarePackage from './carePackage/index';
import ListHospitals from './listHospitals/index';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <TopMenu />
        <CarePackage />
        <ListHospitals />
      </div>
    </div>
  );
}

export default App;
