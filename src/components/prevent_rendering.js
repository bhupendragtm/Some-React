import * as React from "react";
import * as ReactDOM from "react-dom";
import "../index.css";

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="message">Warning!(That Button Hides This Warning!)</div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((prevState) => ({
      showWarning: !prevState.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);

export default Page;
