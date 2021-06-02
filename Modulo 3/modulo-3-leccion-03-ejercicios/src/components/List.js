import React from 'react';

class List extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.age}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

List.defaultProps = {
  description: 'No hay descripción',
  name: 'se te ha olviado poner tu nombre',
};

export default List;
