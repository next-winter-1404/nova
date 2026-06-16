"use client"
import React, { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";

type ImageFallbackProps = ImageProps & {
  fallbackSrc: ImageProps["src"];
};

const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  fallbackSrc,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState<ImageProps["src"]>(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);
  const safeSrc =
  typeof imgSrc === "string" && imgSrc.trim() !== ""
    ? imgSrc
    : fallbackSrc;
  return (
    <Image
      {...rest}
      src={safeSrc}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default ImageFallback;