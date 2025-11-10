import React from 'react';
import { List } from 'antd';
import type { typesCharacters } from '../types/typesCharacters';

interface ListCharactersProps {
  item: typesCharacters;
  index: number;
}

const ListCharacters: React.FC<ListCharactersProps> = ({index, item}) => {

  return (
      <List.Item className='characters__item'>
        <List.Item.Meta
          key={index}
          title={item.name}
          description={item.hair_color}
        />
      </List.Item>
  );
};

export default ListCharacters;