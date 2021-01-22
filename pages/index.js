import { Camera, CameraResultType } from "@capacitor/camera";
import { useState } from "react";

const Index = () => {
  const [imagePath, setImagePath] = useState("");

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    setImagePath(image.webPath);
  };

  if (imagePath !== "") {
    return (
      <div>
        <img src={imagePath} />
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          takePicture();
        }}
      >
        Take photoo
      </button>
    </div>
  );
};

export default Index;
