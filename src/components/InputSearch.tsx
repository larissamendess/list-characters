import { Input } from 'antd';

interface InputSearchProps {
    dataSearch: string,
    setDataSearch: React.Dispatch<React.SetStateAction<string>>;
}

const InputSearch: React.FC<InputSearchProps> = ({ dataSearch, setDataSearch }) => {
    return (
        <Input
            className='characters__input'
            style={{ marginBottom: 20 }}
            name='Search'
            placeholder="Busque um personagem pelo nome"
            value={dataSearch}
            onChange={(e) => setDataSearch(e.target.value)}
        />

    )
}

export default InputSearch;