import './App.css';
import { RouterPage } from './routing/Router';
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <RouterPage />
      </div>
    </Provider>
  );
}

export default App;
