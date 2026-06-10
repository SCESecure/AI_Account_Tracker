import { useState } from "react";
import type { List } from "../Body";

export default function ValueInput({ defaultList }: { defaultList: List[] }) {
  const dateFormat = "YYYY-MM-DD";

  const [priceValue, setPriceValue] = useState<number>(0);
  const [dateValue, setDateValue] = useState<string>("");

  const handlePriceValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPriceValue(Number(e.target.value));
  };
  const handleDateValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDateValue(e.target.value);
  };

  return (
    <>
      <div>
        <p>금액</p>
        <input
          type="number"
          value={priceValue}
          onChange={handlePriceValue}
          placeholder="금액을 입력하세요"
        />
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
        <input
          type="text"
          value={dateValue}
          onChange={handleDateValue}
          placeholder={dateFormat}
        />
        <button>(달력)</button>
      </div>
      <div>
        <p>메모 (선택)</p>
        <textarea placeholder="메모를 입력하세요." />
      </div>
      <div>
        <button>저장하기</button>
      </div>
    </>
  );
}
