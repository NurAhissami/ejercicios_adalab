function Form({onClick}) {
  return (
    <form className="Form" onClick={onClick}>
      <fieldset className="Form">
        <label htmlFor="Germany">
          <input type="checkbox" name="Germany" value="Germany" />
          Germany
        </label>
        <label htmlFor="Norway">
          <input type="checkbox" name="Norway" value="Norway" />
          Norway
        </label>
        <label htmlFor="United States">
          <input type="checkbox" name="United States" value="United States" />
          United States
        </label>
        <label htmlFor="Denmark">
          <input type="checkbox" name="Denmark" value="Denmark" />
          Denmark
        </label>
      </fieldset>

      {/* <fieldset>
        <label htmlFor="male">
          <input type="checkbox" name="male" value="male" />
          male
        </label>
        <label htmlFor="female">
          <input type="checkbox" name="female" value="male" />
          female
        </label>
      </fieldset> */}
    </form>
  );
}
export default Form;
