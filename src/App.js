import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { MetricFreshnessEntriesContainer } from "./containers/MetricFreshnessEntriesContainer";

export function App() {
  const client = new ApolloClient({
    uri: "http://zmworkstation.lnx.systems:8080/graphql"
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <MetricFreshnessEntriesContainer />
      </main>
    </ApolloProvider>
  );
}
