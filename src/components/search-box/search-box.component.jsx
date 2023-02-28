import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box mt-6 px-4 py-2 leading-7 border-2 rounded-xl border-green-500/75 bg-zinc-900  text-white ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
