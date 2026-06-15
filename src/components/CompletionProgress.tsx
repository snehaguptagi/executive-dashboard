
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const CompletionProgress = () => {
  const data = [
    { name: 'Completed', value: 13775, color: '#2563eb' },
    { name: 'Remaining', value: 11225, color: '#e5e7eb' }
  ];

  const COLORS = ['#2563eb', '#e5e7eb'];

  return (
    <div className="space-y-6">
      <div className="h-80 bg-gray-50/30 rounded-lg p-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry) => (
                <span style={{ color: entry.color, fontSize: '14px', fontWeight: '500' }}>
                  {value}: {entry.payload.value.toLocaleString()} parts
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* Key Metrics Grid */}
      <div className="bg-slate-50 rounded-lg p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-slate-600">Completion Rate</span>
              <span className="text-2xl font-bold text-blue-600">55.1%</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-slate-600">Required Daily Pace</span>
              <span className="text-xl font-semibold text-slate-900">182 parts/day</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-slate-600">Current Gap</span>
              <span className="text-xl font-semibold text-orange-600">-45 parts/day</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-slate-600">Enhanced Surplus</span>
              <span className="text-xl font-semibold text-green-600">+43 parts/day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionProgress;
