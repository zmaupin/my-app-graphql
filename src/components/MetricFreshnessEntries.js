import React from "react";
import { MetricFreshnessEntry } from "./MetricFreshnessEntry";

export function MetricFreshnessEntries({ entries }) {
  return (
    <div className="container">
      {entries.map(result => (
        <MetricFreshnessEntry key={result.id} entry={result} />
      ))}
    </div>
  );
}
