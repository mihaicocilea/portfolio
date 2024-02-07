import istoricAuto from "../../assets/images/portfolio/istoricAuto.png";
import audioWebsite from "../../assets/images/portfolio/audioWebsite.png";
import lampadaProduct from "../../assets/images/portfolio/lampadaProduct.png";

const projectList = [
  {
    type: "Landing Page",
    title: "istoric-auto.ro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugitlabore sequi accusamus commodi odit, hic fugiat necessitatibusexpedita optio unde quia modi consequuntur nihil aspernatur in velrecusandae saepe.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugitlabore sequi accusamus commodi odit, hic fugiat necessitatibusexpedita optio unde quia modi consequuntur nihil aspernatur in velrecusandae saepe.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugitlabore sequi accusamus commodi odit, hic fugiat necessitatibusexpedita optio unde quia modi consequuntur nihil aspernatur in velrecusandae saepe.",
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
