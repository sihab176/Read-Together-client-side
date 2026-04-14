import React from "react";
import Hero from "../../components/LandingPageItems/Hero";
import BookCategories from "../../components/LandingPageItems/BookCategories";
import AboutStats from "../../components/LandingPageItems/AboutStats";
import AddBookForm from "../../components/AddBookForm";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutStats />
      <BookCategories />
      <AddBookForm/>
    </div>
  );
};

export default HomePage;
