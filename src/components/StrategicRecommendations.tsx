
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Plus, TrendingUp, Users } from "lucide-react";

const StrategicRecommendations = () => {
  const strategies = [
    {
      title: "Resource Addition",
      description: "Add 2 skilled resources to core team",
      impact: "+34 parts/day",
      icon: Plus,
      priority: "High"
    },
    {
      title: "Efficiency Optimization",
      description: "Increase average to ~19 parts/day per person",
      impact: "~190 parts/day total",
      icon: TrendingUp,
      priority: "Medium"
    },
    {
      title: "LTMC Upload Acceleration",
      description: "Dedicated member for parallel uploads",
      impact: "+35-40 parts/day",
      icon: CheckCircle,
      priority: "High"
    },
    {
      title: "Automation Continuity",
      description: "Maintain support and automation workflows",
      impact: "Sustained performance",
      icon: Users,
      priority: "Critical"
    }
  ];

  const outcomes = [
    { metric: "Total Output Potential", value: "225-230 parts/day" },
    { metric: "Daily Buffer Generated", value: "140+ parts/day" },
    { metric: "Project Buffer", value: "3-week completion in 2 weeks" },
    { metric: "Risk Mitigation", value: "High capacity for rework/validation" }
  ];

  return (
    <div className="space-y-6">
      {/* Strategy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {strategies.map((strategy, index) => (
          <Card key={index} className="border-l-4 border-l-blue-600">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <strategy.icon className="h-5 w-5 text-blue-600" />
                <Badge 
                  className={`text-xs ${
                    strategy.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                    strategy.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                  }`}
                >
                  {strategy.priority}
                </Badge>
              </div>
              <CardTitle className="text-sm font-semibold">
                {strategy.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-gray-600 mb-2">
                {strategy.description}
              </p>
              <p className="text-sm font-bold text-blue-600">
                {strategy.impact}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Expected Outcomes */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-blue-900">
            Expected Outcomes with Strategic Implementation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <p className="text-xs text-blue-700 mb-1">{outcome.metric}</p>
                <p className="text-lg font-bold text-blue-900">{outcome.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Final Recommendation */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-green-900 mb-2">
                Final Recommendation
              </h4>
              <p className="text-sm text-green-800">
                The team is well-positioned to close the project on time with the proposed strategy. 
                Implementation of resource addition and efficiency optimization will create substantial 
                buffer capacity for handling contingencies, rework, or final validations as needed.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StrategicRecommendations;
