import React from "react";

export function MetricFreshnessEntry(entry) {
  return (
    <div key={entry.entry.id}>
      <p>{entry.entry.id}</p>
      <p>{entry.entry.name}</p>
      <p>{entry.entry.timestamp}</p>
    </div>
  );
}
