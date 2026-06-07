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
  );
}
