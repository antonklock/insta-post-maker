import { ShapeButton } from "./ShapeButton";

export const ShapeButtons = () => {
  return (
    <>
      <div className="flex w-80 justify-between">
        <ShapeButton text="Shape 1" />
        <ShapeButton text="Shape 2" />
      </div>
      <div className="flex w-80 justify-between">
        <ShapeButton text="Shape 3" />
        <ShapeButton text="Shape 4" />
      </div>
    </>
  );
};
