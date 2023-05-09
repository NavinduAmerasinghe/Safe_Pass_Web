import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-sm-3">
            <h2>Not Authorized !</h2>
            <form>
              <div className="form-group"></div>
              {/* <button onClick={filterProduct} type='submit' className='btn btn-primary mt-3'>Filter</button> */}
            </form>
          </div>
          <div className="col-sm-9">
            <div className="row"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
