import React from "react";
import heroes from "../../data/heroes";

const HeroHome = ({ id, name, title, txt, img }) => {
  return (
    <div
      className={`flex flex-col m-0 bg-[url('../assets/images/heroes5.jpg')] h-[70vh] bg-cover`}
    >
      <h1 className="m-5 mt-20 mb-10 text-4xl text-center font-primary text-slate-50">
        {heroes[0].title}
      </h1>
      <p className="m-5 text-xl text-center font-regular text-slate-50">
        {heroes[0].txt}
      </p>
    </div>
  );
};

export default HeroHome;
