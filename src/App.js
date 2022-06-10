
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CounterApp from './pages/CounterApp';
import TodoApp from './pages/TodoApp';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element={<CounterApp/>}></Route>
        <Route path='/todoapp' element={<TodoApp/>}></Route>
        <Route path='/login'  element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
