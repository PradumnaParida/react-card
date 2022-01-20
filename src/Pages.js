import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Bpages.css";
import "./card.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

import image1 from "./img2/download (1).jpeg";
import image2 from "./img2/download (2).jpeg";
import image3 from "./img2/download (3).jpeg";
import image4 from "./img2/download (4).jpeg";
import image5 from "./img2/download.jpeg";
import image6 from "./img2/download (5).jpeg";

const cards = [
  {
    id: 1,
    title: "Chinese Restaurant",
    image: image1,
    url: "https://www.tripadvisor.com/Restaurants-g304551-c11-New_Delhi_National_Capital_Territory_of_Delhi.html",
  },
  {
    id: 2,
    title: "Mumbai Restaurant",
    image: image2,
    url: "https://www.tripadvisor.in/Restaurants-g304554-Mumbai_Maharashtra.html",
  },
  {
    id: 3,
    title: "Kolkata Restaurant",
    image: image3,
    url: "https://www.tripadvisor.in/Restaurants-g304558-Kolkata_Calcutta_Kolkata_District_West_Bengal.html",
  },
  {
    id: 4,
    title: "Delhi Restaurant",
    image: image4,
    url: "https://www.tripadvisor.in/Restaurants-g304551-New_Delhi_National_Capital_Territory_of_Delhi.html",
  },
  {
    id: 5,
    title: "Italian Restaurant",
    image: image5,
    url: "https://peaklife.in/the-10-best-italian-restaurants-in-india/",
  },
  {
    id: 6,
    title: "Shimla Restaurant",
    image: image6,
    url: "https://www.tripadvisor.in/Restaurants-g304552-Shimla_Shimla_District_Himachal_Pradesh.html",
  },
];

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const Pages = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <div style={{ width: "80%" }}>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToShow={4}
        >
          {cards.map(({ title, image, url, id }) => (
            <div className="col-md-4" key={id}>
              <Card imageSource={image} title={title} url={url} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ imageSource, title, text, url }) => {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-primary">
          Welcome to {title} and enjoy delicious food & have a good time at one
          of our amazing restaurants.
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-1"
          rel="noreferrer"
          style={{ backgroundColor: "orange" }}
        >
          Go to {title}
        </a>
      </div>
    </div>
  );
};

export default Pages;
