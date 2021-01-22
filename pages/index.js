import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { Plugins, CameraResultType } from "@capacitor/core";
import { useEffect, useState } from "react";

const { Camera } = Plugins;

const Index = () => {
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    defineCustomElements(window);
  }, []);

  async function takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    setImagePath(image.webPath);
  }

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
        Take photo
      </button>
      ;
    </div>
  );
};

export default Index;
