import React from 'react';
import './App.scss';
import TopMenu from './TopMenu/index';
import CarePackage from './carePackage/index';
import ListHospitals from './listHospitals/index';
import ServiceStructure from './serviceStructure/index';
import TraditionalCycle from './traditionalCycle/index';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <TopMenu />
        <CarePackage />
        <ListHospitals />
        <ServiceStructure />
        <TraditionalCycle />
      </div>
    </div>
  );
}

export default App;
