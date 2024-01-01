import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginSignIn from "./pages/LoginSignIn";
import Email from "./pages/Email";
import FormLoginScreen from "./pages/FormLoginScreen";
import Confirm1 from "./pages/Confirm1";
import LockScreen from "./pages/LockScreen";
import RegisterSignUp from "./pages/RegisterSignUp";
import PagesText from "./pages/PagesText";
import DashboardDarkMode from "./pages/DashboardDarkMode";
import Maintenance from "./pages/Maintenance";
import UserProfile from "./pages/UserProfile";
import Error501 from "./pages/Error501";
import Error404 from "./pages/Error404";
import Kanban from "./pages/Kanban";
import Calender from "./pages/Calender";
import Blank1 from "./pages/Blank1";
import Blank from "./pages/Blank";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/email":
        title = "";
        metaDescription = "";
        break;
      case "/formloginscreen":
        title = "";
        metaDescription = "";
        break;
      case "/confirm":
        title = "";
        metaDescription = "";
        break;
      case "/lock-screen":
        title = "";
        metaDescription = "";
        break;
      case "/register-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/pages":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-dark-mode":
        title = "";
        metaDescription = "";
        break;
      case "/maintenance":
        title = "";
        metaDescription = "";
        break;
      case "/user-profile":
        title = "";
        metaDescription = "";
        break;
      case "/error-501":
        title = "";
        metaDescription = "";
        break;
      case "/error-404":
        title = "";
        metaDescription = "";
        break;
      case "/kanban":
        title = "";
        metaDescription = "";
        break;
      case "/calender":
        title = "";
        metaDescription = "";
        break;
      case "/blank":
        title = "";
        metaDescription = "";
        break;
      case "/blank1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginSignIn />} />
      <Route path="/email" element={<Email />} />
      <Route path="/formloginscreen" element={<FormLoginScreen />} />
      <Route path="/confirm" element={<Confirm1 />} />
      <Route path="/lock-screen" element={<LockScreen />} />
      <Route path="/register-sign-up" element={<RegisterSignUp />} />
      <Route path="/pages" element={<PagesText />} />
      <Route path="/dashboard-dark-mode" element={<DashboardDarkMode />} />
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/error-501" element={<Error501 />} />
      <Route path="/error-404" element={<Error404 />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/calender" element={<Calender />} />
      <Route path="/blank" element={<Blank1 />} />
      <Route path="/blank1" element={<Blank />} />
    </Routes>
  );
}
export default App;
