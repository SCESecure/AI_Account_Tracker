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
  );
});
