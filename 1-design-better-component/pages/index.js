import React from 'react';
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import SpeakerSearchBar from "../src/components/SpeakerSearchBar";
import SpeakerContext from '../src/Context/SpeakerContext';
import Speakers from "./speakers";

function Page() {
  const speakers = [
    { imgSrc: "speaker-component-1124", name: "t" },
    { imgSrc: "speaker-component-1530", name: "b" },
    { imgSrc: "speaker-component-10803", name: "f" },
  ];
  return (
    <div>
      <Header />
      <h1>Hello from design better component</h1>
      <Menu />
      <SpeakerContext.Provider value={speakers}>
        <Speakers />
        <SpeakerSearchBar />
      </SpeakerContext.Provider>
    </div>
  );
}

export default Page;
