import React from "react";
import "./Card.css";


import Done from "../Assests/Done.svg";
import TodoIcon from "../Assests/To-do.svg";
import Bll from "../Assests/SVG - Urgent Priority colour.svg";
import Dot from "../Assests/3 dot menu.svg";
import img from "../me/me.jpg";










const Card = ({ id, title, tag, status, priority }) => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  const statusOrder = ['Backlog', 'Todo', 'In progress', 'Done'];
  const getStatusIndex = (status) => {
    return statusOrder.indexOf(status);
  };
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" }}
        >
          <img
            style={{ width: "95%", height: "95%", borderRadius: "50%" }}
            src={img}
            alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        {!isStatus &&
          (
            status === "Backlog" ? (
              <img src={Done} alt="d" style={{ width: "14px", height: "14px" }} />
            )
              : status === "Todo" ? (
                <img src={TodoIcon} alt="Todo Icon" style={{ width: "14px", height: "14px" }} />
              ) : status === "In progress" ? (
                <img src={Done} alt="d" style={{ width: "14px", height: "14px" }} />
              ) : status === "Done" ? (
                <img src={TodoIcon} alt="Todo Icon" style={{ width: "14px", height: "14px" }} />
              )
                : (
                  <img src={TodoIcon} alt="Todo Icon" style={{ width: "14px", height: "14px" }} />
                ))}
        <span style={{ margin: "0.2px" }}>{title}</span>
      </div>
      <div className="cardTags">
        {!isPriority ? (
          <div className="tags color-grey">
            {priority === 1 || priority === 2 || priority === 3 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="b"
                viewBox="0 0 16 16"
              >
                <rect x="1" y="10" width="3" height="2" />
                <rect
                  x="5"
                  y="7"
                  width="3"
                  height="5"
                  opacity={priority === 2 || priority === 3 ? 1 : 0.25}
                />
                <rect
                  x="9"
                  y="4"
                  width="3"
                  height="8"
                  opacity={priority === 3 ? 1 : 0.25}
                />
              </svg>
            ) : priority === 4 ? (
              <img src={Bll} alt="Todo Icon" style={{ width: "14px", height: "14px" }} />
            ) : (
              <img src={Dot} alt="Todo Icon" style={{ width: "14px", height: "14px" }} />
            )}
          </div>
        ) : null}
        {tag?.map((element, index) => {
          return (
            <div key={index} className="tags color-grey">
              {" "}
              <span>•</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
