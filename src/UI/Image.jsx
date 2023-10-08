import React from "react";
import { useMemo } from "react";
import { useState } from "react";

import "./Image.scss";

function Image({ src, ...props }) {
  const emptyImagePath = useMemo(
    () => "/src/assets/img/00009-2644341876.png",
    []
  );

  const [imgPath, setImagePath] = useState(src);

  return (
    <img
      className={`card_image ${props.className || ""}`}
      src={imgPath}
      {...props}
    />
  );
}

export default Image;
