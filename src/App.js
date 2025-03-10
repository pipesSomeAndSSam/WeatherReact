import { useContext } from 'react';
import Header from './components/Header';
import Page from './page';
import ThemeContext from './context/theme.context'
import './styles/components/App.scss';
import "bootstrap-icons/font/bootstrap-icons.css"

function App() {
   const {light} = useContext(ThemeContext);

  return (
    <div className={`App-${light ? "dark" : "light"}`}> 
      <Header />
      <Page />
    </div>
  );
}

export default App;
