import './App.css';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <div className="App">
      <TodoList />
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
