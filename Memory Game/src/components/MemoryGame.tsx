import Card from "./Card";
import ScoreBoard from "./ScoreBoard";

export default function MemoryGame() {
  return (
    <>
      <div className="h-full flex flex-col w-full items-center gap-2">
        <div className="h-2/10 border-3 w-full flex justify-center">
          <ScoreBoard />
        </div>
        <div className="flex justify-center h-8/10 w-full border-3">
          <Card />
        </div>
        <div className="flex-row gap-4 w-3/5 justify-center flex">
        <button className="w-1/4 p-1 bg-gray-300 rounded hover:scale-102">New Game</button>
        <button className="w-1/4 bg-gray-300 rounded hover:scale-102">Restart</button>
        </div>
      </div>
    </>
  );
}
