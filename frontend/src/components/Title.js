import React from 'react';

class Title extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h2>{ title }</h2>
      </div>
    );
  }
}

export default Title;
