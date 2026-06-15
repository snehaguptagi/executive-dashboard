
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine, Legend } from 'recharts';

const TimelineChart = () => {
  const data = [
    { day: 'Week 1', baseline: 137, optimized: 190, enhanced: 225 },
    { day: 'Week 2', baseline: 137, optimized: 190, enhanced: 230 },
    { day: 'Week 3', baseline: 137, optimized: 190, enhanced: 230 },
    { day: 'Final Sprint', baseline: 137, optimized: 195, enhanced: 235 }
  ];

  return (
    <div className="space-y-4">
      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="day" 
              fontSize={11}
              stroke="#6b7280"
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              label={{ value: 'Parts/Day', angle: -90, position: 'insideLeft' }}
              fontSize={11}
              stroke="#6b7280"
            />
            <ReferenceLine 
              y={82} 
              stroke="#16a34a" 
              strokeDasharray="5 5"
              label="Required Pace"
            />
            <Line 
              type="monotone" 
              dataKey="baseline" 
              stroke="#6b7280" 
              strokeWidth={2}
              name="Current Baseline"
              dot={{ fill: '#6b7280', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="optimized" 
              stroke="#2563eb" 
              strokeWidth={3}
              name="Optimized Projection"
              dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="enhanced" 
              stroke="#dc2626" 
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Enhanced Strategy"
              dot={{ fill: '#dc2626', strokeWidth: 2, r: 4 }}
            />
            <Legend 
              verticalAlign="top" 
              height={36}
              iconType="line"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-semibold text-gray-700 mb-1">Current Baseline</p>
          <p className="text-gray-600">137 parts/day maintaining current pace</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="font-semibold text-blue-700 mb-1">Optimized Projection</p>
          <p className="text-blue-600">190+ parts/day with efficiency improvements</p>
        </div>
        <div className="bg-red-50 p-3 rounded-lg">
          <p className="font-semibold text-red-700 mb-1">Enhanced Strategy</p>
          <p className="text-red-600">225-235 parts/day with resource addition</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineChart;
