<<<<<<< HEAD
interface AdviseItemProps {
  icon: string;
  type: "success" | "danger";
  title: string;
  description: string;
  subText: string;
}

export default function AdviseItem({
  icon,
  type,
  title,
  description,
  subText,
}: AdviseItemProps) {
  return (
    <article className="ai-advice-card">
      <div className={`ai-advice-icon ${type}`}>
        <img src={icon} alt={title} />
      </div>

      <div className="ai-advice-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{subText}</p>
      </div>
    </article>
=======
import React from "react";

export default React.memo(function AdviseItem({
  aiArr,
  index,
}: {
  aiArr: string[];
  index: number;
}) {
  return (
    <>
      {/* 아이콘 부분은 스타일에서 처리 */}
      <p>[아이콘]</p>
      <p>{aiArr[index]}</p>
      {/* <button onClick={sendmsg}>Test</button> */}
    </>
>>>>>>> 78c8f09c76316983f8bd87cb67d472bbbccdfcc7
  );
});
