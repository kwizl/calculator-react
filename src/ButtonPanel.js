import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.renderButton = this.renderButton.bind(this);
  }

  renderButton(i) {
    return <Button value={i}>{ i }</Button>;
  }
  
  render() {
    return (
      <div>
        <div className="group-1">
          {this.renderButton('A/C')}
          {this.renderButton('+/-')}
          {this.renderButton('%')}
          {this.renderButton('÷')}
        </div>
        <div className="group-2">
          {this.renderButton(7)}
          {this.renderButton(8)}
          {this.renderButton(9)}
          {this.renderButton('x')}
        </div>
        <div className="group-3">
          {this.renderButton(4)}
          {this.renderButton(5)}
          {this.renderButton(6)}
          {this.renderButton('-')}
        </div>
        <div className="group-4">
          {this.renderButton(1)}
          {this.renderButton(2)}
          {this.renderButton(3)}
          {this.renderButton('+')}
        </div>
        <div className="group-5">
          {this.renderButton(0)}
          {this.renderButton('.')}
          {this.renderButton('=')}
        </div>
      </div>
    )
  }
}

export default ButtonPanel;