import React from "react";
import PropTypes from "prop-types";
import lunr from "lunr";
import memoize from "memoize-one";

export class Lunr extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    index: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    store: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    initialQuery: PropTypes.string
  };

  static defaultProps = {
    initialQuery: ""
  };

  static getDerivedStateFromProps(props, state) {
    return {
      query: props.query
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      query: props.initialQuery
    };

    this.index =
      typeof props.index === "string"
        ? lunr.Index.load(JSON.parse(props.index))
        : props.index;

    this.store =
      typeof props.store === "string" ? JSON.parse(props.store) : props.store;
  }

  setQuery = query => this.setState({ query });

  search = memoize(query => {
    if (!query) return [];

    const results = this.index.search(query);

    return results.map(({ ref }) => this.store[ref]);
  });

  render() {
    return this.props.children({
      query: this.state.query,
      setQuery: this.setQuery,
      results: this.search(this.state.query)
    });
  }
}
