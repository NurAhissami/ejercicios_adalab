function Card(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.text}</p>
      <p>{props.lenguage}</p>
      <p>{props.gender}</p>
      <p>{props.age}</p>
    </>
  );
}
export default Card;
