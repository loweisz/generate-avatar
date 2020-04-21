import React, { useState } from "react";
import styles from "./card.module.css";
import { generateFromUUID } from "generate-avatar";
import { v4 } from "uuid";

function Card() {
  const [usedUUID, setUsedUUID] = useState(v4());

  const renderNewImage = () => {
    setUsedUUID(v4());
  };

  return (
    <>
      <span className={styles.title}>Generate Image</span>
      <span className={styles.subTitle}>{usedUUID}</span>
      <div className={styles.card}>
        <div
          dangerouslySetInnerHTML={{ __html: generateFromUUID(usedUUID) }}
          style={{ height: "300px", width: "300px" }}
        />
      </div>
      <button onClick={renderNewImage} className={styles.newButton}>
        Generate new image
      </button>
    </>
  );
}

export default Card;
