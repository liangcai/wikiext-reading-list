import React, { Dispatch, SetStateAction } from "react";
import { Grid, Menu, MenuItemProps, Item } from "semantic-ui-react";
import { menuType } from "../../type";

interface MyProps {
  lists: Array<menuType>;
  setActiveItem: Dispatch<SetStateAction<string>>;
  activeItem: string;
}

const MenuTabularOnLeft: React.FC<MyProps> = (props) => {
  const { lists, activeItem, setActiveItem } = props;

  console.log(`lists: ${lists.toString()}, activeItem: ${activeItem}`);

  const handleItemClick = (e: React.MouseEvent, data: MenuItemProps) => {
    const { name } = data;
    console.log("click id: ", name);
    setActiveItem(name || "");
  };

  const menuList = lists.map((item) => {
    return (
      <Menu.Item
        key={item.id}
        name={item.id.toString()}
        content={item.name}
        active={activeItem === item.id.toString()}
        onClick={handleItemClick}
      />
    );
  });

  return (
    <Grid.Column width={4}>
      <Menu fluid vertical tabular>
        {menuList}
      </Menu>
    </Grid.Column>
  );
};

export default MenuTabularOnLeft;
