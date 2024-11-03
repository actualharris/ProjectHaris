import React, { Fragment } from "react";
import Navigation from "./Navigation";
import SocialsBody from "./SocialsBody";
import Profile from "./Profile";

const Socials = ()=>{
    return (
        <Fragment>


        <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <Profile/>
        <div className="col-lg-6 d-flex flex-column align-items-center text-center">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 heading">Say Hello!</h1>
            <p className="lead describe">Looking to connect? You can find me on various platforms! Follow me on LinkedIn, and feel free to reach out via email. I also showcase my coding projects on GitHub. If you have any <span className="imp">job opportunities</span>, please reach out — I'd love to hear from you!</p>
            <Navigation/>

<hr/>

            
          </div>
        </div>

        <SocialsBody/>
</div>
</Fragment>
    )
}
export default Socials;