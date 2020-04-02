import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { MetricFreshnessEntry } from "../components/MetricFreshnessEntry";
import { GET_METRIC_FRESHNESS_ENTRIES } from "../graphql/get-metric-freshness-entry";
import { useLunr } from "../common/lunrjs/useLunr";
import lunr from "lunr";

export function MetricFreshnessEntriesContainer() {
  const { data: { metricFreshnessList = [] } = {} } = useQuery(
    GET_METRIC_FRESHNESS_ENTRIES,
    {}
  );

  const store = metricFreshnessList;
  const index = lunr(function() {
    this.ref("id");
    this.field("name");
    this.field("timestamp");

    store.forEach(function(doc) {
      this.add(doc);
    }, this);
  });

  const [query, setQuery] = useState(null);
  const results = useLunr(query, index, store);

  const handleQueryChange = event => {
    event.persist();
    setQuery(event.target.value);
  };

  return (
    <div className="container">
      <input onChange={handleQueryChange} value="Searching..." />;
      {results.map(result => (
        <MetricFreshnessEntry metricFreshnessEntry={result} />
      ))}
    </div>
  );
}
