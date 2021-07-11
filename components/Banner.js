import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />{" "}
      <Carousel
        autoPlay
        dynamicHeight
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={6000}
      >
        <div>
          <img
            loading="lazy"
            src="https://i.ytimg.com/vi/XdLJoG2CvWI/maxresdefault.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://www.lapassionvoutee.com/wp-content/uploads/2018/06/Fashionable-African-Dresses-2.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://i.ytimg.com/vi/KH1azFVVJKM/maxresdefault.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://gcfrng.com/wp-content/uploads/2021/02/Best-Senator-Native-Wears-For-Stylish-African-Men.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
