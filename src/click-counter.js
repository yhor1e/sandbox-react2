const React = require('react');
const ReactDOM = require('react-dom');

let Counter = React.createClass({

  getInitialState: function () {
    return { count: 0}
  },

  onClickButton: function () {
    this.setState({
      count: this.state.count + 1
    });
  },

  render: function () {
    return (
      <button onClick={this.onClickButton}>
        Click me! Number of clicks: {this.state.count}
      </button>
    );
  }
});

ReactDOM.render(<Counter />, document.getElementById('example'));
