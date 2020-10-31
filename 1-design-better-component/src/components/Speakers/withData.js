const withData = (maxSpeakerToShow) => (Component) => {
  const speakers = [
      { imgSrc: 'speaker-component-1124', name: 't'},
      { imgSrc: 'speaker-component-1530', name: 'b'},
      { imgSrc: 'speaker-component-10803', name: 'f'}
  ];

  return () => {
    const limitSpeakers = speakers.slice(0, maxSpeakerToShow);
    return <Component speakers={limitSpeakers}></Component>
  };
};

// function withData(maxSpeakerToShow) {

//   return function(Component) {
//     const speakers = [
//       { imgSrc: 'speaker-component-1124', name: 't'},
//       { imgSrc: 'speaker-component-1530', name: 'b'},
//       { imgSrc: 'speaker-component-10803', name: 'f'}
//     ]
    
//     return function() {
//       const limitSpeakers = speakers.slice(0, maxSpeakerToShow);
//       return <Component speakers={limitSpeakers}></Component>
//     };
//   };
// }

export default withData;
