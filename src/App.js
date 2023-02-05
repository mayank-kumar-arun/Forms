import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import DischargeNotes from './components/DischargeNotes';
import MedicalHistory from './components/MedicalHistory';

function App() {
  return (
   <>
     <Link to="/discharge-notes" className='me-3'>Discharge Notes</Link>
     <Link to="/medical-history">Medical History</Link>
      <Routes>
        <Route path='/discharge-notes' element={<DischargeNotes></DischargeNotes>}>

        </Route>
        <Route path='/medical-history' element={<MedicalHistory></MedicalHistory>}>

        </Route>
      </Routes>
   </>
  );
}

export default App;
