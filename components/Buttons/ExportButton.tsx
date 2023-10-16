type ExportButtonProps = {
  text: string;
};

export const ExportButton = (props: ExportButtonProps) => {
  const { text } = props;
  return (
    <button className="flex justify-center items-center w-full h-16 bg-teal-300 text-white border border-teal-100 rounded-md hover:bg-teal-100 hover:text-teal-400">
      {text}
    </button>
  );
};
