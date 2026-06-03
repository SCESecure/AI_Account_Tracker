import React from "react";
import AdviseItem from "./AdviseItem";

export default React.memo(function AdviseAI() {
  const todayDate = new Date();
  // const adviseItem = [];

  // for (let i = 0; i < 3; i++) {
  //   adviseItem.push(
  //     <li key={i}>
  //       <AdviseItem />
  //     </li>,
  //   );
  // }

  return (
    <>
      {/* 여기 h3 태그 가운데 정렬 필요! */}
      <h3>
        AI가 분석한
        <br />
        {todayDate.getMonth() + 1}월 소비 트렌드에요!
      </h3>

      {/* <ul>{adviseItem}</ul> */}

      <AdviseItem />
    </>
  );
});
