import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import DischargeNotes from './components/DischargeNotes';
import IcuWardCare from './components/IcuWardCare';
import InvestigationForm from './components/InvestigationForm';
import MedicalHistory from './components/MedicalHistory';
import PatientSummaryDischarge from './components/PatientSummaryDischarge';

function App() {
  return (
   <>
     <Link to="/discharge-notes" className='me-3'>Discharge Notes</Link>
     <Link to="/medical-history" className='me-3'>Medical History</Link>
     <Link to="/Icu-WardCare" className='me-3'>IcuWardCare</Link>
     <Link to="/Investigation-Form" className='me-3'>Investigation Form</Link>
     <Link to="/Patient-Summary" className='me-3'>Patient Summary Discharge</Link>
      <Routes>
        <Route path='/discharge-notes' element={<DischargeNotes></DischargeNotes>}>
        </Route>
        <Route path='/medical-history' element={<MedicalHistory></MedicalHistory>}>
        </Route>
        <Route path='/Icu-WardCare' element={<IcuWardCare></IcuWardCare>}>
        </Route>
        <Route path='/Investigation-Form' element={<InvestigationForm></InvestigationForm>}>
        </Route>
        <Route path='/Patient-Summary' element={<PatientSummaryDischarge></PatientSummaryDischarge>}>
        </Route>
      </Routes>
   </>
  );
}

export default App;
