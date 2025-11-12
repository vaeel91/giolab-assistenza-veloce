import { useState, useEffect } from 'react';
import { validateSEO, type SEOValidationResult, type SEOIssue } from '@/utils/seoValidator';
import { AlertCircle, CheckCircle, Info, XCircle, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const SEOMonitor = () => {
  const [results, setResults] = useState<SEOValidationResult | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const runValidation = () => {
    const validationResults = validateSEO();
    setResults(validationResults);
    console.log('🔍 SEO Validation Results:', validationResults);
  };

  useEffect(() => {
    // Run initial validation
    runValidation();
  }, []);

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        runValidation();
      }, 10000); // Refresh every 10 seconds

      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  if (!results) return null;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 border-green-300';
    if (score >= 70) return 'bg-yellow-100 border-yellow-300';
    return 'bg-red-100 border-red-300';
  };

  const groupedIssues = {
    error: results.issues.filter(i => i.type === 'error'),
    warning: results.issues.filter(i => i.type === 'warning'),
    info: results.issues.filter(i => i.type === 'info')
  };

  const IssueIcon = ({ type }: { type: SEOIssue['type'] }) => {
    switch (type) {
      case 'error':
        return <XCircle className="h-4 w-4 text-red-600" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      default:
        return <Info className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] max-w-md">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className={`shadow-lg ${getScoreBgColor(results.score)} hover:opacity-90`}
          size="lg"
        >
          <span className={`font-bold ${getScoreColor(results.score)}`}>
            SEO Score: {results.score}/100
          </span>
        </Button>
      ) : (
        <Card className="shadow-2xl border-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg">SEO Monitor</CardTitle>
                <Badge variant={results.passed ? 'default' : 'destructive'}>
                  {results.passed ? 'Passed' : 'Issues Found'}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setAutoRefresh(!autoRefresh)}
                  className={autoRefresh ? 'bg-primary/10' : ''}
                >
                  <RefreshCw className={`h-4 w-4 ${autoRefresh ? 'animate-spin' : ''}`} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </Button>
              </div>
            </div>
            <CardDescription>
              <div className="flex items-center justify-between mt-2">
                <span>Score:</span>
                <span className={`text-2xl font-bold ${getScoreColor(results.score)}`}>
                  {results.score}/100
                </span>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3 max-h-[600px] overflow-y-auto">
            {/* Checks Summary */}
            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(results.checks).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  {value ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                  <span className="capitalize text-xs">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                </div>
              ))}
            </div>

            {/* Issues by Type */}
            {groupedIssues.error.length > 0 && (
              <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between p-2 h-auto">
                    <span className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-600" />
                      <span className="font-semibold text-sm">
                        Errori ({groupedIssues.error.length})
                      </span>
                    </span>
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 mt-2">
                  {groupedIssues.error.map((issue, idx) => (
                    <div key={idx} className="p-2 bg-red-50 border border-red-200 rounded text-xs">
                      <div className="flex items-start gap-2">
                        <IssueIcon type={issue.type} />
                        <div className="flex-1">
                          <p className="font-medium">{issue.message}</p>
                          {issue.element && (
                            <code className="text-xs text-muted-foreground mt-1 block">
                              {issue.element}
                            </code>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            )}

            {groupedIssues.warning.length > 0 && (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between p-2 h-auto">
                    <span className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-600" />
                      <span className="font-semibold text-sm">
                        Avvisi ({groupedIssues.warning.length})
                      </span>
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 mt-2">
                  {groupedIssues.warning.map((issue, idx) => (
                    <div key={idx} className="p-2 bg-yellow-50 border border-yellow-200 rounded text-xs">
                      <div className="flex items-start gap-2">
                        <IssueIcon type={issue.type} />
                        <div className="flex-1">
                          <p className="font-medium">{issue.message}</p>
                          {issue.element && (
                            <code className="text-xs text-muted-foreground mt-1 block">
                              {issue.element}
                            </code>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            )}

            {groupedIssues.info.length > 0 && (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between p-2 h-auto">
                    <span className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-blue-600" />
                      <span className="font-semibold text-sm">
                        Info ({groupedIssues.info.length})
                      </span>
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 mt-2">
                  {groupedIssues.info.map((issue, idx) => (
                    <div key={idx} className="p-2 bg-blue-50 border border-blue-200 rounded text-xs">
                      <div className="flex items-start gap-2">
                        <IssueIcon type={issue.type} />
                        <div className="flex-1">
                          <p className="font-medium">{issue.message}</p>
                          {issue.element && (
                            <code className="text-xs text-muted-foreground mt-1 block">
                              {issue.element}
                            </code>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            )}

            {results.issues.length === 0 && (
              <div className="p-4 bg-green-50 border border-green-200 rounded text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-green-800">
                  Ottimo! Nessun problema SEO rilevato
                </p>
              </div>
            )}

            <Button
              onClick={runValidation}
              className="w-full"
              size="sm"
              variant="outline"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Ricontrolla
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SEOMonitor;
