import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = buttonName => {
    this.setState(state => calculate(state, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    const title = 'React Calculator';
    return (
      <div>
        <div className="title">
          <h1>{ title }</h1>
        </div>
        <Display result={next} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
