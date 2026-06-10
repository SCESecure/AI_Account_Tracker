export default function ValueInput() {
  return (
    <>
      <div>
        <p>금액</p>
        <input type="text" placeholder="금액을 입력하세요" />
        <p>원</p>
        <button>(계산기)</button>
      </div>
      <div>
        <p>카테고리</p>
        <select name="(임시 리스트)" id="tmp_list">
          <option value="list1">리스트1</option>
          <option value="list2">리스트2</option>
          <option value="list3">리스트3</option>
        </select>
      </div>
      <div>
        <p>날짜</p>
        <input type="text" placeholder="YYYY-MM-DD" />
        <button>(달력)</button>
      </div>
      <div>
        <p>메모 (선택)</p>
        <textarea placeholder="메모를 입력하세요." />
      </div>
    </>
  );
}
