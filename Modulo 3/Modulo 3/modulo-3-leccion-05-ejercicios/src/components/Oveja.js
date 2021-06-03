import {useState} from 'react';

function Oveja() {
  //counter seria el nombre de la variable
  //setCounter seria el estado final
  //UseState seria lo que se encarga de cambiar REACT con un valor inicial.

  const [counter, setCounter] = useState(0);
  const [counterOV, setCounterOV] = useState('');
  const Oj =
    'http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon Sheep.svg.hi.png';

  const handleClick0 = () => {
    setCounter(counter + 1);

    const newImg = document.createElement('img');
    newImg.setAttribute(
      'src',
      'http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon Sheep.svg.hi.png'
    );
    const container = document.querySelector('.sheepContainer');
    container.appendChild(newImg);
    newImg.setAttribute('class', 'ovejita');
  };
  return (
    <>
      <div className="sheepContainer">
        <p>{counter}</p>
      </div>

      <button onClick={handleClick0}>OVEJA</button>
    </>
  );
}

export default Oveja;
