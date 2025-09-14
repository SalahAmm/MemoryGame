
type scoreBoardProps = {
  score : number;
  highScore: number;
}


export default function ScoreBoard ({score , highScore} : scoreBoardProps) {

    return (
        <>
      <div className="flex flex-col gap-5 p-8 w-3/5 items-center text-base m-5 rounded bg-gray-800 text-white" >

        <div className="flex flex-row gap-20 justify-center items-center font-bold">
            <p className="">Current Score : {score}</p>
            <p className="">Best Score : {highScore}</p>
        </div>
        <p className="font-thin">Click only once on each card to earn pointes!!!</p>        
      </div>
        </>
    )
}
