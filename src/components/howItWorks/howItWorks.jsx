import React from "react";
import GettingStarted from "./gettingStarted";
import Personalize from "./personalize";
import "./style.scss";
import UnlockPotential from "./unlockPotential";
export default function HowItWorks() {
  return (
    <div>
        <GettingStarted />
        <Personalize />
        <UnlockPotential />
    </div>
  );
}
