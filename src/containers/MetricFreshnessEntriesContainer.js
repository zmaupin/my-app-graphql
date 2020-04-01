import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { MetricFreshnessEntry } from "../components/MetricFreshnessEntry";
import { GET_METRIC_FRESHNESS_ENTRIES } from "../graphql/get-metric-freshness-entry";

export function MetricFreshnessEntriesContainer() {
  const { data: { metricFreshnessEntries = [] } = {} } = useQuery(
    GET_METRIC_FRESHNESS_ENTRIES
  );

  console.log(metricFreshnessEntries);

  return (
    <div className="container">
      {metricFreshnessEntries &&
        metricFreshnessEntries.map(metricFreshness => (
          <MetricFreshnessEntry metricFreshness={metricFreshness} />
        ))}
    </div>
  );
}
