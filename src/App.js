import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/templates/nav/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/templates/home/Home";

import Signup from "./components/templates/signup/Signup";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Error from "./components/templates/Error";
const url = "https://admin.naxa.com.np/api/projects";
function App() {
  // const [data, setData] = useState();
  // const fetchUrl = async () => {
  //   const response = await fetch(url);
  //   const result = await response.json();
  //   setData(result);
  // };
  // console.log("s", data);
  // useEffect(() => {
  //   fetchUrl();
  // }, []);
  const redux = useSelector(selectUser);
  return (
    <>
      <Router>
        <div>
          <Nav />
        </div>
        <Routes>
          {redux.username && (
            <>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/signup"
                element={<Navigate replace to="/" />}
              />
            </>
          )}
          {!redux.username && (
            <>
              <Route path="/signup" element={<Signup />} />
              <Route
                exact
                path="/"
                element={<Navigate replace to="/signup" />}
              />
            </>
          )}

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
