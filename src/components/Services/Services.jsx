import "./Services.css";

export const Services = () => {
  return (
    <div id="ServicesDiv">
      <p id="servicesText">SERVICES</p>
      <div id="ServicesCap">
        <div id="capDiv">
          <p id="capBigText">Our Capibilities</p>
          <p id="capSmallText">
            We will bring the breathe of our experience and industry knowledge
            to help you succeed
          </p>
        </div>
        <div className="smallService">
          <p className="bigText">Consult</p>
          <p className="smallText">
            Lorem,  elit. Fugiat doloribus debitis dolor sit amet eos recusandae repudiandae animi deleniti iste omnis et aspernatur!
          </p>
        </div>
        <div className="smallService">
          <p className="bigText">Create</p>
          <p className="smallText">
            Lorem ipsum dolor sit amet elit. In, ipsam
            ipsum! Distinctio dolor sit amet.
          </p>
        </div>
        <div className="smallService newService">
          <p className="bigText">Collaborate</p>
          <p className="smallText">
            Lorem ipsum dolor adipisicing elit. Aut error
            nostrum perspiciatis dolor sit amet
          </p>
        </div>
      </div>
    </div>
  );
};
