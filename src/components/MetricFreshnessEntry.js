import React from "react";

export function MetricFreshnessEntry({ metricFreshnessEntry }) {
  return (
    <div className="metric_freshness_entry">
      <div className="metric_freshness_entry__name">
        <p>{metricFreshnessEntry.name}</p>
      </div>
      <div className="metric_freshness_entry__timestamp">
        <p>{metricFreshnessEntry.timestamp}</p>
      </div>
    </div>
  );
}
