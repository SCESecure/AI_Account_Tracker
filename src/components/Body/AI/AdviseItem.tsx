// interface AdviseItemProps {
//   icon: string;
//   type: "success" | "danger";
//   title: string;
//   description: string;
//   subText: string;
// }
// props 수정했으므로 인터페이스 다시 짤 필요 있음.

export default function AdviseItem({
  // icon,
  aiArr,
  index,
}: {
  aiArr: string[];
  index: number;
}) {
  return (
    <article className="ai-advice-card">
      {/* <div className={`ai-advice-icon ${type}`}>
        <img src={icon} alt={title} />
      </div> */}

      <div className="ai-advice-content">
        {/* <h3>{title}</h3> */}
        <p>{aiArr[index]}</p>
      </div>
    </article>
  );
}
