import Display from './Display';

function App(prop) {
  const title = 'React Calculator';
  return (
    <div className="app-dom">
      <div className="title">
        <h1>{ title }</h1>
      </div>
      <Display value={prop.value} />
    </div>
  );
}

export default App;
