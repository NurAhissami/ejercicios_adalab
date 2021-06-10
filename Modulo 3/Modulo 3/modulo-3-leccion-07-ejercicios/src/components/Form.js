function Form(props) {
  return (
    <form onChange={props.onChange} key={props.name}>
      <input type="text" name="name" id="name" />
      <input type="textarea" name="textarea" id="textarea" />
      <select name="lenguage" id="lenguage">
        <option value="selection">Selecciona el idioma</option>
        <option value="Inglés">Inglés</option>
        <option value="Español">Español</option>
        <option value="Portugués">Portugues</option>
      </select>
      <input type="radio" id="male" name="gender" value="male" />
      <label htmlFor="male">Masculino</label>
      <input type="radio" id="female" name="gender" value="female" />
      <label htmlFor="female">Femenino</label>
      <input type="radio" id="other" name="gender" value="other" />
      <label htmlFor="other">Other</label>
      <label>
        <input type="checkbox" id="cbox1" name="age" value="Mayores 16" />
        Mayores 16
      </label>
      <input type="checkbox" id="cbox2" name="age" value="Mayores 18" />{' '}
      <label htmlFor="cbox2">Mayores 18</label>
    </form>
  );
}
export default Form;
