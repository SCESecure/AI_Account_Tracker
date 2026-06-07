export default function ButtonAI({
  handleShowAI,
}: {
  handleShowAI: () => void;
}) {
  return (
    <>
      <button className="ai-analyze-button" onClick={handleShowAI} type="button">
        다시 분석하기
      </button>
    </>
  );
}
