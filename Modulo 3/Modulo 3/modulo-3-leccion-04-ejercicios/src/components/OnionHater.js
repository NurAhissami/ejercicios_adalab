function OnionHater() {
  const onChangeListener = (ev) => {
    const valueText = ev.target.value;
    if (valueText.includes('cebolla')) {
      document.body.style = 'background: red';
    } else {
      document.body.style = 'background: white';
    }
  };
  return <textarea onChange={onChangeListener}></textarea>;
}

export default OnionHater;
