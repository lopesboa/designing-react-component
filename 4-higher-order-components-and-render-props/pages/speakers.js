import { Layout, Speakers } from "../src/components";

export default function Page() {
  return (
    <div>
      <Layout>
        {/* <SpeakerSearchBar /> */}
        <Speakers bgColor="bg-gray-500" />
      </Layout>
    </div>
  );
}
