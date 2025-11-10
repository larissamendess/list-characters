import React, { useEffect, useState } from 'react';

import { List, Typography } from 'antd';
import { getCharacters } from '../service/api';
import type { typesCharacters } from '../types/typesCharacters';
import ListCharacters from './ListCharacters';
import InputSearch from './InputSearch';

type PaginationAlign = 'start' | 'center' | 'end';

const Characters: React.FC = () => {
  const [align] = useState<PaginationAlign>('center');
  const [data, setData] = useState<typesCharacters[]>([]);
  const [page, setPage] = useState(1);
  const [sizePage, setSizePage] = useState(10);
  const [dataSearch, setDataSearch] = useState('');
  const [total, setTotal] = useState(0);

  const handlePageChange = (pagina: React.SetStateAction<number>, tamanhoPagina: React.SetStateAction<number>) => {
    setPage(pagina);
    setSizePage(tamanhoPagina);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCharacters(page, dataSearch);
        setData(data.results);
        setTotal(data.count);
      } catch (error) {
        console.error("Erro ao fazer requisição na API de personagens", error);
      }
    };

    fetchData();
  }, [dataSearch, page]);


  return (
    <div className='characters__main' style={{padding: '20px'}}>
      <Typography.Title className='characters__title' level={2} style={{ marginBottom: 20, display: 'flex', justifyContent: 'center' }} >
        Lista de Personagens Star Wars
      </Typography.Title>
      
      <InputSearch dataSearch={dataSearch} setDataSearch={setDataSearch}/>

      <List
        className='characters__list'
        pagination={{
          align,
          current: page,
          pageSize: sizePage,
          total: total,
          showSizeChanger: false,
          onChange: handlePageChange,
        }}
        dataSource={data}
        renderItem={(item, index) => (
          <ListCharacters item={item} index={index}/>
        )}
      />
    </div>
  );
};

export default Characters;