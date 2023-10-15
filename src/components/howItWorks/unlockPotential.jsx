import React from "react";
import Button from "../button/button";
import UnlockPotentialCard from "./unlockPotentialCard";

export default function UnlockPotential() {
  const cardOne = {
    title: "NATIVE COMPATIBILITY",
    description:
      "Native integrations hook directly into software for the greatest level of control and the smoothest performance. Unlike hotkeys, Creative Console gives you the most engaging tactile experience that connects you to your work. Make adjustments incrementally, or quickly and smoothly increase values while focusing on the result in front of you. Native compatibility includes Adobe Creative Suite, Unreal Engine, and Capture One Pro.",
  };
  const cardTwo = {
    title: "UNIVERSAL COMPATIBILITY",
    description:
      "Use Monogram Creative Console with any software. Creative Console can control virtually any software so you can control your favourite app, even if it’s not officially supported, by customizing each module via universal input modes like: keyboard shortcuts, MIDI, mouse clicks, and joystick actions. Universal Compatibility works great with apps like Ableton Live, Logic, Chrome, Spotify, and more.",
  };
  const cardThree = {
    title: "QUESTIONS?",
    description:
      "If you have a suggestion for software integration or don’t see your favorite editing software listed, we’d love to hear from you! We’re always just a click away.",
  };
  return (
    <div className="unlockPotential __container">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <UnlockPotentialCard
              title={cardOne.title}
              description={cardOne.description}
            />
          </div>
        </div>
        <div className="col-md-6">
          <UnlockPotentialCard
            title={cardTwo.title}
            description={cardTwo.description}
          />
        </div>
      </div>
      <div className="contact">
        <UnlockPotentialCard
          title={cardThree.title}
          description={cardThree.description}
        >
          <Button name="Contat Us" />
        </UnlockPotentialCard>
      </div>
    </div>
  );
}
