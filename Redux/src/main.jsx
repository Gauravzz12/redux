import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { extendedApiSlice } from "./features/posts/postsSlice.js";
store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
createRoot(document.getElementById("root")).render(
  <StrictMode>
   <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
