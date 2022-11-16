import * as React from "react";
import * as ReactDOM from "react-dom";

const Mailbox = (props) => {
  const messages = props.messages;
  return (
    <div>
      <h1>Hello!</h1>
      {messages.length > 0 && (
        <h2>You have {messages.length} unread messages.</h2>
      )}
    </div>
  );
};

const messages = ["React", "Re: React", "Re:Re: React"];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Mailbox messages={messages} />);

export default Mailbox;
