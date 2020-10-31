import Image from 'next/image';
import React, { useContext } from 'react';
import SpeakerContext from '../../Context/SpeakerContext';

const Speaker = () => {
  const speakers = useContext(SpeakerContext)
  return (
        <div>
          {speakers.map(({imgSrc, name}) => {
            return <Image src={`/images/${imgSrc}.png`} alt={name} key={imgSrc} width={495} height={599} />;
          })}
        </div>
  );
};

export default Speaker;

// EXAMPLE WITH HOC
// import Image from 'next/image';
// import React from 'react';
// import withData from './withData';

// const Speaker = ({speakers}) => {
  

//   return (
//     <div>
//       {speakers.map(({imgSrc, name}) => {
//         return <Image src={`/images/${imgSrc}.png`} alt={name} key={imgSrc} width={495} height={599} />;
//       })}
//     </div>
//   )
// }

// const maxSpeakerToShow = 2;
// export default withData(maxSpeakerToShow)(Speaker);