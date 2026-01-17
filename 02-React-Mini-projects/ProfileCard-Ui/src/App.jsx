import React from "react";
import ProfileCard from "./Components/ProfileCard";
import "./App.css";
import Head from "./Components/Head";

const App = () => {
  return (
    <div>
      <center>
        <Head />
      </center>

      <ProfileCard
        name="Priyanshu"
        role="Web Developer"
        skills={["html\n", "css\n", "javascript\n", "java\n"]}
      />

      <ProfileCard
        name="Aman"
        role="Web Designer"
        skills={["html\n", "css\n", "javascript\n", "java\n"]}
      />
      <ProfileCard
        name="Rahul"
        role="UI/UX"
        skills={["Adobe premier pro\n", "Canva\n"]}
      />
    </div>
  );
};

export default App;
