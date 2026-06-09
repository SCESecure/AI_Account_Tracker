export default function ButtonAI({
  handleShowAI,
  hasResult,
}: {
  handleShowAI: () => void;
  hasResult: boolean;
}) {
  return (
    <>
      <button
        className="ai-analyze-button"
        onClick={handleShowAI}
        type="button"
      >
        {hasResult ? "다시 분석하기" : "분석하기"}
      </button>
    </>
  );
}
