import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, KeyRound, Loader2, AlertCircle } from "lucide-react";

// Default model — change to any Claude model your API key can access.
const MODEL = "claude-sonnet-4-6";

interface Metric {
  title: string;
  value: string;
  subtitle: string;
}

interface AIInsightsProps {
  metrics: Metric[];
}

const AIInsights = ({ metrics }: AIInsightsProps) => {
  const [apiKey, setApiKey] = useState(
    () => localStorage.getItem("anthropic_api_key") || ""
  );
  const [showKey, setShowKey] = useState(
    () => !localStorage.getItem("anthropic_api_key")
  );
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState("");
  const [error, setError] = useState("");

  const saveKey = (k: string) => {
    setApiKey(k);
    localStorage.setItem("anthropic_api_key", k);
  };

  const generate = async () => {
    if (!apiKey) {
      setError("Enter your Anthropic API key first.");
      setShowKey(true);
      return;
    }
    setLoading(true);
    setError("");
    setInsight("");

    const summary = metrics
      .map((m) => `- ${m.title}: ${m.value} (${m.subtitle})`)
      .join("\n");
    const prompt =
      "You are an executive advisor reviewing a delivery program dashboard. " +
      "Using ONLY the metrics below, write a tight briefing with three labelled sections:\n" +
      "1. Summary — two sentences on overall health.\n" +
      "2. Top risks — the two most pressing, each one line, grounded in the numbers.\n" +
      "3. Recommended actions — the two highest-leverage moves, each one line.\n\n" +
      `Metrics:\n${summary}`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 800,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error?.message || `API error ${res.status}`);
      }
      setInsight(data?.content?.[0]?.text ?? "No response returned.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Request failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-lg border border-violet-200/50 bg-white/90 backdrop-blur-sm">
      <CardHeader className="border-b bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <CardTitle className="text-lg font-semibold flex items-center justify-between">
          <span className="flex items-center">
            <Sparkles className="h-5 w-5 mr-3" />
            AI Insights
          </span>
          <button
            onClick={() => setShowKey((s) => !s)}
            className="text-xs font-normal opacity-80 hover:opacity-100 flex items-center"
            aria-label="API key settings"
          >
            <KeyRound className="h-4 w-4 mr-1" />
            {apiKey ? "Change key" : "Set key"}
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {showKey && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">
              Anthropic API key (stored only in your browser, never sent anywhere but Anthropic)
            </label>
            <Input
              type="password"
              placeholder="sk-ant-..."
              value={apiKey}
              onChange={(e) => saveKey(e.target.value)}
            />
            <p className="text-xs text-slate-500">
              Get one at{" "}
              <a
                href="https://console.anthropic.com/settings/keys"
                target="_blank"
                rel="noreferrer"
                className="text-violet-600 underline"
              >
                console.anthropic.com
              </a>
              .
            </p>
          </div>
        )}

        <Button
          onClick={generate}
          disabled={loading}
          className="bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Analyzing…
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 mr-2" />
              Generate AI briefing
            </>
          )}
        </Button>

        {error && (
          <div className="flex items-start gap-2 text-sm text-red-600 bg-red-50 rounded-md p-3">
            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {insight && (
          <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap bg-slate-50 rounded-lg p-4 border border-slate-200">
            {insight}
          </div>
        )}

        {!insight && !error && !loading && (
          <p className="text-sm text-slate-500">
            Claude reads the live metrics above and writes an executive summary,
            the top risks, and recommended actions.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default AIInsights;
