
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TeamPerformanceChart from "@/components/TeamPerformanceChart";
import CompletionProgress from "@/components/CompletionProgress";
import TimelineChart from "@/components/TimelineChart";
import CapacityMetrics from "@/components/CapacityMetrics";
import StrategicRecommendations from "@/components/StrategicRecommendations";
import ExecutiveInsights from "@/components/ExecutiveInsights";
import AIInsights from "@/components/AIInsights";
import PerformanceMatrix from "@/components/PerformanceMatrix";
import RiskAssessment from "@/components/RiskAssessment";
import { TrendingUp, Shield, Target, CheckCircle, Zap, Trophy, Users, Clock } from "lucide-react";

const Index = () => {
  const keyMetrics = [
    {
      title: "COMPLETION STATUS",
      value: "55.1%",
      subtitle: "13,775 of 25,000 parts",
      icon: CheckCircle,
      trend: "11,225 parts remaining",
      status: "completion",
      indicator: "ACCELERATING"
    },
    {
      title: "CURRENT PACE", 
      value: "137/day",
      subtitle: "vs 182 required",
      icon: TrendingUp,
      trend: "45 parts/day gap",
      status: "pace",
      indicator: "SCALING UP"
    },
    {
      title: "TIME REMAINING",
      value: "7-8 Weeks",
      subtitle: "With enhanced strategy",
      icon: Clock,
      trend: "Protected timeline",
      status: "time",
      indicator: "MANAGEABLE"
    },
    {
      title: "ENHANCED STRATEGY",
      value: "225+ Parts/Day",
      subtitle: "With 2 new members",
      icon: Target,
      trend: "24% surplus capacity",
      status: "strategy",
      indicator: "DEPLOYED"
    },
    {
      title: "TEAM CAPACITY",
      value: "10 FTE",
      subtitle: "Optimized workforce",
      icon: Users,
      trend: "Enhanced from 7.5 FTE",
      status: "team",
      indicator: "REINFORCED"
    },
    {
      title: "DELIVERY ASSURANCE",
      value: "43+ Parts/Day",
      subtitle: "Buffer above requirement",
      icon: Shield,
      trend: "Risk mitigation active",
      status: "buffer",
      indicator: "PROTECTED"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completion': return 'border-l-emerald-500 bg-gradient-to-r from-emerald-50/80 to-green-50/80';
      case 'pace': return 'border-l-blue-500 bg-gradient-to-r from-blue-50/80 to-indigo-50/80';
      case 'time': return 'border-l-amber-500 bg-gradient-to-r from-amber-50/80 to-orange-50/80';
      case 'strategy': return 'border-l-purple-500 bg-gradient-to-r from-purple-50/80 to-violet-50/80';
      case 'team': return 'border-l-teal-500 bg-gradient-to-r from-teal-50/80 to-cyan-50/80';
      case 'buffer': return 'border-l-green-500 bg-gradient-to-r from-green-50/80 to-emerald-50/80';
      default: return 'border-l-gray-400 bg-gray-50/80';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'completion': return 'bg-emerald-100 text-emerald-800 border border-emerald-200';
      case 'pace': return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'time': return 'bg-amber-100 text-amber-800 border border-amber-200';
      case 'strategy': return 'bg-purple-100 text-purple-800 border border-purple-200';
      case 'team': return 'bg-teal-100 text-teal-800 border border-teal-200';
      case 'buffer': return 'bg-green-100 text-green-800 border border-green-200';
      default: return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-10">
        
        {/* Executive Header */}
        <div className="text-center space-y-8 py-8">
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Badge className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-3 text-sm font-semibold tracking-wide shadow-lg">
                STRATEGIC DELIVERY ENHANCEMENT PROGRAM
              </Badge>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </div>
            
            <h1 className="text-5xl font-light text-slate-900 tracking-tight leading-tight">
              Master Data
              <span className="block text-4xl font-semibold text-slate-800 mt-2">
                Simplification Program
              </span>
            </h1>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-slate-600 font-medium">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span><strong>Client:</strong> Acme Manufacturing Co. (sample)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span><strong>Partner:</strong> Delivery Excellence Office (sample)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span><strong>Target:</strong> 25,000 Parts</span>
              </div>
            </div>
          </div>
          
          {/* Status Overview */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-emerald-600">55.1%</div>
                <div className="text-sm font-medium text-slate-600">Project Completion</div>
                <div className="text-xs text-slate-500">13,775 / 25,000 parts</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">225+</div>
                <div className="text-sm font-medium text-slate-600">Enhanced Daily Capacity</div>
                <div className="text-xs text-slate-500">vs 182 required parts/day</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">7-8 Weeks</div>
                <div className="text-sm font-medium text-slate-600">Projected Completion</div>
                <div className="text-xs text-slate-500">With 24% delivery buffer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Performance Metrics */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
            <h2 className="text-xl font-semibold text-slate-800 tracking-wide">KEY PERFORMANCE INDICATORS</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className={`${getStatusColor(metric.status)} border-l-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                        {metric.title}
                      </CardTitle>
                    </div>
                    <metric.icon className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-slate-900 leading-none">
                      {metric.value}
                    </div>
                    <p className="text-sm text-slate-600 font-medium">{metric.subtitle}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <Badge className={`text-xs font-medium px-3 py-1 ${getStatusBadgeColor(metric.status)}`}>
                      {metric.trend}
                    </Badge>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded">
                      {metric.indicator}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Insights (Claude-powered) */}
        <AIInsights metrics={keyMetrics} />

        {/* Executive Insights */}
        <ExecutiveInsights />

        {/* Analytics Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
            <h2 className="text-xl font-semibold text-slate-800 tracking-wide">PERFORMANCE ANALYTICS</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg border border-blue-200/50 bg-white/90 backdrop-blur-sm">
              <CardHeader className="border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <TrendingUp className="h-5 w-5 mr-3" />
                  Team Performance Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <TeamPerformanceChart />
              </CardContent>
            </Card>

            <Card className="shadow-lg border border-emerald-200/50 bg-white/90 backdrop-blur-sm">
              <CardHeader className="border-b bg-gradient-to-r from-emerald-600 to-green-600 text-white">
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Target className="h-5 w-5 mr-3" />
                  Completion Progress Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <CompletionProgress />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Performance Matrix */}
        <PerformanceMatrix />

        {/* Strategic Timeline & Capacity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 shadow-lg border border-purple-200/50 bg-white/90 backdrop-blur-sm">
            <CardHeader className="border-b bg-gradient-to-r from-purple-600 to-violet-600 text-white">
              <CardTitle className="text-lg font-semibold flex items-center">
                <Zap className="h-5 w-5 mr-3" />
                Enhanced Delivery Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <TimelineChart />
            </CardContent>
          </Card>

          <Card className="shadow-lg border border-orange-200/50 bg-white/90 backdrop-blur-sm">
            <CardHeader className="border-b bg-gradient-to-r from-orange-600 to-amber-600 text-white">
              <CardTitle className="text-lg font-semibold flex items-center">
                <Trophy className="h-5 w-5 mr-3" />
                Enhanced Team Capacity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <CapacityMetrics />
            </CardContent>
          </Card>
        </div>

        {/* Risk Assessment */}
        <RiskAssessment />

        {/* Strategic Recommendations */}
        <Card className="shadow-lg border border-emerald-200/50 bg-white/90 backdrop-blur-sm">
          <CardHeader className="border-b bg-gradient-to-r from-emerald-600 to-green-600 text-white">
            <CardTitle className="text-lg font-semibold flex items-center">
              <CheckCircle className="h-5 w-5 mr-3" />
              Enhanced Strategy Implementation
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <StrategicRecommendations />
          </CardContent>
        </Card>

        {/* Executive Summary Footer */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-8 py-10 space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-light tracking-wide">DELIVERY ASSURANCE CONFIRMED</h3>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm font-medium">Current Progress</span>
                </div>
                <div className="text-lg font-semibold text-emerald-300">55.1% Complete</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-medium">Enhanced Strategy</span>
                </div>
                <div className="text-lg font-semibold text-blue-300">225+ Parts/Day</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Trophy className="h-5 w-5 text-purple-400" />
                  <span className="text-sm font-medium">Delivery Buffer</span>
                </div>
                <div className="text-lg font-semibold text-purple-300">24% Surplus</div>
              </div>
            </div>
            
            <div className="text-center pt-4 border-t border-slate-700">
              <p className="text-slate-300 text-sm font-light">
                Executive Dashboard • Strategic Enhancement Program • 25,000 Part Delivery • 
                Updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
