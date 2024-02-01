import "./App.css";
import React,{useState} from "react";
import Login from "./components/Login/Login";
import RegistrationPage from "./components/Registration/RegistrationPage";
import { Route, Routes } from "react-router-dom";
import Campaigns from "./components/Campaigns/Campaigns";
import Dasboard from "./components/Dasboard/Dasboard";
import ForgottPassword from "./components/ForgottPassword/ResetPassword";
import VerifyOTP from "./components/ForgottPassword/VerifyOTP";
import ResetNewPassword from "./components/ForgottPassword/ResetNewPassword";
import SmsHistory from "./components/SMSHistory/SmsHistory";
import ErrorPage from "./components/Error404Page/ErrorPage";
import ContactList from "./components/ContactList/ContactList";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes"

function App() {
  const [user, setUser] = useState();
  return (
    <>
      <div className="fonts">
      <Routes>
        <Route path="/" element={<Login setUser={() => setUser(true)} />} />
        <Route
          path="/signup"
          element={<RegistrationPage setUser={() => setUser(true)} />}
        />
        <Route path="/forgotpassword" element={<ForgottPassword />} />
        <Route path="/verifyotp" element={<VerifyOTP />} />
        <Route path="/newpassword" element={<ResetNewPassword />} />

        <Route path="/" element={<ProtectedRoutes isLogged={user} />}>
          <Route path="/dasboard" element={<Dasboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/smshistory" element={<SmsHistory />} />
          <Route path="/contact" element={<ContactList />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
