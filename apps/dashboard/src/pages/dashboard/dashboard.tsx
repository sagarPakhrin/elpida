import SalesComparison from '../../components/sales-comparison';
import { data } from './data';

const Dashboard = () => (
  <div className="grid grid-cols-4 gap-7">
    <SalesComparison data={data} />
    <div>asdf</div>
    <div>asdf</div>
    <div>asdf</div>
    <div>asdf</div>
    <div>asdf</div>
  </div>
);

export default Dashboard;
