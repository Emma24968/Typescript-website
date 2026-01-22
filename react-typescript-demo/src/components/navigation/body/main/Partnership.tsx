import { ImageSlide } from "./Carousel/ImageSlide";
import { Slider } from "./Slider";
import { Team } from "./Team";
import { Testimonial } from "./Testimonial";

export const Partnership = () => {
  return (
    <div className="bg-white rounded-2xl h-[70rem] p-8">
      <Slider />
      <Testimonial />
      <ImageSlide />
      <Slider />
      <Team />
    </div>
  );
};
