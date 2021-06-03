import {useState} from 'react';

function OnionHater() {
  const [isHating, setHating] = useState(false);
  const onChangeListener = (ev) => {
    const valueText = ev.target.value;
    if (valueText.includes('cebolla') === true) {
      setHating(true);
    } else {
      setHating(false);
    }
  };

  const classNameColor = isHating === true ? 'colorRed' : 'colorWhite';

  return (
    <textarea className={classNameColor} onChange={onChangeListener}></textarea>
  );
}

export default OnionHater;
