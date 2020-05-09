import React from "react";
import { Segment } from "semantic-ui-react";

interface entire {
  id: number;
  listId: number;
  project: string;
  title: string;
  created: string;
  updated: string;
}

interface MyProps {
  entires: Array<entire>;
}

const TabularSegment: React.FC<MyProps> = (props) => {
  const entireList = props.entires.map((entrie) => {
    return <p>{entrie.title}</p>;
  });

  return <Segment>{entireList}</Segment>;
};

export default TabularSegment;
