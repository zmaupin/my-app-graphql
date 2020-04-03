import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { MetricFreshnessContainer } from "./containers/MetricFreshnessContainer";

export function App() {
  const client = new ApolloClient({
    uri: "http://zmworkstation.lnx.systems:8080/graphql"
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <MetricFreshnessContainer />
      </main>
    </ApolloProvider>
  );
}
