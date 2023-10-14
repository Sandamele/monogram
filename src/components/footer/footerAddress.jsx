import React from "react";

export default function FooterAddress({ address = [] }) {
  return (
    <ul className="list">
      {address &&
        address.map((address, index) => <li key={index}>{address}</li>)}
    </ul>
  );
}
