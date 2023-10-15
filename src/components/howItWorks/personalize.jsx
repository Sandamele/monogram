import React from "react";
import { AiOutlineDown } from "react-icons/ai";
export default function Personalize() {
  return (
    <div className="personalize __container">
      <h2>Personalize to the way you work</h2>
      <p>
        Monogram Creator app makes customizing a breeze. Customize each module
        to your needs, change module sensitivity, or create an entirely new
        profile for each stage of your workflow
      </p>
      <h3>Start Customizing</h3>
      <div className="arrow">
      <AiOutlineDown />
      </div>
    </div>
  );
}
