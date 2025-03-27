import { useState, useEffect, useRef } from "react";
import { FaStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";


const testimonials = [
  {
    name: "Kaoutar M.",
    rating: 5,
    text: "Amani took care of everything while I was away. My property was spotless and perfectly maintained. A real game changer!",
    avatar: "/avatars/avatar1.png",
  },
  {
    name: "Karim B.",
    rating: 4.5,
    text: "Excellent service! Regular updates, quick interventions, and a professional team. I trust Amani completely with my home.",
    avatar: "/avatars/avatar2.png",
  },
  {
    name: "Nadia L.",
    rating: 5,
    text: "Very responsive team and high-quality services. I highly recommend Amani for any homeowner living abroad!",
    avatar: "/avatars/avatar3.png",
  },
  {
    name: "Youssef D.",
    rating: 4.5,
    text: "I needed a deep cleaning before my arrival and Amani handled everything perfectly. The house was spotless, the service was seamless. I will definitely use their à la carte services again!",
    avatar: "/avatars/avatar4.png",
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // 🔁 Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  // 👉 Swipe mobile
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const delta = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (delta > threshold) {
      nextTestimonial(); // swipe gauche
    } else if (delta < -threshold) {
      prevTestimonial(); // swipe droite
    }

    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="testimonials">
      <h2 className="testimonial-title">What Our Clients Say ?</h2>
      <p className="testimonial-subtitle">Real experiences from homeowners who trust Amani</p>

      <div className="testimonial-container">
        <FaChevronLeft className="nav-arrow left" onClick={prevTestimonial} />

        <div
          className="testimonial-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, i) => (
            <div key={i} className={`testimonial-card ${i === index ? "active" : ""}`}>
              <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <div className="testimonial-stars">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
                {testimonial.rating % 1 !== 0 && <FaStarHalfAlt className="star" />}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <FaChevronRight className="nav-arrow right" onClick={nextTestimonial} />
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
