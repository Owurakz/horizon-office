import React from "react";
import Items from "./items";

const Body = () => {
  return (
    <div>
      <h1 className="h1 text-center mt-4">Plans</h1>
      <div className="container-fluid">
        <div className="row pt-3 pl-5 pr-5 mr-5 ml-5 mb-5">
          <Items
            imgSrc="../images/home1.jpg"
            title="Virtual Offices"
            text="Our virtual offices allow your business to get our location
                  address, phone services and also you become a member of our
                  community with benefits such as access to our meeting rooms."
          />
          <Items
            imgSrc="../images/home2.jpg"
            title="Customized Offices"
            text=" Our customized offices offer a great location for your
                  business and you can customize your office to suit your
                  preferences. Also, you become a member of our community with
                  benefits such as access to our meeting rooms."
          />
          <Items
            imgSrc="../images/home4.jpg"
            title="Serviced Offices"
            text="Our serviced offices offer a great location for your business
                  and we provide services such as internet, utilities and offers
                  from our partners. Also, you become a member of our community
                  with benefits such as access to our meeting rooms."
          />
          <Items
            imgSrc="../images/home3.jpg"
            title="Meeting Rooms"
            text="Our meeting rooms offer a great location for your meeting with
                  your clients or business partners. We provide presentation
                  equipment and coffee. Also, you become a member of our
                  community with benefits such as access to our meeting rooms."
          />
        </div>
      </div>
    </div>
  );
};
export default Body;
