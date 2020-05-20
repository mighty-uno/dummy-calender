import React from "react";
import { Home } from "./page";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <Home />
      </div>
    </ReduxProvider>
  );
}

export default App;
