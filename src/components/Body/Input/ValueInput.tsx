import {
  useState,
  type ComponentType,
  type Dispatch,
  type SetStateAction,
} from "react";
import ReactDatetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import type { List } from "../Body";
import { v4 as uuidv4 } from "uuid";
import type { Moment } from "moment";

// Datetime 관련해서 claude 사용 (따로 정확한 타입을 지정하지 않고, 타입을 any로 하여금 정의하겠음)
const Datetime: ComponentType<{
  input?: boolean;
  timeFormat?: boolean | string;
  dateFormat?: boolean | string;
  value?: string | Date;
  onChange?: (value: string | Moment) => void;
}> =
  (ReactDatetime as unknown as { default: ComponentType }).default ??
  (ReactDatetime as unknown as ComponentType);

export default function ValueInput({
  isIncome,
  setListItem,
}: {
  isIncome: boolean;
  setListItem: Dispatch<SetStateAction<List[]>>;
}) {
  const dateFormat = "YYYY-MM-DD";

  const [priceValue, setPriceValue] = useState<string>("");
  const [dateValue, setDateValue] = useState<string>("");
  const [isCalActive, setIsCalActive] = useState<boolean>(false);
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [memoValue, setMemoValue] = useState<string>("");

  const getSeparator = () => {
    const regex = /[^0-9a-zA-Z]+/;
    const match = dateFormat.match(regex);

    if (match) {
      const symbol = match[0]; // 문자 '-'
      const index = [];

      for (let i = 0; i < dateFormat.length; i++) {
        if (dateFormat[i] === symbol) {
          index.push(i);
        }
      }

      return { symbol, index };
    }

    return { symbol: undefined, index: [] };
  };

  const separator = getSeparator();

  // useEffect(() => {
  //   console.log(separator);
  // }, []);

  const handlePriceValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPriceValue(e.target.value);
  };

  // 버그가 하나 있음 : 입력 후 중간에 타이핑으로 수정할 때 1로 자동 수정되는 버그 존재함
  const handleDateValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // 여기 claude 사용하였음
    // 입력할 때 구분자가 여러 번 나타나는 버그 수정
    let currentDate = separator.symbol
      ? e.target.value.split(separator.symbol).join("")
      : e.target.value;

    if (separator.symbol && separator.index.length > 0) {
      separator.index.forEach((index) => {
        if (currentDate.length > index) {
          currentDate =
            currentDate.slice(0, index) +
            separator.symbol +
            currentDate.slice(index);
        }
      });
    }

    setDateValue(currentDate);
  };

  const handleChangeCal = (e: string | moment.Moment): void => {
    if (typeof e === "string") {
      return;
    }
    const formatDate = e.format(dateFormat);
    setDateValue(formatDate);
    setIsCalActive(false);
  };

  const handleCategoryVal = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCategoryValue(e.target.value);
  };

  const handleMemoVal = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMemoValue(e.target.value);
  };

  // --- 유효성 검사 ---

  const validatePrice = (price: string): string | undefined => {
    if (!price) return "금액을 입력해주세요.";
  };

  const validateCategory = (category: string): string | undefined => {
    if (!category) return "카테고리를 입력해주세요.";
  };

  const validateDate = (date: string): string | undefined => {
    if (!date) return "날짜를 입력해주세요.";
  };

  // -- 추가 함수 ---
  const createItem = (
    priceValue: string,
    categoryValue: string,
    dateValue: string,
  ): void => {
    // uuid 부여
    const UUID = uuidv4();

    // 데이터 전처리
    const year = Number(dateValue.slice(0, 4));
    const month = Number(dateValue.slice(6, 7));
    const day = Number(dateValue.slice(9, 10));

    setListItem((value) => [
      ...value,
      {
        id: UUID,
        year: year,
        month: month,
        day: day,
        category: categoryValue,
        isExpense: !isIncome,
        price: !isIncome
          ? Number(priceValue) - Number(priceValue) * 2
          : Number(priceValue),
        memo: memoValue,
      },
    ]);

    console.log({
      id: UUID,
      date: {
        dateValue: dateValue,
        year: year,
        month: month,
        day: day,
      },
      category: categoryValue,
      isExpense: !isIncome,
      price: !isIncome
        ? Number(priceValue) - Number(priceValue) * 2
        : Number(priceValue),
      memo: memoValue,
    });
  };

  // --- Submit 핸들러 ---

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const priceError = validatePrice(priceValue);
    const dateError = validateDate(dateValue);
    const categoryError = validateCategory(categoryValue);

    if (priceError) {
      alert(priceError);
      return;
    }

    if (dateError) {
      alert(dateError);
      return;
    }
    if (categoryError) {
      alert(categoryError);
      return;
    }

    // 리스트에 입력되는 구간

    createItem(priceValue, categoryValue, dateValue);

    console.log("정상 처리되었습니다.");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <p>금액</p>
          <input
            type="text"
            value={priceValue}
            onChange={handlePriceValue}
            placeholder="금액을 입력하세요."
            required
            pattern="^\+?[0-9]+$"
          />
          <p>원</p>
          {/* <button type="button">(계산기)</button> */}
          {/* 계산기 구현은 좀 힘들 것 같음 */}
        </div>
        <div>
          <p>카테고리</p>
          <input
            type="text"
            value={categoryValue}
            onChange={handleCategoryVal}
            placeholder="카테고리를 입력하세요."
          />
        </div>
        <div>
          <p>날짜</p>
          <input
            type="text"
            value={dateValue}
            onChange={handleDateValue}
            placeholder={dateFormat}
            maxLength={10}
          />
          <button type="button" onClick={() => setIsCalActive(!isCalActive)}>
            (캘린더)
          </button>
          {isCalActive && (
            <Datetime
              input={false}
              timeFormat={false}
              dateFormat={dateFormat}
              value={dateValue}
              onChange={handleChangeCal}
            />
          )}
        </div>
        <div>
          <p>메모 (선택)</p>
          <textarea
            placeholder="메모를 입력하세요."
            value={memoValue}
            onChange={handleMemoVal}
          />
        </div>
        <div>
          <button type="submit">저장하기</button>
        </div>
      </form>
    </>
  );
}
