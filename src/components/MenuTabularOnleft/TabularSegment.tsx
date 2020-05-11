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

interface myPropsType {
  entires: Array<entire>;
}

const TabularSegment: React.FC<myPropsType> = (props) => {
  const entireList = props.entires.map((entrie) => {
    return (
      <div className="list">
        <a href={`${entrie.project}/wiki/${entrie.title}`} target="_blank">
          {entrie.title}
        </a>
      </div>
    );
  });

  return (
    <Segment>
      <div className="ui list">{entireList}</div>
    </Segment>
  );
};

export default TabularSegment;
