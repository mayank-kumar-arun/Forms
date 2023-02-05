import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import DischargeNotes from './components/DischargeNotes';
import IcuWardCare from './components/IcuWardCare';
import InvestigationForm from './components/InvestigationForm';
import MedicalHistory from './components/MedicalHistory';

function App() {
  return (
   <>
     <Link to="/discharge-notes" className='me-3'>Discharge Notes</Link>
     <Link to="/medical-history" className='me-3'>Medical History</Link>
     <Link to="/Icu-WardCare" className='me-3'>IcuWardCare</Link>
     <Link to="/Investigation-Form">Investigation Form</Link>
      <Routes>
        <Route path='/discharge-notes' element={<DischargeNotes></DischargeNotes>}>
        </Route>
        <Route path='/medical-history' element={<MedicalHistory></MedicalHistory>}>
        </Route>
        <Route path='/Icu-WardCare' element={<IcuWardCare></IcuWardCare>}>
        </Route>
        <Route path='/Investigation-Form' element={<InvestigationForm></InvestigationForm>}>
        </Route>
      </Routes>
   </>
  );
}

export default App;
