import OpenAI from "openai";
import { lazy, Suspense, useEffect, useState } from "react";
import ButtonAI from "./ButtonAI";

// API 영역 ///////////////////
const key = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: key,
  dangerouslyAllowBrowser: true,
});

const sendmsg = async () => {
  const response = await openai.responses.create({
    model: "gpt-5.4-mini",
    input: [
      {
        role: "user",
        content: "재미있는 이야기 하나 해줘.", // 테스트
      },
    ],
  });

  return response.output_text;

  // console.log(response);
};

const AdviseAI = lazy(
  () =>
    new Promise<typeof import("./AdviseAI")>((resolve) => {
      setTimeout(() => {
        resolve(import("./AdviseAI"));
      }, 5000);
    }),
);

export default function AI() {
  const [showAI, setShowAI] = useState<boolean>(false);
  const [apioutput, setApioutput] = useState<string>("");

  // 이 부분 claude 사용해서 해결하였음 (다중 API 호출 방지 코드)
  useEffect(() => {
    sendmsg().then((value) => setApioutput(apioutput + value));
  }, []);

  const handleShowAI = (): void => {
    setShowAI(() => !showAI);
  };

  return (
    <>
      <h2>Hello, AI Component!</h2>

      {showAI && (
        <Suspense fallback={<p>로딩 중...</p>}>
          <AdviseAI apioutput={apioutput} />
        </Suspense>
      )}

      <ButtonAI showAI={showAI} handleShowAI={handleShowAI} />
    </>
  );
}
