type UploadPhotoButtonProps = {
  text: string;
};

export const UploadPhotoButton = (props: UploadPhotoButtonProps) => {
  const { text } = props;
  return (
    <button className="flex justify-center w-32 h-8 bg-indigo-600 text-white border border-indigo-100 rounded-md hover:bg-indigo-100 hover:text-indigo-400">
      {text}
    </button>
  );
};
