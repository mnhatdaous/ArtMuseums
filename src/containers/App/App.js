import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../AppRouter";

const supportsHistory = "pushState" in window.history;

const App = () => (
  <BrowserRouter forceRefresh={!supportsHistory} keyLength={12}>
    <AppRouter />
  </BrowserRouter>
);

export default App;
