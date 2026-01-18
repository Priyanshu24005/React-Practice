import React from "react";
import { Bookmark } from "lucide-react";

const Cards = (props) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src={props.img} alt="" />
          <div className="save">
            <button>
              Save <Bookmark />
            </button>
          </div>
        </div>
        <div className="center">
          <div>
            <div className="head">
              <h3>{props.head}</h3>
              <p>{props.days}</p>
            </div>
          </div>
          <div>
            <h3>{props.title}</h3>
          </div>
          <div className="info">
            <h5>{props.info1}</h5>
            <h5>{props.info2}</h5>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h4>{props.price}</h4>
            <div>
              <p>{props.location}</p>
            </div>
          </div>
          <div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
