import './App.css';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import UserDashboard from './pages/userDashboard';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<ProtectedRoute role={"admin"}><AdminDashboard/></ProtectedRoute>} />
            <Route path="/user" element={<ProtectedRoute role={"user"}><UserDashboard/></ProtectedRoute>} />
            

    </Routes>
    </>
  );
}

export default App;
