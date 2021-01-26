import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
  }

  render() {
    const title = 'React Calculator';
    return (
      <>
        <div className="title">
          <h1>{ title }</h1>
        </div>
        <Display value={this.prop.value} />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
