import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import "./App.css";
import { PATHS } from "./constants";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="leftAside">
          <ul>
            {PATHS.map((item, key) => (
              <Link key={`${key}${item.name}`} to={item.path}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="content__container">
          <Routes>
            {PATHS.map((item, key) => (
              <Route
                path={item.path}
                key={`${key}${item.path}`}
                element={
                  <HomeworkWrapper name={item.name} stylePath={item.stylePath}>
                    {item.component()}
                  </HomeworkWrapper>
                }
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const HomeworkWrapper = (props) => {
  return (
    <div className="homework__wrapper">
      <div className="homework__title">{props.name}</div>
      <link rel="stylesheet" type="text/css" href={props.stylePath} />
      {props.children}
    </div>
  );
};
export default App;
