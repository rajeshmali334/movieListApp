import React from "react";
import Card from "./components/Card";
import "./App.css";
import data from "./datalist";

function App() {
  return (
    <>
      <h1 className="heading">Top Movie List</h1>
      <div className="cards">
        {data.map((value, index) => {
          return (
            <Card
              key={value.key}
              src={value.src}
              ranking={value.ranking}
              title={value.title}
              year={value.year}
              tv={value.tv}
              distributor={value.distributor}
              amount={value.amount}
            />
          );
        })}
      </div>
    </>
  );
}
export default App;
