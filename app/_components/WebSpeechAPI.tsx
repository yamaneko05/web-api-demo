"use client";

import { ChangeEvent, useState } from "react";
import { button } from "../_variants/button";
import { formLabel } from "../_variants/formLabel";
import { input } from "../_variants/input";

export function WebSpeechAPI() {
  const [text, setText] = useState<string>("");

  const speech = () => {
    const synth = window.speechSynthesis;

    const utterance = new SpeechSynthesisUtterance(text);

    synth.speak(utterance);
  };

  return (
    <>
      <div className="mb-2">
        <label htmlFor="first_name" className={formLabel()}>
          テキスト
        </label>
        <input
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setText(event.target.value)
          }
          type="text"
          id="first_name"
          className={input()}
          required
        />
      </div>
      <button onClick={speech} className={button()}>
        読み上げのテスト
      </button>
    </>
  );
}
