import Labs from "./Labs";
import Kanbas from "./Kanbas";
import LandingPage from './Landing';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Kanbas/store";
export default function App() {
  return (
    <HashRouter>
      <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </Provider>
      </div>
    </HashRouter>
  );
}