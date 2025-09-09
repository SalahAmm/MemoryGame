import Card from "./Card";
import ScoreBoard from "./ScoreBoard";

export default function MemoryGame() {
  return (
    <>
      <div className="h-full flex flex-col w-full items-center gap-2">
        <div className="h-2/10 border-3 w-full flex justify-center">
          <ScoreBoard />
        </div>
        <div className="h-8/10 w-full border-3">
          <Card />
        </div>
      </div>
    </>
  );
}
