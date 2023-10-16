type ShapeButtonProps = {
  text: string;
};

export const ShapeButton = (props: ShapeButtonProps) => {
  const { text } = props;
  return (
    <button className="flex justify-center items-center w-full h-20 bg-slate-400 text-white border border-slate-100 rounded-md hover:bg-slate-100 hover:text-slate-400">
      {text}
    </button>
  );
};
