import React from "react";

export const Brand = ({ link }) => {
  return (
    <div className="d-flex">
      <a href={link}>
        <svg
          height="38"
          viewBox="0 0 520 114"
          fill="currentColor"
          className="brand"
        >
          <title>Monogram</title>
          <path d="M150,36V0H0V114H150ZM144,6V36H78V6ZM6,6H72V72H6ZM72,108H6V78H72Zm72,0H78V78h0V42h66Z"></path>
          <rect x="35.5" y="17" width="6" height="44"></rect>
          <rect x="53" y="17" width="6" height="44"></rect>
          <rect x="18" y="17" width="6" height="44"></rect>
          <path d="M111.5,50a25,25,0,1,0,25,25A25,25,0,0,0,111.5,50Zm0,44a19,19,0,1,1,19-19A19,19,0,0,1,111.5,94Z"></path>
          <text x="180" y="80" className="brandName">
            Monogram
          </text>
        </svg>
      </a>
    </div>
  );
}
