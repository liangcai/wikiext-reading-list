import React, { useState } from "react";
import { Grid, Menu, Segment, MenuItemProps } from "semantic-ui-react";
import TabularSegment from './TabularSegment'

interface menuType {
  name: string;
  id: number;
  default: boolean;
  description: string;
  created: string;
  updated: string;
}

interface MyProps {
  lists: Array<menuType>;
}

const MenuTabularOnLeft: React.FC<MyProps> = (props) => {
  const [activeItem, setActiveItem] = useState<string>();

  const handleItemClick = (e: React.MouseEvent, data: MenuItemProps) => {
    const { name } = data;
    setActiveItem(name);
  };

  const menuList = props.lists.map((item) => {
    return (
      <Menu.Item
        name={item.id.toString()}
        content={item.name}
        active={activeItem === item.name}
        onClick={handleItemClick}
      />
    );
  });

  return (
    <Grid>
      <Grid.Column width={4}>
        <Menu fluid vertical tabular>
          {menuList}
        </Menu>
      </Grid.Column>

      <Grid.Column stretched width={12}>
        {/* <Segment>这是一个可伸缩的列，这个区块总是匹配标签高度</Segment> */}
        <TabularSegment entires={ data.entries } />
      </Grid.Column>
    </Grid>
  );
};

export default MenuTabularOnLeft;

const data = {"entries":[{"id":20401115,"listId":2298195,"project":"https://zh.wikipedia.org","title":"自然崇拜","created":"2020-05-07T17:00:54Z","updated":"2020-05-07T17:00:54Z"},{"id":20401114,"listId":2298195,"project":"https://zh.wikipedia.org","title":"祖先崇拜","created":"2020-05-07T17:00:54Z","updated":"2020-05-07T17:00:54Z"},{"id":20379583,"listId":2298195,"project":"https://zh.wikipedia.org","title":"镜子测试","created":"2020-05-06T23:36:49Z","updated":"2020-05-06T23:36:49Z"},{"id":20279772,"listId":2298195,"project":"https://zh.wikipedia.org","title":"列表索引","created":"2020-05-03T19:54:58Z","updated":"2020-05-03T19:54:58Z"},{"id":20279751,"listId":2298195,"project":"https://zh.wikipedia.org","title":"中国历史年表","created":"2020-05-03T19:54:25Z","updated":"2020-05-03T19:54:25Z"},{"id":20279687,"listId":2298195,"project":"https://zh.wikipedia.org","title":"地质年代","created":"2020-05-03T19:49:53Z","updated":"2020-05-03T19:49:53Z"},{"id":20279682,"listId":2298195,"project":"https://zh.wikipedia.org","title":"太阳系天体列表","created":"2020-05-03T19:49:36Z","updated":"2020-05-03T19:49:36Z"},{"id":20279618,"listId":2298195,"project":"https://zh.wikipedia.org","title":"謬誤列表","created":"2020-05-03T19:45:25Z","updated":"2020-05-03T19:45:25Z"}]}

