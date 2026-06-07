import robotSmile from "../../../assets/icons/robot_smile_transparent.svg";
import AdviseAI from "./AdviseAI";
import ButtonAI from "./ButtonAI";

export default function AI() {
  const todayDate = new Date();

  const currentMonth = todayDate.getMonth() + 1;

  return (
    <section className="ai-page">
      <div className="ai-hero">
        <img className="ai-robot" src={robotSmile} alt="AI 분석 로봇" />

        <h2>
          AI가 분석한
          <br />
          {currentMonth}월 소비 트렌드예요!
        </h2>
      </div>

      <AdviseAI />

      <ButtonAI />
    </section>
  );
}
