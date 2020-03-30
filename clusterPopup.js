import React from 'react';
import './clusterPopUp.scss';

class Popup extends React.Component {
  render() {
  return (
    <div className='popup'>
      <div className='popup\_inner'>
        <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close</button>
      </div>
    </div>
  );
}
}

export default Popup;