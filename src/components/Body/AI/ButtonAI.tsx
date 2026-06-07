export default function ButtonAI({
  showAI,
  handleShowAI,
}: {
  showAI: boolean;
  handleShowAI: () => void;
}) {
  return (
<<<<<<< HEAD
    <button className="ai-analyze-button" type="button">
      다시 분석하기
    </button>
=======
    <>
      <h3>Hello, ButtonAI Component!</h3>
      <button onClick={handleShowAI}>AI API</button>
    </>
>>>>>>> 78c8f09c76316983f8bd87cb67d472bbbccdfcc7
  );
}
