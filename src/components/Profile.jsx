import React, { Fragment } from "react";


const Profile = ()=>{
    return (
        <Fragment>
                    <div className="col-10 col-sm-8 col-lg-6 mx-auto">
                        <img 
                            src= 'images/main.png'
                            className="d-block mx-lg-auto img-fluid" 
                            alt="image" 
                            style={{ width: "400px", height: "auto" }} 
                            loading="lazy" 
                        />
                    </div>
        </Fragment>
        
    )
}

export default Profile;