import busIcon from "../../../assets/icons/bus.svg";
import chartIcon from "../../../assets/icons/chart.svg";
import forkIcon from "../../../assets/icons/fork.svg";
import AdviseItem from "./AdviseItem";

export default function AdviseAI() {
  return (
    <div className="ai-advice-list">
      <AdviseItem
        icon={forkIcon}
        type="danger"
        title="식비 지출이 많았어요"
        description="식비가 지난달보다 45%나 증가했어요."
        subText="외식 대신 집밥을 더 활용하면 좋을 것 같아요"
      />

      <AdviseItem
        icon={busIcon}
        type="danger"
        title="교통비는 안정적이에요"
        description="교통비는 지난달과 비슷했어요."
        subText="계속 유지하면 잘 관리했어요 👍"
      />

      <AdviseItem
        icon={chartIcon}
        type="success"
        title="저축을 늘려보세요"
        description="이번 달 저축이 10% 감소했어요."
        subText="목표 달성을 응원해요 💪"
      />
    </div>
  );
}
