import istoricAuto from "../../assets/images/portfolio/istoricAuto.png";
import audioWebsite from "../../assets/images/portfolio/audioWebsite.png";
import lampadaProduct from "../../assets/images/portfolio/lampadaProduct.png";

const projectList = [
  {
    type: "Landing Page",
    title: "istoric-auto.ro",
    description: `I developed a landing page for an affiliate
      marketing collaborations with CarVertical.com . The landing page was designed as a car VIN checker to redirect and promote users to Carvertical.com, using HTML, CSS, BootStrap and JavaScript.`,
    image: istoricAuto,
    techstack: [
      { name: "html5", text: "HTML" },
      { name: "css3", text: "CSS" },
      { name: "js", text: "Javascript" },
      { name: "bootstrap5", text: "Bootstrap" },
    ],
    github: "https://github.com/mihaicocilea/istoric-auto.ro",
  },
  {
    type: "React - Product & Order Page",
    title: "trending-zone.com",
    description: `I developed a landing page built in React, using TailWindCSS and
      Material UI and Facebook Pixel for Facebook Ads.
      The site was made to promote a product and present it's features. It is
      responsive and it's focused on the mobile user experience.`,
    image: lampadaProduct,
    techstack: [
      { name: "html5", text: "HTML" },
      { name: "reactjs", text: "React" },
      { name: "npm", text: "NPM" },
      { name: "tailwind", text: "Tailwind" },
      { name: "materialui", text: "MaterialUi" },
    ],
    github: "https://github.com/mihaicocilea/product-landing-page",
  },
  {
    type: "Landing Page",
    title: "boxe-difuzoare.ro",
    description: `I developed a landing page for an affiliate
      marketing collaborations with soundhouse.ro! The
      landing page was designed to promote the respective products and
      services using HTML, CSS, BootStrap, and JavaScript.`,
    image: audioWebsite,
    techstack: [
      { name: "html5", text: "HTML" },
      { name: "css3", text: "CSS" },
      { name: "js", text: "Javascript" },
      { name: "bootstrap5", text: "Bootstrap" },
    ],
    github: "https://github.com/mihaicocilea/audio-website",
  },
];
export default projectList;
