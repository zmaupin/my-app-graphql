import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { MetricFreshnessEntry } from "../components/MetricFreshnessEntry";
import { GET_METRIC_FRESHNESS_ENTRIES } from "../graphql/get-metric-freshness-entry";

export function MetricFreshnessEntriesContainer() {
  const { data: { metricFreshnessList = [] } = {} } = useQuery(
    GET_METRIC_FRESHNESS_ENTRIES,
    {}
  );

  return (
    <div className="container">
      {metricFreshnessList &&
        metricFreshnessList.map(metricFreshness =>
          console.log(metricFreshness)
        )}
    </div>
  );
}
