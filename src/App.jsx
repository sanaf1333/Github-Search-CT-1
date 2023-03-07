import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@pages/home-page.jsx";
import store from "@redux-store/store/store.js";
import AppLayout from "@styles/app-layout.js";
const App = () => {
  return (
    <Provider store={store}>
      <AppLayout>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </AppLayout>
    </Provider>
  );
};

export default App;
