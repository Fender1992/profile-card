import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>My Profile</h1>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <div className="profile-photo">
      <img src={require("./profile-photo.jpg")} alt="profile" />
    </div>
  );
}
function Body() {
  return (
    <div>
      <p>Profile description</p>
    </div>
  );
}
function Footer() {
  return (
    <div>
      <scan>developer🤑</scan>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
