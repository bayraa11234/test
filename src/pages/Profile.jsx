import React from "react";
import { DashboardChart } from "./DashboardChart";

export default function Profile() {
  const arr = [
    { text: "profile" },
    { text: "settings" },
    { text: "dashboard" },
    { text: "contact" },
    { text: "general" },
  ];
  return (
    <>
      <div className="row">
        <div className="col-2">
          <div className="bg-secondary min-vh-100 text-center">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt=""
              className="w-100"
            />
            {arr.map((item) => (
              <p className="my-4">{item.text}</p>
            ))}
          </div>
        </div>
        {/* <div className="col-1">
          <h1></h1>
        </div> */}
        <div className="col-10">
          <div>
            <DashboardChart />
          </div>
        </div>
      </div>
    </>
  );
}
