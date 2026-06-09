import React from "react";

import AdviseItem from "./AdviseItem";

export default React.memo(function AdviseAI({ aiArr }: { aiArr: string[] }) {
  const adviseItem = [];

  for (let i = 0; i < Math.min(aiArr.length, 3); i++) {
    adviseItem.push(
      // [추가] ul/li 기본 점 표시 제거와 카드 간격 적용을 위한 className 추가
      <li className="ai-advice-list-item" key={i}>
        {/* [유지] aiArr와 index를 AdviseItem으로 전달하는 기능 흐름 유지 */}
        <AdviseItem aiArr={aiArr} index={i} />
      </li>,
    );
  }

  // [수정] Fragment 대신 ul 구조로 정리하고, AI 결과 리스트 스타일 className 추가
  return <ul className="ai-advice-list">{adviseItem}</ul>;
});
