import Image from "next/image";
import React from "react";
import RenderProsComponent from "../src/components/RenderProsComponent";

const Speaker = () => {
  return (
    <RenderProsComponent>
      {({ speakers }) => {
        return (
          <div>
            {speakers.map(({ imgSrc, name }) => {
              return (
                <Image
                src={`/images/${imgSrc}.png`}
                alt={name}
                key={imgSrc}
                width={495}
                height={599}
                />
              );
            })}
          </div>
        );
      }}
    </RenderProsComponent>
  );
};



// import Speakers from '../src/components/Speakers';

// function Speaker() {
//   return (
//     <Speakers />
//   )
// };

export default Speaker;
