import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Working with this team was an exceptional experience. Their technical expertise, attention to detail, and commitment to delivering high-quality solutions exceeded our expectations",
    quote: `From the initial consultation to the final deployment, every step was handled with professionalism. The final MERN Stack application not only fulfilled our requirements but also impressed our stakeholders. Highly recommended!`,
    name: "Fayaz Ahmad",
    designation: "Managing Director, BoxSurprise.pk",
  },
  {
    message:
      "Their expertise in UI/UX design helped us transform our digital presence and improve user engagement.",
    quote: `The team demonstrated a deep understanding of our requirements and delivered a solution that was both visually appealing and highly functional. Communication was clear throughout the project.`,
    name: "Ali Haider",
    designation: "COO, XYZ Company",
  },
  {
    message:
      "Professional, reliable, and creative—everything you want in a development partner.",
    quote: `They delivered our project on time and went above and beyond to ensure our satisfaction. The new features have made a significant difference for our users. We look forward to working together again.`,
    name: "Elon Max",
    designation: "Managing Director, KFC Company",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
