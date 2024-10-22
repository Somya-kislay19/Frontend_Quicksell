import { React } from "react";
import { useSelector } from "react-redux";
import { DiCodeigniter } from "react-icons/di";

import "./DashBoard.css";
import Card from "../Card/Card";
import TodoIcon from "../Assests/To-do.svg";
import Bl from "../Assests/SVG - Urgent Priority grey.svg";
import Bll from "../Assests/SVG - Urgent Priority colour.svg";

import IP from "../Assests/in-progress.svg";
import Done from "../Assests/Done.svg";
import C from "../Assests/Cancelled.svg";
import A from "../Assests/add.svg";
import Cancel from "../Assests/Cancelled.svg";
import Dot from "../Assests/3 dot menu.svg";
import NP from "../Assests/No-priority.svg";











const DashBoard = () => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  console.log("stat", isStatus, "prio", isPriority);
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );
  console.log("rere", user);

  return (
    selectedData && (
      <div
        className="dashContainer"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {selectedData.map((element, index) => {
          const cardWidthPercentage = 18.7;
          return (
            <div
              key={index}
              className="dashCardContainer"
              style={{ width: `${cardWidthPercentage}%` }}
            >
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {user ? (
                    <div
                      className="imageContainer relative"
                      style={{
                        width: "10px",
                        height: "15px",
                        display: "inline-block",
                      }}
                    >
                    </div>
                  ) : isStatus ? (
                    <div
                      className="cardTitle"
                      style={{
                        width: "15px",
                        height: "15px",
                        display: "inline-block",
                        fontWeight: 200,
                      }}
                    >
                      {element[index].title === "Backlog" ? (
                        <img src={Bl} alt="bl" style={{ width: "14px", height: "14px" }} />

                      ) : element[index].title === "Todo" ? (
                        <img src={TodoIcon} alt="Todo Icon" style={{ width: "14px", height: "14px" }} />
                      ) : element[index].title === "In progress" ? (
                        <img src={IP} alt="ip" style={{ width: "14px", height: "14px" }} />
                        
                      ) : element[index].title === "Done" ? (
                        <img src={Done} alt="d" style={{ width: "14px", height: "14px" }} />
                      ) : (
                        <img src={C} alt="c" style={{ width: "14px", height: "14px" }} />
                      )}
                    </div>
                  ) : isPriority ? (
                    <div
                      className="tags color-grey"
                      style={{
                        width: "35px",
                        height: "30px",
                        display: "inline-block",
                      }}
                    >
                      {element[index].title === "Low" ||
                      element[index].title === "Medium" ||
                      element[index].title === "High" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-signal"
                          viewBox="0 0 16 16"
                        >
                          <rect x="1" y="10" width="3" height="2" />
                          <rect
                            x="5"
                            y="7"
                            width="3"
                            height="5"
                            opacity={
                              element[index].title === "Medium" ||
                              element[index].title === "High"
                                ? 1
                                : 0.25
                            }
                          />
                          <rect
                            x="9"
                            y="4"
                            width="3"
                            height="8"
                            opacity={
                              element[index].title === "High" ? 1 : 0.25
                            }
                          />
                        </svg>
                      ) : element[index].title === "Urgent" ? (
                        <img src={Bll} alt="u" style={{ width: "14px", height: "14px" }} />
                       
                      ) : (
                        <div className="noPriority">
                        <img src={NP} alt="u" style={{ width: "14px", height: "14px" }} />
                         
                        </div>
                      )}
                    </div>
                  ) : (
                    <DiCodeigniter />
                  )}{" "}
                  <span>
                    {element[index]?.title} {element[index].value?.length}
                  </span>
                </div>
                <div className="rightView">
                <img src={A} alt="u" style={{ width: "14px", height: "14px" }} />
                {" "}
                  <span style={{ letterSpacing: "2px" }}>...</span>
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {element[index]?.value?.map((element, ind) => {
                  return (
                    <Card
                      id={element.id}
                      title={element.title}
                      tag={element.tag}
                      status={element.status}
                      priority={element.priority}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        {isStatus && (
          <>
            <div className="dashCardHeading flex-sb">
              <div
                className="leftView"
                style={{
                  fontSize: "15px",
                  marginRight: "90px",
                  wordSpacing: "4px",
                }}
              >
                <div
                  className="cardTitle"
                  style={{
                    width: "13px",
                    height: "13px",
                    display: "inline-block",
                    fontWeight: 200,
                  }}
                >
                        <img src={Done} alt="d" style={{ width: "14px", height: "14px" }} />
                        </div>{" "}
                <span
                  style={{ fontSize: "13px", fontWeight: "lighter" }}
                >
                  Done
                </span>{" "}
                <span style={{ fontSize: "13px", color: "#8F9997" }}>0</span>
              </div>
              <div className="rightView">
              <img src={A} alt="u" style={{ width: "14px", height: "14px" }} />
                {" "}
                <span style={{ letterSpacing: "2px" }}>...</span>
              </div>
            </div>
            <div className="dashCardHeading flex-sb">
              <div
                className="leftView"
                style={{
                  fontSize: "15px",
                  marginRight: "60px",
                  wordSpacing: "4px",
                }}
              >
                <div
                  className="cardTitle"
                  style={{
                    width: "9px",
                    height: "9px",
                    display: "inline-block",
                    fontWeight: 200,
                  }}
                >
              <img src={Cancel} alt="u" style={{ width: "14px", height: "14px" }} />
              </div>{" "}
                <span
                  style={{ fontSize: "13px", fontWeight: "lighter" }}
                >
                  Canceled
                </span>{" "}
                <span style={{ fontSize: "13px", color: "#8F9997" }}>0</span>
              </div>
              <div className="rightView">
              <img src={A} alt="u" style={{ width: "14px", height: "14px" }} />
              {" "}
              <img src={Dot} alt="Todo Icon" style={{ width: "14px", height: "14px" }} />
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
};
export default DashBoard;