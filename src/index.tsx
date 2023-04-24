import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/reducer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactListPage from "./pages/contacts";
import { QueryClient, QueryClientProvider } from "react-query";
import Charts from "./pages/charts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<ContactListPage />} />
            <Route path="/charts" element={<Charts />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
