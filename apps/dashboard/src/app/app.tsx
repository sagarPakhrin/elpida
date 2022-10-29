import { Navigate, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/default-layout';
import Dashboard from '../pages/dashboard';
import Products from '../pages/products';

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
