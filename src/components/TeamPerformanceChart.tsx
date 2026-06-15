
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const TeamPerformanceChart = () => {
  const data = [
    { name: 'Vishal Shaw', parts: 24.56, role: 'Specialist' },
    { name: 'Rishav Verma', parts: 19.40, role: 'Specialist' },
    { name: 'Sneha', parts: 16.50, role: 'Specialist' },
    { name: 'Zoa', parts: 16.67, role: 'Specialist' },
    { name: 'Ashmit B', parts: 16.44, role: 'Specialist' },
    { name: 'Rabab', parts: 14.72, role: 'Specialist' },
    { name: 'Shalaj Singh', parts: 14.31, role: 'Specialist' },
    { name: 'Kartik', parts: 14.29, role: 'Automation' }
  ];

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={60}
            fontSize={11}
            stroke="#6b7280"
          />
          <YAxis 
            label={{ value: 'Parts/Day', angle: -90, position: 'insideLeft' }}
            fontSize={11}
            stroke="#6b7280"
          />
          <Bar 
            dataKey="parts" 
            fill="#2563eb"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-gray-600">
        <p><strong>Team Average:</strong> 17.1 parts/day | <strong>Total Output:</strong> ~137 parts/day</p>
      </div>
    </div>
  );
};

export default TeamPerformanceChart;
