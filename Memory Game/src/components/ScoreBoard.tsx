export default function ScoreBoard () {

    return (
        <>
      <div className="flex flex-col gap-5 p-8 w-3/5 items-center border-2 m-5 rounded bg-gray-700 text-white" >

        <div className="flex flex-row gap-20 justify-center items-center">
            <p className="">Current Score : 0</p>
            <p className="">Best Score : 2</p>
        </div>
        <p>Click only once on each card to earn pointes!!!</p>        
      </div>
        </>
    )
}
