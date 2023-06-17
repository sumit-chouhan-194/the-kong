import React from "react";
import preloder_img from "../images/png/footer_kong.png";
const Preloader = () => {
  setTimeout(() => {
    document.querySelector(".none").style.display = "none";
    document.body.classList.remove("overflow_hidden");
  }, 2000);
  return (
    <section className="bg-black">
      
      <div className="none">
        
        <div className="bg-black text-center d-flex align-items-center justify-content-center start-0 top-0 b w-100 z_index_100 min-vh-100 position-fixed ">
          
          <img
            src={preloder_img}
            alt="preloder_kong"
            className="d-flex align-items-center justify-content-center animation_preloader"
          />
        </div>
      </div>
    </section>
  );
};
export default Preloader;
