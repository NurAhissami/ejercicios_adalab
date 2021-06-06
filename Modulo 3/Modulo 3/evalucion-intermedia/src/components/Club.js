function Club({icon, name, children}) {
  return (
    <>
      <div>
        <i className={icon}></i>
      </div>
      <h2>{name}</h2>
      {children}
    </>
  );
}

export default Club;
