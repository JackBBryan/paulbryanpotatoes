//Testimonial Data
const testimonials = [
    {
      name: "Lorem ipsum",
      job: "Lorem ipsum, dolor",
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png?w=826&t=st=1679247245~exp=1679247845~hmac=3ea85ef96792a9773e57c0e8f3f84a8f0e7bb5c673f2fefb96cce0a3cccd4e10",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, facilis praesentium? Distinctio nostrum voluptatibus maxime vitae qui alias magnam temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, facilis praesentium? Distinctio nostrum voluptatibus maxime vitae qui alias magnam temporibus.",
    },
    {
      name: "Lorem ipsum",
      job: "Lorem ipsum, dolor",
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png?w=826&t=st=1679247245~exp=1679247845~hmac=3ea85ef96792a9773e57c0e8f3f84a8f0e7bb5c673f2fefb96cce0a3cccd4e10",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, facilis praesentium? Distinctio nostrum voluptatibus maxime vitae qui alias magnam temporibus.",
    },
    {
      name: "Lorem ipsum",
      job: "Lorem ipsum, dolor",
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png?w=826&t=st=1679247245~exp=1679247845~hmac=3ea85ef96792a9773e57c0e8f3f84a8f0e7bb5c673f2fefb96cce0a3cccd4e10",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, facilis praesentium? Distinctio nostrum voluptatibus maxime vitae qui alias magnam temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, facilis praesentium? Distinctio nostrum voluptatibus maxime vitae qui alias magnam temporibus.",
    },
    {
      name: "Lorem ipsum",
      job: "Lorem ipsum, dolor",
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png?w=826&t=st=1679247245~exp=1679247845~hmac=3ea85ef96792a9773e57c0e8f3f84a8f0e7bb5c673f2fefb96cce0a3cccd4e10",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, facilis praesentium? Distinctio nostrum voluptatibus maxime vitae qui alias magnam temporibus.",
    },
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
  };
  window.onload = displayTestimonial;