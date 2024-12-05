"use client";

import { useEffect, useState } from "react";
import { button } from "../_variants/button";

export function WebShareAPI() {
  const [canShare, setCanShare] = useState<boolean>();

  const share = () => {
    const data: ShareData = {
      text: "shareデータ",
      title: "タイトル",
      url: "https://mail.google.com",
    };

    navigator.share(data);
  };

  useEffect(() => {
    setCanShare(navigator.canShare());
  }, []);

  return (
    <>
      <p className="mb-2">CanShare: {canShare}</p>
      <button onClick={share} className={button()}>
        共有のテスト
      </button>
    </>
  );
}
