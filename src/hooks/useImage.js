import { useState } from "react";
import { useEffect } from "react";

function useImage(imagePath) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(imagePath);
      setImage(response.default);
    };
    fetchImage();
  }, [imagePath]);

  return [image];
}

export { useImage };
