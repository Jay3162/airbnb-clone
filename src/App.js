import LandingPage from "./components/landing-page/landing-page";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
