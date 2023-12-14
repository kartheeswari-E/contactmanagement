import List from './Component/ContactList/List';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from './Component/Addcontact/Add';
import Home from './Component/Home/Home';
import Viewmodal from './Component/View/Viewmodal';
import { Update } from './Component/Updatecontact/Update';

function App() {
  return <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>}>
  
          <Route index element={<List/>} />
          <Route path="addcontacts" element={<Add/>} />
          <Route path="contact/view/:id" element={<Viewmodal/>} />
          <Route path="contact/update/:id" element={<Update/>} />
          </Route>
          </Routes>
          </BrowserRouter>

  </>
}

export default App;
