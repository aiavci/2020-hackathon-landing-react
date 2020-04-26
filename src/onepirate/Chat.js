import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import { Button, TextField } from "@material-ui/core";
import AppAppBar from "./modules/views/AppAppBar";

function MessageBox({ author, body }) {
  const alignment = author === "Assistant" ? "flex-start" : "flex-end";

  return (
    <div
      style={{
        alignSelf: alignment,
        padding: "0.2em",
        maxWidth: "50%",
        minWidth: "15%",
        border: "solid",
      }}
    >
      <div>{body}</div>
      <div style={{ textAlign: "end" }}>{author}</div>
    </div>
  );
}

class Chat extends React.Component {
  messagesEndRef;
  state = {
    messages: [
      {
        body: "Hi! How can we help?",
        author: "Assistant",
      },
    ],
    newMessage: "",
  };
  render() {
    let messagesView = this.state.messages.map((m, i) => {
      return <MessageBox key={"m-" + i} author={m.author} body={m.body} />;
    });
    return (
      <React.Fragment>
        <AppAppBar />
        <div
          style={{
            height: "80vh",
            maxWidth: "60vw",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <div
            style={{
              overflow: "auto",
              maxHeight: "50vh",
              maxWidth: "60vw",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "40vh",
              }}
            >
              <h3 style={{ paddingTop: "0", marginTop: "0" }}>Message Panel</h3>
              {messagesView}
              <div
                style={{ float: "left", clear: "both" }}
                ref={(el) => {
                  this.messagesEndRef = el || undefined;
                }}
              ></div>
            </div>
          </div>
          <form
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onSubmit={(e) => {
              e.preventDefault();

              let numMessages = this.state.messages.length;

              if (this.state.newMessage.trim().length === 0) {
                return;
              }

              this.setState({
                messages: [
                  ...this.state.messages,
                  {
                    body: this.state.newMessage,
                    author: "Me",
                  },
                ],
                newMessage: "",
              });

              if (numMessages === 1) {
                setTimeout(() => {
                  this.setState({
                    messages: [
                      ...this.state.messages,
                      {
                        body:
                          "Sure, I can help you with that. Do you need a place to stay?",
                        author: "Assistant",
                      },
                    ],
                    newMessage: "",
                  });
                }, 1000);
              }

              if (numMessages === 3) {
                setTimeout(() => {
                  this.setState({
                    messages: [
                      ...this.state.messages,
                      {
                        body:
                          "For sure, please hold while I get some information for you.",
                        author: "Assistant",
                      },
                    ],
                    newMessage: "",
                  });
                }, 1000);
              }

              if (numMessages === 5) {
                setTimeout(() => {
                  this.setState({
                    messages: [
                      ...this.state.messages,
                      {
                        body:
                          "This was a demo. We are in beta. Please sign up to our beta list from the 'sign up beta' button above!",
                        author: "Assistant",
                      },
                    ],
                    newMessage: "",
                  });
                }, 1000);
              }
            }}
          >
            <TextField
              label="Send message"
              value={this.state.newMessage}
              style={{ width: "100%" }}
              placeholder="Send message"
              onChange={(e) => {
                this.setState({
                  newMessage: e.target.value,
                });
              }}
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </React.Fragment>
    );
  }

  scrollToBottom = () => {
    this.messagesEndRef.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  };
}

export default withRoot(Chat);
