"use client";
import { usePreviewStore } from "../stores/PreviewStore";
import { useEffect } from "react";

type PostTextProps = {
  text: string;
};

export const PostText = (props: PostTextProps) => {
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
        placeholder={"Escribe algo..."}
        className="w-80 h-16 pl-2 bg-gray-800 rounded-md placeholder:text-white outline-none"
        onChange={handleInputChange}
      ></input>
    </>
  );
};
