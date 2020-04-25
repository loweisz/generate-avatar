import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./card.module.css";
import { generateFromString } from "generate-avatar";
import { v4 } from "uuid";

function Card() {
  const router = useRouter();
  const [usedUUID, setUsedUUID] = useState(
    router.query.str || "generateavatar"
  );

  useEffect(() => {
    if (usedUUID === "generateavatar" && router.query.str) {
      setUsedUUID(router.query.str);
    }
  }, [router.query.str]);

  useEffect(() => {
    if (usedUUID) {
      router.push(`${router.pathname}?str=${usedUUID}`);
    } else {
      router.push(`${router.pathname}`);
    }
  }, [usedUUID]);

  const renderNewImage = () => {
    setUsedUUID(v4());
  };

  const inputChange = (e) => {
    setUsedUUID(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Generate Avatar</span>
      <span className={styles.subTitle}>
        Generate any avatar with any string, which is 100% reproducable and
        fingerprinted.
      </span>
      <input
        className={styles.valueInput}
        value={usedUUID}
        onChange={inputChange}
      />
      <span className={styles.subTitle}>
        Generate an image from a random uuid
      </span>
      <button onClick={renderNewImage} className={styles.newButton}>
        Generate a random uuid
      </button>
      <h2>Download image below</h2>
      {usedUUID && (
        <div className={styles.card}>
          <img
            src={`data:image/svg+xml;utf8,${generateFromString(usedUUID)}`}
          />
        </div>
      )}
    </div>
  );
}

export default Card;
