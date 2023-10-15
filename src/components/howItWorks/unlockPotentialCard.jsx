import React from "react";

export default function UnlockPotentialCard({ title, description, children }) {
  return (
    <div className="unlockPotentialCard">
      <h2>{title}</h2>
      <p>{description} </p>
      <>{children}</>
    </div>
  );
}
