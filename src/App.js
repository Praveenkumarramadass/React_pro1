import logo from './logo.svg';
import './App.css';

import List from './components/List';
import Table from './components/Table';
import Moose from './components/Moose';

function App() {
  return (
    <div className="App">
      <Moose></Moose>
      <List></List>
      <Table></Table>
    </div>
  );
}

export default App;
