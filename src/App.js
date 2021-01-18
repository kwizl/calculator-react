import Display from './Display';
import './App.css';

function App() {
  const title = 'React Calculator'
  return (
    <div className='app-dom'>
      <div className='title'>
      <h1>{ title }</h1>
    </div>
      <Display />
    </div>
  )
}

export default App;
