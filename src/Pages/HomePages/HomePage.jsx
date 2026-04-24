import React from "react";
import Hero from "../../components/LandingPageItems/Hero";
import BookCategories from "../../components/LandingPageItems/BookCategories";
import AboutStats from "../../components/LandingPageItems/AboutStats";
import BookGrid from "../../components/LandingPageItems/BookGrid";
import BookDetailsPage from "../BookDetailsPage.jsx/BookDetailsPage";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutStats />
      <BookGrid/>
      <BookCategories />
      <BookDetailsPage />

    </div>
  );
};

export default HomePage;
