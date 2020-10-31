import React from 'react';
import Speaker from '../src/components/Speaker';
const Speakers = () => {
  return <Speaker />
};

export default Speakers;

//EXAMPLE WITH RENDER PROPS
// import Image from "next/image";
// import React from "react";
// import RenderProsComponent from "../src/components/RenderProsComponent";

// const Speakers = () => {
//   return (
//     <RenderProsComponent>
//       {({ speakers }) => {
//         return (
//           <div>
//             {speakers.map(({ imgSrc, name }) => {
//               return (
//                 <Image
//                 src={`/images/${imgSrc}.png`}
//                 alt={name}
//                 key={imgSrc}
//                 width={495}
//                 height={599}
//                 />
//               );
//             })}
//           </div>
//         );
//       }}
//     </RenderProsComponent>
//   );
// };

// export default Speakers;


// import Speakers from '../src/components/Speakers';

// function Speaker() {
//   return (
//     <Speakers />
//   )
// };

