import React from 'react';
import './App.scss';
import TopMenu from './TopMenu/index';
import CarePackage from './carePackage/index';
import ListHospitals from './listHospitals/index';
import ServiceStructure from './serviceStructure/index';
import TraditionalCycle from './traditionalCycle/index';
import SalesMethods from './salesMethods/index';
import PatientAssessment from './patientSatisfactionScore/index';
import OfficialDocuments from './officialDocument/index';
import BottomMenu from './bottomMenu/index';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <TopMenu />
        <CarePackage />
        <ListHospitals />
        <ServiceStructure />
        <TraditionalCycle />
        <SalesMethods />
        <PatientAssessment />
        <OfficialDocuments />
        <BottomMenu />
      </div>
    </div>
  );
}

export default App;
