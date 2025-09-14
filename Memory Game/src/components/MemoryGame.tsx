import Card from "./Card";
import ScoreBoard from "./ScoreBoard";
import { useEffect } from "react";
import { useState } from "react";
import { type MouseEvent } from "react";


type cardImagesType = {
  name: string;
  url: string;
  id: number;
};

export default function MemoryGame() {
  
  // create a state the push the names of the clicked card 
  //  if the card we clicked has a name in that state array of names 
  // then reset , if not score + 1

  const [cardImages, setCardImages] = useState<cardImagesType[]>([]);
  const [scoreBoard , setScoreBoard ] = useState<number>(0);
  const [highestScore , setHigestScore ] = useState<number>(0);
  const [pokemonNames , setPokemonNames] = useState<string[]>([]);

  useEffect(() => {
    const callImages = async () => {

      try {
        // Getting Pokemon Items 

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const data = await response.json();
        const result = await data.results.slice(0 , 8);

        // Getting Only 8 of Them
        
        //Getting the images and passing and object of Data needed to the cardImage State Array
       const images = await Promise.all (
        result.map(async (item: {name : string , url : string}, index : number) => {
          const name = item.name;
          try {
            const response = await fetch(item.url);
            const data = await response.json();
            const image = data.sprites.front_default;
            
            return  { name: name, url: image, id: index };
          } catch (err) {
            console.log(`ther Error is : `, err);
          }
        })
       ) 
       setCardImages(images);
      } catch (err) {
        console.log(`The Second Error is : `, err);
      }
    };
    callImages();
    console.log(cardImages);
  }, []);



  // Hanle Event When Card Clicked 
  const hanldeCardClick = (e: MouseEvent<HTMLDivElement> ) => {
  // Incerase Score when Card Clicked
  const clickedName = e.currentTarget.id;
    // Cheak if there Repeated card
  if(pokemonNames.includes(clickedName)) {
    setPokemonNames([]);
    setScoreBoard(0)
    //Change the Highest Score
    if(scoreBoard > highestScore) {
      setHigestScore(scoreBoard);
    }
    
  }else {
    // Add Card Names
    // Increase Score
    setPokemonNames(prev => [...prev , clickedName]);
    setScoreBoard(prev => prev + 1);
  }
    



    // Shuffle Card Randomly when Clicked
      setCardImages((prev) => {
        const newArray = [...prev];

        for(let i = newArray.length - 1 ; i > 0 ; i -- ) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp  = newArray[i];
          newArray[i] = newArray[j];
          newArray[j] = temp
        }
        return newArray;
      })
  }


  // Create New Game 
  //When Button Clicked , Reset All State
  const handleNewGame = () => {
    setHigestScore(0);
    setScoreBoard(0);
    setPokemonNames([]);

      setCardImages((prev) => {
        const newArray = [...prev];

        for(let i = newArray.length - 1 ; i > 0 ; i -- ) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp  = newArray[i];
          newArray[i] = newArray[j];
          newArray[j] = temp
        }
        return newArray;
      })
  }








  // Two Main Element
  return (
    <>
      <div className="h-full flex flex-col w-full items-center gap-2">
        <div className="h-2/10  w-full flex justify-center">
          <ScoreBoard score={scoreBoard} highScore={highestScore}/>
        </div>

        {/* Cards */}
        <div className="flex justify-center h-8/10 w-full  ">
          <div className="flex w-3/5 h-full p-4 flex-wrap gap-2 justify-center">
            {cardImages.map((item) => {
              return <Card key={item.id} name={item.name} image={item.url}  onClick={hanldeCardClick}/>
            })}
          </div>
        </div>
        <div className="flex-row gap-4 w-3/5 justify-center flex">
          <button  onClick={handleNewGame}className="w-1/4 p-1 bg-gray-300 rounded hover:scale-102">
            New Game
          </button>
        </div>
      </div>
    </>
  );
}
