import { lazy, Suspense, useState } from "react";
import ButtonAI from "./ButtonAI";

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

  const handleShowAI = (): void => {
    setShowAI(() => !showAI);
  };

  return (
    <>
      <h2>Hello, AI Component!</h2>

      {showAI && (
        <Suspense fallback={<p>로딩 중...</p>}>
          <AdviseAI />
        </Suspense>
      )}

      <ButtonAI showAI={showAI} handleShowAI={handleShowAI} />
    </>
  );
}
