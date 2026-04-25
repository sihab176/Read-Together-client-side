import React from "react";
import Hero from "../../components/LandingPageItems/Hero";
import BookCategories from "../../components/LandingPageItems/BookCategories";
import AboutStats from "../../components/LandingPageItems/AboutStats";
import BookGrid from "../../components/LandingPageItems/BookGrid";
import WhySection from "../../components/WhySection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutStats />
      <BookGrid />
      <BookCategories />
      <WhySection/>
    </div>
  );
};

export default HomePage;
