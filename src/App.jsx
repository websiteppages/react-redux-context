import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>My App</h1>
        <Dashboard />
      </div>
    </Provider>
  );
};

export default App;
