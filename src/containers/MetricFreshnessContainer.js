import React, { useState, useEffect } from "react";
import lunr from "lunr";
import { useQuery } from "@apollo/react-hooks";

import { GET_METRIC_FRESHNESS_ENTRIES } from "../graphql/get-metric-freshness-entry";
import { MetricFreshnessEntry } from "../components/MetricFreshnessEntry";

// const store = [
//   {
//     id: "0",
//     name: "blockstore_allocation_sum",
//     timestamp: "2020-03-16 20:28:33"
//   },
//   {
//     id: "1",
//     name: "ceph_client_io_read_bytes",
//     timestamp: "2020-03-16 20:28:33"
//   },
//   {
//     id: "2",
//     name: "ceph_client_io_read_ops",
//     timestamp: "2020-03-16 20:28:35"
//   }
// ];

// const index = lunr(function() {
//   this.ref("id");
//   this.field("name");
//   this.field("timestamp");

//   store.forEach(function(doc) {
//     this.add(doc);
//   }, this);
// });

export function MetricFreshnessContainer() {
  const { data: { metricFreshnessList = [] } = {} } = useQuery(
    GET_METRIC_FRESHNESS_ENTRIES,
    {}
  );

  const index = lunr(function() {
    this.ref("id");
    this.field("name");
    this.field("timestamp");

    metricFreshnessList.forEach(function(doc) {
      this.add(doc);
    }, this);
  });

  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  useEffect(() => {
    const searchResults = index.search(query);
    const processedResults = searchResults.map(
      ({ ref }) => metricFreshnessList[ref]
    );

    setResults(processedResults);
  }, [query]);

  const handleQueryChange = event => {
    event.persist();
    setQuery(event.target.value);
  };

  console.log(`results: ${results}`);
  const entries = query === "" ? metricFreshnessList : results;

  return (
    <div className="container">
      <div className="container">
        <input onChange={handleQueryChange} placeholder="Searching..." />
      </div>
      {entries.map(entry => (
        <MetricFreshnessEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
