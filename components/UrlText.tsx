"use client";
import { usePreviewStore } from "../stores/PreviewStore";

type UrlTextProps = {
  text: string;
};

export const UrlText = (props: UrlTextProps) => {
  const { setBgUrl } = usePreviewStore();

  const handleInputChange = (e: any) => {
    setBgUrl(e.target.value);
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
