
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BankForm from './Components/Form.js';
import Material from './Components/Material.js';
import DonationPage from './Components/DonationPage.js';
export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route index element={<DonationPage />}></Route>
          <Route path='/Form' element={<BankForm />}></Route>
          <Route path='/Material' element={<Material />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
