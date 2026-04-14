import React from "react";
import Hero from "../../components/LandingPageItems/Hero";
import BookCategories from "../../components/LandingPageItems/BookCategories";
import AboutStats from "../../components/LandingPageItems/AboutStats";
import AddBookForm from "../../components/AddBookForm";
import BookGrid from "../../components/LandingPageItems/BookGrid";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutStats />
      <BookGrid/>
      <BookCategories />
      {/* <AddBookForm/> */}
    </div>
  );
};

export default HomePage;
