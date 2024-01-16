import Marquee from "react-fast-marquee";
import visa from "../../src//assets/images/marquee/visa.jpg";
import paypal from "../../src//assets/images/marquee/paypal.png";
import iPay from "../../src//assets/images/marquee/iPay.png";
import masterCard from "../../src//assets/images/marquee/masterCard.jpg";

const MarqueeComp = () => {
  return (
    <div className="h-44">
      <h1 className="text-center text-4xl font-medium">Our partner</h1>
      <div>
        <Marquee
          className=""
          gradient={true}
          autoFill={true}
          pauseOnHover={true}
        >
          <img className="h-36 px-10" src={visa} alt="" />
          <img className="h-36 px-10" src={masterCard} alt="" />
          <img className="h-36 px-10" src={paypal} alt="" />
          <img className="h-36 px-10" src={iPay} alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeComp;
