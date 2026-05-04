import React from "react";
import Hero from "../../components/LandingPageItems/Hero";
import BookCategories from "../../components/LandingPageItems/BookCategories";
import AboutStats from "../../components/LandingPageItems/AboutStats";
import BookGrid from "../../components/LandingPageItems/BookGrid";
import WhySection from "../../components/WhySection";
import BookCarousel from "../../components/BookCarousel";
import AuthorSection from "../../components/LandingPageItems/AuthorSection";
import SummerReadingSale from "../../components/LandingPageItems/SummerReadingSale";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutStats />
      <BookGrid />
      {/* <BookCategories /> */}
      <AuthorSection />
      <SummerReadingSale />
      <WhySection />
      
      {/* <BookCarousel /> */}
    </div>
  );
};

export default HomePage;
