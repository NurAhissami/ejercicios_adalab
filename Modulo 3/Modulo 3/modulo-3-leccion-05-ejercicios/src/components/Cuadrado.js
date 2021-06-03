import {useState} from 'react';

function Cuadrado() {
  const [pepino, setColor] = useState('');
  const handleClick = () => {
    if (pepino === 'azul') {
      setColor('colorRed');
    } else {
      setColor('azul');
    }
  };
  const classNameColor = pepino === 'azul' ? 'colorRed' : 'azul';
  return <div className={classNameColor} onClick={handleClick}></div>;
}

export default Cuadrado;
