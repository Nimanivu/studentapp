import logo from './logo.svg';
import './App.css';
import Addstudent from './component/Addstudent';
import Searchstudent from './component/Searchstudent';
import Deletestudent from './component/Deletestudent';
import Viewallstudent from './component/Viewallstudent';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addstudent/>}/>
      <Route path='/search' element={<Searchstudent/>}/>
      <Route path='/delete' element={<Deletestudent/>}/>
      <Route path='/view' element={<Viewallstudent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
