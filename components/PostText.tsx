"use client";
import { usePreviewStore } from "../stores/PreviewStore";
import { useEffect, useState } from "react";

type PostTextProps = {
  text: string;
};

export const PostText = (props: PostTextProps) => {
  let placeholder = "";
  const { setText } = usePreviewStore();

  useEffect(() => {
    setText("Hola Mundo!");
  }, []);

  const handleInputChange = (e: any) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        placeholder={placeholder}
        className="w-80 h-16 pl-2 bg-gray-800 rounded-md placeholder:text-white outline-none"
        onChange={handleInputChange}
      ></input>
    </>
  );
};
