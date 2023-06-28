import { Link, Route, Routes, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ContactUser from "./components/ContactUser";
import ContactProduct from "./components/ContactProduct";
import ContactIndex from "./components/ContactIndex";
import Bt3 from "./components/BT/MD02-S08-BT-Bai03/Bt3";
import Bt3About from "./components/BT/MD02-S08-BT-Bai03/Bt3About";
import Bt3User from "./components/BT/MD02-S08-BT-Bai03/Bt3User";
import Bt3Contact from "./components/BT/MD02-S08-BT-Bai03/Bt3Contact";
import ErrorPage from "./components/ErrorPage";
import DemoNavigate from "./components/DemoNavigate";
import Course from "./components/DynamicRouter.jsx/Course";
import CourseDetail from "./components/DynamicRouter.jsx/CourseDetail";
import CourseDetailByTypeId from "./components/DynamicRouter.jsx/CourseDetailByTypeId";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import Account from "./components/PrivateRouter/Account";
import Person from "./components/PrivateRouter/Person";
// import "./App.css";

function App() {
  const activeBgColor = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    backgroundColor: isActive ? "black" : "red",
  });
  // const activeBgColor = ({ isActive }) => ({
  //   color: isActive ? "white" : "black",
  //   backgroundColor: isActive ? "red" : "white",
  // });
  return (
    <div>
      {/* Sử dụng link */}
      {/* <ul>
        <li>
          <Link to={"/"}>HomePage</Link>
        </li>
        <li>
          <Link to={"/about"}>AboutPage</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
          <ul>
            <li>
              <Link to="/contact/contact-user">Contact User</Link>
            </li>
            <li>
              <Link to={"/contact/contact-product"}>Contact Product</Link>
            </li>
          </ul>
        </li>
      </ul> */}

      {/* Sử dụng navlink */}
      <ul>
        <li>
          <NavLink to={"/"} style={activeBgColor}>
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} style={activeBgColor}>
            AboutPage
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} style={activeBgColor}>
            Contact
          </NavLink>
          <ul>
            <li>
              <NavLink to="/contact/contact-user" style={activeBgColor}>
                Contact User
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact/contact-product"} style={activeBgColor}>
                Contact Product
              </NavLink>
            </li>
            <li>
              <NavLink to={"/course"}>Course</NavLink>
            </li>
          </ul>
        </li>
      </ul>
      <DemoNavigate />
      {/* <Course /> */}

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}>
          {" "}
          {/* Index Router Contact*/}
          <Route index element={<ContactIndex />} />
          {/* Nest Router */}
          <Route path="contact-user" element={<ContactUser />}></Route>
          <Route path="contact-product" element={<ContactProduct />}></Route>
        </Route>

        <Route path="/course" element={<Course />}></Route>
        <Route path="/course/:id" element={<CourseDetail />}></Route>
        <Route
          path="/course/:id/:type"
          element={<CourseDetailByTypeId />}
        ></Route>

        <Route element={<PrivateRouter />}>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/person" element={<Person />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      {/* <ul className="nav-bar">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"} style={activeBgColor}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/user"} style={activeBgColor}>
            User
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} style={activeBgColor}>
            Contact
          </NavLink>
        </li>
      </ul> */}

      {/* <Routes>
        <Route path="/" element={<Bt3 />}></Route>
        <Route path="/about" element={<Bt3About />}></Route>
        <Route path="/user" element={<Bt3User />}></Route>
        <Route path="/contact" element={<Bt3Contact />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
