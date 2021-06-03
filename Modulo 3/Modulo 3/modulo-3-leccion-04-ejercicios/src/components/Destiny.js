function Destiny() {
  const onChangeSelect = (ev) => {
    const valueSelect = ev.target.value;
    if (valueSelect) {
      alert(`tu destino es viajar a ${valueSelect}`);
    }
  };

  return (
    <select onChange={onChangeSelect}>
      <option value="Buenos Aires">Buenos Aires</option>
      <option value="Sydney">Sydney</option>
      <option value="Praga">Praga</option>
      <option value="Tokio">Tokio</option>
    </select>
  );
}

export default Destiny;
