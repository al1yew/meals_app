"use client";

import { useRef, useState } from "react";
import styles from "./imagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [image, setImage] = useState();
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.click();
  };

  const handleImageSelection = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!image && <p>No Image selected yet.</p>}
          {image && <Image src={image} alt="selected image" fill />}
        </div>
        <input
          type="file"
          ref={ref}
          className={styles.input}
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          required
          onChange={handleImageSelection}
        />
        <button type="button" className={styles.button} onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};
export default ImagePicker;
