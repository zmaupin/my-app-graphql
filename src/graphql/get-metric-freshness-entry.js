import gql from "graphql-tag";

export const GET_METRIC_FRESHNESS_ENTRIES = gql`
  query {
    metricFreshnessList {
      name
      timestamp
    }
  }
`;
