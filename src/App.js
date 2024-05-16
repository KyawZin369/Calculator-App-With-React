import './App.css';
import Body from './components/Body';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  return (
    <div className='calculator'>
      <Input/>
      <Output/>
      <Body/>
    </div>
  );
}

export default App;
