<<<<<<< HEAD
import busIcon from "../../../assets/icons/bus.svg";
import chartIcon from "../../../assets/icons/chart.svg";
import forkIcon from "../../../assets/icons/fork.svg";
=======
import React from "react";
>>>>>>> 78c8f09c76316983f8bd87cb67d472bbbccdfcc7
import AdviseItem from "./AdviseItem";

export default React.memo(function AdviseAI({ aiArr }: { aiArr: string[] }) {
  const todayDate = new Date();
  const adviseItem = [];

  for (let i = 0; i < 3; i++) {
    adviseItem.push(
      <li key={i}>
        <AdviseItem aiArr={aiArr} index={i}/>
      </li>,
    );
  }

  return (
<<<<<<< HEAD
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
=======
    <>
      {/* 여기 h3 태그 가운데 정렬 필요! */}
      <h3>
        AI가 분석한
        <br />
        {todayDate.getMonth() + 1}월 소비 트렌드에요!
      </h3>

      <ul>{adviseItem}</ul>

      {/* <AdviseItem aiArr={aiArr} /> */}
    </>
>>>>>>> 78c8f09c76316983f8bd87cb67d472bbbccdfcc7
  );
});
