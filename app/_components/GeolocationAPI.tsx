"use client";

import { useState } from "react";
import { button } from "../_variants/button";
import SyntaxHighlighter from "react-syntax-highlighter";

export function GeolocationAPI() {
  const [position, setPosition] = useState<GeolocationPosition>();
  const [error, setError] = useState<GeolocationPositionError>();

  const successCallback = (position: GeolocationPosition) => {
    setPosition(position);
  };

  const errorCallback = (error: GeolocationPositionError) => {
    setError(error);
  };

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  return (
    <>
      <p className="mb-2">Position: </p>
      {position && (
        <SyntaxHighlighter>
          {JSON.stringify(position, null, "  ")}
        </SyntaxHighlighter>
      )}
      <p className="mb-2">Error: {error?.message}</p>
      <button onClick={getCurrentPosition} className={button()}>
        位置情報のテスト
      </button>
    </>
  );
}
