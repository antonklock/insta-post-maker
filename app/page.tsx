import { ShapeButtons } from "../components/Buttons/ShapeButtons";
import { ExportButton } from "@/components/Buttons/ExportButton";
import { UploadPhotoButton } from "@/components/UploadPhotoButton";
import { PostText } from "@/components/PostText";
import { PostPreview } from "@/components/PostPreview";
import { UrlText } from "@/components/UrlText";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen max-h-iphone14max items-center">
      <div className="flex flex-col justify-center w-80 mt-10">
        <PostPreview text={"Heya world!"} />
        <div className="mt-2">
          {/* <UploadPhotoButton text="Upload Photo" /> */}
          <UrlText text="Enter URL..." />
        </div>
      </div>
      <div className="h-full flex flex-col items-center justify-between">
        <div className="mt-10">
          <ShapeButtons />
          <div className="mt-2">
            <PostText text="Enter text..." />
          </div>
        </div>
        <div className="w-80 mb-10">
          <ExportButton text="Export" />
        </div>
      </div>
    </div>
  );
}
