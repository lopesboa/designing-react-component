
function RenderPropsComponent(props) {
  const speakers = [
    { imgSrc: "speaker-component-1124", name: "t" },
    { imgSrc: "speaker-component-1530", name: "b" },
    { imgSrc: "speaker-component-10803", name: "f" },
  ];

  return props.children({
    speakers: speakers
  });
};

export default RenderPropsComponent
