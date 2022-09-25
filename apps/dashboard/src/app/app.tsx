import { Navigate, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/default-layout';

const Dashboard = () => (
  <div>
    <h1>Welcome to Dashboard</h1>
  </div>
);

const Products = () => (
  <div>
    <h1>Products</h1>
  </div>
);

export function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Route>
    </Routes>
  );
}

export default App;
