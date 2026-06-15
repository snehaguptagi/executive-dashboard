
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, TrendingDown, Clock, Users, Zap } from "lucide-react";

const RiskAssessment = () => {
  const resolvedRisks = [
    {
      category: "Schedule Risk",
      previousLevel: "High",
      currentLevel: "ELIMINATED",
      resolution: "2-week delivery buffer secured through 67% velocity increase",
      impact: "Project completion guaranteed 2 weeks early",
      icon: Clock,
      color: "green"
    },
    {
      category: "Resource Risk", 
      previousLevel: "Medium",
      currentLevel: "MITIGATED",
      resolution: "Cross-training completed, knowledge transfer protocols established",
      impact: "Zero dependency on single resources, full team redundancy",
      icon: Users,
      color: "green"
    },
    {
      category: "Quality Risk",
      previousLevel: "Medium", 
      currentLevel: "ELIMINATED",
      resolution: "98.2% first-pass success rate achieved, robust QA processes",
      impact: "Zero rework backlog, quality standards exceeded",
      icon: Shield,
      color: "green"
    },
    {
      category: "Technical Risk",
      previousLevel: "Low",
      currentLevel: "RESOLVED",
      resolution: "Automation processes optimized, system stability confirmed",
      impact: "Technical foundation solid, no technical debt",
      icon: Zap,
      color: "green"
    }
  ];

  const recoveryMetrics = [
    { metric: 'Overall Risk Score', before: '75/100', after: '5/100', improvement: '93% Reduction' },
    { metric: 'Critical Issues', before: '8 Active', after: '0 Active', improvement: '100% Resolved' },
    { metric: 'Schedule Confidence', before: '45%', after: '98%', improvement: '53pt Increase' },
    { metric: 'Quality Assurance', before: '82%', after: '98.2%', improvement: '16pt Improvement' }
  ];

  return (
    <Card className="shadow-xl border-2 border-green-200">
      <CardHeader className="border-b bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <CardTitle className="text-xl font-bold flex items-center">
          <Shield className="h-6 w-6 mr-3 text-green-200" />
          CRISIS RESOLUTION COMPLETE - ALL RISKS ELIMINATED
        </CardTitle>
        <p className="text-green-100 text-sm font-medium">
          Comprehensive risk mitigation achieved - Client confidence fully restored
        </p>
      </CardHeader>
      <CardContent className="p-8">
        {/* Recovery Success Banner */}
        <div className="mb-8 p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-xl flex items-center">
              <CheckCircle className="h-6 w-6 mr-3" />
              COMPLETE RISK ELIMINATION ACHIEVED
            </h4>
            <Badge className="bg-white text-green-700 font-bold text-lg px-4 py-2">
              CRISIS RESOLVED
            </Badge>
          </div>
          <p className="text-green-100 font-medium leading-relaxed">
            All previously identified risks have been systematically eliminated through decisive action. 
            The project now operates in a risk-free environment with guaranteed delivery outcomes.
          </p>
        </div>

        {/* Risk Resolution Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {resolvedRisks.map((risk, index) => (
            <div key={index} className="p-6 rounded-xl border-l-4 border-green-500 bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <risk.icon className="h-6 w-6 text-green-600" />
                  <h5 className="font-bold text-slate-900 text-lg">{risk.category}</h5>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 line-through">{risk.previousLevel}</div>
                  <Badge className="bg-green-100 text-green-800 font-bold">
                    {risk.currentLevel}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <span className="text-xs font-bold text-green-700">RESOLUTION ACTION:</span>
                  <p className="text-sm text-slate-700 font-medium mt-1">{risk.resolution}</p>
                </div>
                
                <div className="bg-green-100 rounded-lg p-3">
                  <span className="text-xs font-bold text-green-800">BUSINESS IMPACT:</span>
                  <p className="text-sm text-green-800 font-medium mt-1">{risk.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recovery Metrics Dashboard */}
        <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
          <h4 className="font-bold text-slate-900 mb-6 flex items-center text-xl">
            <TrendingDown className="h-6 w-6 mr-3 text-green-600" />
            CRISIS RECOVERY METRICS - BEFORE vs AFTER
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recoveryMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border shadow-sm">
                <h5 className="font-semibold text-slate-900 mb-3">{metric.metric}</h5>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-center">
                    <div className="text-xs text-slate-500 mb-1">BEFORE</div>
                    <div className="text-lg font-bold text-red-600">{metric.before}</div>
                  </div>
                  <div className="text-2xl text-green-500">→</div>
                  <div className="text-center">
                    <div className="text-xs text-slate-500 mb-1">AFTER</div>
                    <div className="text-lg font-bold text-green-600">{metric.after}</div>
                  </div>
                </div>
                <div className="text-center">
                  <Badge className="bg-green-100 text-green-800 font-bold">
                    {metric.improvement}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Confidence Restoration */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
          <h5 className="font-bold text-xl mb-4">CLIENT CONFIDENCE RESTORATION PLAN</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-bold text-lg">IMMEDIATE ACTIONS</div>
              <ul className="mt-2 space-y-1 text-blue-100">
                <li>• Sustained 137 parts/day velocity</li>
                <li>• Weekly progress confirmations</li>
                <li>• Quality gate validations</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-bold text-lg">DELIVERY ASSURANCE</div>
              <ul className="mt-2 space-y-1 text-blue-100">
                <li>• 2-week early completion buffer</li>
                <li>• Zero critical dependencies</li>
                <li>• 98.2% quality guarantee</li>
              </ul>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-bold text-lg">CONTINUOUS MONITORING</div>
              <ul className="mt-2 space-y-1 text-blue-100">
                <li>• Real-time performance tracking</li>
                <li>• Proactive issue prevention</li>
                <li>• Executive dashboard updates</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskAssessment;
