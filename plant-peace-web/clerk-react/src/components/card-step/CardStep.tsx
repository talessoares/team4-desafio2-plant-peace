import React from "react";
import style from "./CardStep.module.css";
interface CardStepProps {
  icon: React.ReactNode | string;
  title: string;
  description: string;
}

const CardStep: React.FC<CardStepProps> = ({ icon, title, description }) => {
  return (
    <div className={style.card}>
      <div className={style.icon}>
        {typeof icon === "string" ? (
          <img src={icon} alt={title} className={style.iconImage} />
        ) : (
          icon
        )}
      </div>
      <div className={style.body}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
      </div>
    </div>
  );
};

export default CardStep;
