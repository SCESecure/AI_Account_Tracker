import robotNeutral from "../../../assets/icons/robot_neutral_transparent.svg";
import robotSmile from "../../../assets/icons/robot_smile_transparent.svg";
import OpenAI from "openai";
import { Suspense, useEffect, useState } from "react";
import ButtonAI from "./ButtonAI";
import AdviseAI from "./AdviseAI";
import type { List } from "../Body";

// --- API 영역 ---
// 어차피 유저가 직접 입력하지 않을 것이기 떄문에 prompt injection은 일어나지 않음
// 또한 API 키도 유저 API 키를 사용하기 때문에 필요 x, 그저 프롬프트만 잘 작성하면 됨

const key = import.meta.env.VITE_OPENAI_API_KEY;
const systemPrompt =
  "당신은 사용자의 가계부를 보고 지출 상태를 분석하는 분석가이자, 전문가이자, 상담가입니다. \
   사용자가 주는 데이터들은 사용자의 가계부이며, \
   데이터들의 타입은 Object 형태에서 JSON.stringify()를 이용해 string 형태로 바꾼 형태입니다. \
   가계부의 지출 내역을 분석하고, 사용자에게 조언을 하십시오. \
   최소 2줄에서 최대 4줄 요약해서 조언을 하십시오. \
   또한 반드시 존칭을 사용해서 친근감있게, 동시에 현실적으로 조언을 하십시오. \
   따로 전체 요약은 하지 말고, 지출 카테고리 중 하나를 임의로 골라서 요약하고 조언하십시오. \
   여기서 주의해야 할 점은 카테고리 중 하나를 임의로 고르는 건 좋지만, 만일 이전에 이미 분석한 내용이 있다면, \
   분석한 카테고리는 제외해서 분석하십시오. \
   만일 분석할 카테고리가 없을 경우 분석할 카테고리가 없다고 사용자에게 알리십시오. \
   예를 들면 다음과 같습니다. (내용은 달라도 됩니다. 이건 예시일 뿐이니 참고해서 조언을 하시길 바랍니다.) \
   [예시 1 : (식비 카테고리 분석)] \
   '식비가 지난 달 보다 45%나 증가했어요. \
   외식이나 배달 대신 집밥을 조금 더 활용하시다 보면, \
   식비를 최대한 줄일 수 있을 거에요!' \
   [예시 2 : (교통비 카테고리 분석)] \
   '교통비는 안정적이네요. \
   하지만 그래도 식비 다음으로 차지하고 있으니, 줄일 필요가 있을 것 같아요.' \
   [예시 3 : (게임비 카테고리 분석)] \
   '게임비가 너무 높아요. \
   최대한 게임에 투자하는 돈을 줄여보는 게 어떠한가요? \
   게임에 돈을 지출하기 전에 다시 한번 생각해보는 것도 \
   줄이는 방법 중 일부랍니다!' \
   [예시 4 (분석할 카테고리가 없을 경우)] \
   '현재 사용자님의 지출 내역을 분석할 정도의 내역이 없어요... \
   입력 화면에서 지출 내역을 추가해주시겠어요...?'";
let userPrompt = "여기 내 가계부인데 현재 지출에 대해 조언을 좀 해줄 수 있어?";

const openai = new OpenAI({
  apiKey: key,
  dangerouslyAllowBrowser: true,
});

const sendmsg = async (list: string, prompt: string) => {
  const response = await openai.responses.create({
    model: "gpt-5.4-mini",
    input: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: prompt + list,
      },
    ],
  });
  console.log(response);
  return response.output_text;
};

// 로딩 영역
// const AdviseAI = lazy(
//   () =>
//     new Promise<typeof import("./AdviseAI")>((resolve) => {
//       setTimeout(() => {
//         resolve(import("./AdviseAI"));
//       }, 1000);
//     }),
// );

export default function AI({ defaultList }: { defaultList: List[] }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAI, setShowAI] = useState<boolean>(false);
  const [aiArr, setAiArr] = useState<string[]>([]);

  const todayDate = new Date();

  const currentMonth = todayDate.getMonth() + 1;

  const hasResult = aiArr.length > 0;

  const handleShowAI = (): void => {
    setShowAI(() => !showAI);
    setAiArr([]);
    userPrompt = "여기 내 가계부인데 현재 지출에 대해 조언을 좀 해줄 수 있어?";
  };
  // 이 부분 claude 사용해서 해결하였음
  // (자동으로 다중 API 호출 방지와 API 로딩 부분만 사용)
  useEffect(() => {
    if (showAI) {
      setIsLoading(true); // 이거는 무시 가능한 오류임!

      const run = async () => {
        try {
          let prompt = userPrompt;
          const result: string[] = [];

          for (let i = 0; i < 3; i++) {
            const value = await sendmsg(JSON.stringify(defaultList), prompt);
            result.push(value);
            prompt += `(분석한 내용 : ${value})`;
          }
          setAiArr(result);
        } finally {
          setIsLoading(false);
        }
      };

      run();

      // try {
      //   sendmsg(JSON.stringify(defaultList)).then((value) => {
      //     aiArr.push(value);
      //     userPrompt =
      //       userPrompt + "(분석한 카테고리 있음. 분석한 내용 :" + value + ")";
      //   });
      //   sendmsg(JSON.stringify(defaultList)).then((value) => {
      //     aiArr.push(value);
      //     userPrompt =
      //       userPrompt + "(분석한 카테고리 있음. 분석한 내용 :" + value + ")";
      //   });
      //   sendmsg(JSON.stringify(defaultList)).then((value) => {
      //     aiArr.push(value);
      //     userPrompt =
      //       userPrompt + "(분석한 카테고리 있음. 분석한 내용 :" + value + ")";
      //   });
      // } finally {
      //   setIsLoading(false);
      // }
      // .finally(() => setIsLoading(false));
    }
  }, [showAI]);

  return (
    <section className="ai-page">
      {!hasResult && (
        <div className="ai-hero">
          <img className="ai-robot" src={robotNeutral} alt="AI 대기 로봇" />

          {isLoading ? (
            <>
              <h2>AI가 소비 내역을 분석 중이에요!</h2>
              <p className="ai-guide-text">
                잠시만 기다려주세요. 입력된 거래 내역을 바탕으로 소비 패턴을
                확인하고 있어요.
              </p>
            </>
          ) : (
            <>
              <h2>AI 분석을 시작해보세요!</h2>
              <p className="ai-guide-text">
                버튼을 누르면 지출 내역을 바탕으로 이번 달 소비 습관을
                분석해드릴게요.
              </p>
            </>
          )}
        </div>
      )}

      {hasResult && (
        <div className="ai-hero">
          <img className="ai-robot" src={robotSmile} alt="AI 분석 로봇" />

          <h2>
            AI가 분석한
            <br />
            {currentMonth}월 소비 트렌드예요!
          </h2>
        </div>
      )}

      {showAI && !isLoading && (
        <Suspense fallback={<p className="ai-loading">분석 중입니다...</p>}>
          <AdviseAI aiArr={aiArr} />
        </Suspense>
      )}

      <ButtonAI
        isLoading={isLoading}
        handleShowAI={handleShowAI}
        hasResult={hasResult}
      />
    </section>
  );
}
