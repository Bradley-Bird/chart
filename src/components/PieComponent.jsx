import { PieChart, Pie } from 'recharts';
import data from '../utils/data';

function PieComponent() {
  return (
    <PieChart width={730} height={250}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#d61854"
      />
      <Pie
        data={data}
        dataKey="otherValue"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#3818d6"
      />
    </PieChart>
  );
}

export default PieComponent;
