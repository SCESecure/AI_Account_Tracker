export default function ButtonAI({
  showAI,
  handleShowAI,
}: {
  showAI: boolean;
  handleShowAI: () => void;
}) {
  return (
    <>
      <h3>Hello, ButtonAI Component!</h3>
      <button onClick={handleShowAI}>AI API</button>
    </>
  );
}
