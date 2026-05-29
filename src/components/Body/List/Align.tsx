export default function Align() {
  const date = new Date();

  return (
    <>
      {/* 날짜 부분 */}
      <button type="button">(왼쪽 화살표)</button>
      <p>
        {date.getFullYear()}년 {date.getMonth()}월
      </p>
      <button>(오른쪽 화살표)</button>

      <button>최신순</button>
      <button>(오름차순)</button>
    </>
  );
}
