// interface AdviseItemProps {
//   icon: string;
//   type: "success" | "danger";
//   title: string;
//   description: string;
//   subText: string;
// }
// props 수정했으므로 인터페이스 다시 짤 필요 있음.

export default function AdviseItem({
  aiArr,
  index,
}: {
  aiArr: string[];
  index: number;
}) {
  const textLines = aiArr[index]
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const cardClassName = `ai-advice-card card-${index + 1}`;

  return (
    <article className={cardClassName}>
      <div className="ai-advice-text-wrap">
        {textLines.length > 0 ? (
          textLines.map((line, lineIndex) => (
            <p className="ai-advice-text" key={lineIndex}>
              {line}
            </p>
          ))
        ) : (
          <p className="ai-advice-text">{aiArr[index]}</p>
        )}
      </div>
    </article>
  );
}