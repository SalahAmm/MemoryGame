import { type MouseEvent } from "react";


type CardProps = {
  name : string;
  image : string;
  onClick : (e: MouseEvent<HTMLDivElement>) => void;
}

export default function Card({name, image , onClick} : CardProps) {
  return (
    <>
        <div  id ={name} onClick={onClick} className="  w-[22%] p-4 bg-white shadow-2xl rounded-2xl hover:scale-102 transition-transform duration-200 ease-in-out hover:-translate-y-1 flex justify-center items-center">
          <img  className="w-50" src={image} alt={`should be and image of ${name}`}/>
        </div>
    </>
  );
}
