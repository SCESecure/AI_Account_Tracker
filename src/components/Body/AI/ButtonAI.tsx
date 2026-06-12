export default function ButtonAI({
  isLoading,
  handleShowAI,
  hasResult,
}: {
  isLoading: boolean;
  handleShowAI: () => void;
  hasResult: boolean;
}) {
  return (
    <>
      <button
        className="ai-analyze-button"
        onClick={handleShowAI}
        disabled={isLoading}
        type="button"
      >
        {hasResult ? "다시 분석하기" : "분석하기"}
      </button>
    </>
  );
}
