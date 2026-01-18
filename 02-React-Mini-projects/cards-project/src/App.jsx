import React from "react";
import Cards from "./Components/Cards";
import "./App.css";

const App = () => {
  return (
    <div className="parent">
      <Cards
        img="https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329111.jpg"
        head="Amazon"
        days="5 days ago"
        title="Senior UI/UX Designer"
        info1="Part-time"
        info2="Senior-level"
        price="$120/hr"
        location="Mumbai,India"
      />

      <Cards
        img="https://yt3.googleusercontent.com/wjb1KjcaSgzXnqLUMTafDqgppr_LS7-A8sGf9DP1JJThg_Npp4EsiByYk9IPCkofvvD_3hy6dg=s900-c-k-c0x00ffffff-no-rj"
        head="Google"
        days="30 days ago"
        title="Graphic Designer"
        info1="Part-time"
        info2="Flexible-Schedule"
        price="$150-220k"
        location="Kochi,India"
      />

      <Cards
        img="https://static.vecteezy.com/system/resources/previews/012/660/867/original/dribbble-logo-on-transparent-isolated-background-free-vector.jpg"
        head="Dribble"
        days="18 days ago"
        title="Senior Motion Designer"
        info1="Contract"
        info2="Remote"
        price="$85/hr"
        location="Chennai,India"
      />

      <Cards
        img="https://tse1.mm.bing.net/th/id/OIP.yNY6186gY0gQoltLDdtdAwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        head="Figma"
        days="5 days ago"
        title="UX Designer"
        info1="Full-Time"
        info2="In-Office"
        price="$200-250k/hr"
        location="Bangelore,India"
      />

      <Cards
        img="https://tse1.mm.bing.net/th/id/OIP.1Nd5mrBA2_ha719epMVKqwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
        head="Airbnb"
        days="5 days ago"
        title="Junior UI/UX Designer"
        info1="Contract"
        info2="Remote"
        price="$100/hr"
        location="Delhi,India"
      />

      <Cards
        img="https://tse3.mm.bing.net/th/id/OIP.gEwHOq6T_vK4fQgiM2LeZwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
        head="Apple"
        days="5 days ago"
        title="Graphic Designer"
        info1="Full-Time"
        info2="Flexible Schedule"
        price="$85-120/hr"
        location="Kerela,India"
      />
    </div>
  );
};

export default App;
