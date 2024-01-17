import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>My Profile</h1>
      <Header />
      <Body />
      <hr/>
      <h3>
        
      <Footer name='Developer' emoji='🥳'/>
      <Footer name='Coach' emoji='🧑🏾‍🏫'/>
      <Footer name='Businessman' emoji='👨🏾‍💼'/>
      <Footer name='React enthusiast' emoji='👨🏾‍💻'/>
      </h3>
    </div>
  );
}

function Footer(props) {
  return (
    <div>
      <scan>{props.name}{props.emoji}</scan>
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
      <p>I am a skilled React developer with a passion for crafting interactive and responsive web applications. With a strong foundation in JavaScript and front-end development, I specialize in creating dynamic user interfaces that deliver seamless user experiences. My expertise includes working with state management libraries like Redux and designing components that adhere to best practices in web development. I am constantly staying up-to-date with the latest trends and technologies in the React ecosystem to ensure that I can build modern, efficient, and maintainable applications for clients and users alike.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
