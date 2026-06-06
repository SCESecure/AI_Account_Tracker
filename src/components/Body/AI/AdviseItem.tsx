import React from "react";

export default React.memo(function AdviseItem({
  apioutput,
}: {
  apioutput: string;
}) {
  return (
    <>
      {/* 아이콘 부분은 스타일에서 처리 */}
      <p>[아이콘]</p>
      <p>{apioutput}</p>
      {/* <button onClick={sendmsg}>Test</button> */}
    </>
  );
});
