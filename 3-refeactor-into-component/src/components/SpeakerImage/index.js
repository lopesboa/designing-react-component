// import Image from 'next/image';
import { SimpleImg } from "react-simple-img";
const SpeakerImage = ({ firstName, lastName, id }) => {
  const imageUrl = `/speakers/Speaker-${id}.jpg`;
  return (
    <SimpleImg
      animationDuration={1}
      applyAspectRatio
      width={200}
      height={200}
      src={imageUrl}
      alt={`${firstName} ${lastName}`}
    />
  );
};

export default SpeakerImage;
