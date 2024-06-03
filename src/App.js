import logo from './logo.svg';
import './App.css';
import useCustomRoute from './routes/useCustomRoute';


function App() {
  const myRoutes = useCustomRoute()
  return myRoutes
}

export default App;
