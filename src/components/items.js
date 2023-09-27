import React from "react";

const Items = (props) => {
  return (
    <div>
      <div className="col-xl-3 mine">
        <div className="card" style={{ width: "14rem" }}>
          <img src={props.imgSrc} className="card-img-top thumb" alt="" />
          <div className="card-body">
            <h5 className="card-title text-center">{props.title}</h5>
            <p className="card-text text-center">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
