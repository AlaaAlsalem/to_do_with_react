import TodoContainer from './functionBased/Components/TodoContainer';
import './functionBased/App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Route path="/">
      <div className="App">
        <TodoContainer />
      </div>
    </Route>
  );
}

export default App;
