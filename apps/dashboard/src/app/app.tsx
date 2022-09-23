import { Navigate, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/default-layout';

const Dashboard = () => <div>Dashboard</div>;

export function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="teams" element={<Dashboard />}></Route>
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Route>
    </Routes>
  );
}

export default App;
