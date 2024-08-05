import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

interface Props {
    onClick: () => void;
}
const Like = ({onClick }: Props) => {
    const [status, setStatus] = useState(false);

    const toggle = () => {
        setStatus(!status);
        onClick
    }
    if (status) return (
            <AiFillHeart color='#ff6ba1' size='100' onClick={toggle} />
        )
    return (
            <AiOutlineHeart size='100' onClick={toggle} />
        )
    
}

export default Like