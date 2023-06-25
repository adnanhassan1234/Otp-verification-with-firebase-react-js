import React, { useEffect } from "react";
import "./home.scss";
import Header from "Components/Header";

const Home = () => {
  return (
    <>
      <Header title={"Home"} />
      <section className="home">
        <div className="container">
          <h2 className="title">What’s new</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="box p-4 mt-3">
                {/* Content goes here */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
