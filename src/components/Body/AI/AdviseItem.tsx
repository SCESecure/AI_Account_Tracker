import OpenAI from "openai";

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
        content: "재미있는 이야기 하나 해줘.",
      },
    ],
  });

  console.log(response);
};

export default function AdviseItem() {
  return (
    <>
      {/* 아이콘 부분은 스타일에서 처리 */}
      <p>[아이콘]</p>
      <button onClick={sendmsg}>Test</button>
    </>
  );
}
