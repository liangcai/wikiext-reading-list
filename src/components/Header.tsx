import React from "react";
import { Divider } from "semantic-ui-react";

export default function Header() {
  return (
    <header>
      <h2 className="ui center aligned icon header">
        <i className="circular inverted green wikipedia w icon"></i>Wiki Reading
        List
      </h2>
      <Divider />
    </header>
  );
}
