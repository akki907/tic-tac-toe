import "./App.css";
import Main from "./components/Main";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <div className="app">
        <header>
          <h1 className="text-center">Tic Tac Toe</h1>
        </header>
        <Main />
      </div>
    </AppProvider>
  );
}

export default App;
