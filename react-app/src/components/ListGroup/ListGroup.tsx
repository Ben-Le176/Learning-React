import { useState } from "react";
import './ListGroup.css';
import styled from 'styled-components';

const List = styled.ul`
list-style: none;
padding: 0;
`;

interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListGroupProps>`
  padding: 5px 0;
  background: ${ props => props.active ? 'blue' : 'none'}
 `

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setselectedIndex] = useState(-1);

  // handel event
  return (
    <>
      <h1>{heading}</h1>
      <List className='list-group'>
        {items.map((item, index) => (
          <ListItem
            active= {index === selectedIndex}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
