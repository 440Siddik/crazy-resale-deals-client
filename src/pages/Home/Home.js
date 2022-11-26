import React from 'react';
import Banner from './Banner/Banner';
import CategorySection from './Categories/CategorySection';
import ExtraSection from './ExtraSection/ExtraSection';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategorySection></CategorySection>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;