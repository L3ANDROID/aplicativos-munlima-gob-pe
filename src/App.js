import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Validate from "./pages/Validate";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/extranet/carne-y-certificado-salud/validacion/TVRNeE0zbHJRVzVxZEVjdk5YRjJhbGtyYWxwU2VVNDBWSGN2Wm1Oc2NIcE9jbmx2TmpVd1IxQXlZVWxWTDNBeVptTXJhSE0zVkZwcGNFaHVlSEJvYVRvNk1TQXo3UmxRMFBoMlNEQk1WUnVvK0E9JE" element={<Validate />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;