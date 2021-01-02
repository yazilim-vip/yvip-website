const MEMBERS = [
  {
    name: "Mehmet Arif Emre Şen",
    title: "Major Contributor",
    imageSource:
      "https://avatars2.githubusercontent.com/u/17517090?s=460&u=a0e442b6913f827d2e51e00abe143b2dbc375f33&v=4",
    socialLinks: [
      {
        url: "https://maemresen.github.io",
        icon: "icofont-web",
        title: "website",
      },
      {
        url: "https://www.linkedin.com/in/maemresen",
        icon: "fab fa-linkedin",
      },
      {
        url: "https://github.com/maemresen",
        icon: "fab fa-github",
      },
      { url: "https://gitlab.com/emresen", icon: "fab fa-gitlab" },
    ],
  },
  {
    name: "Burak Erkan",
    title: "Major Contributor",
    imageSource: "/assets/img/team/burak.jpeg",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/burak-erkan",
        icon: "fab fa-linkedin",
      },
    ],
  },
  {
    name: "Mustafa Arif Sisman",
    title: "Major Contributor",
    imageSource: "/assets/img/team/arif.jpeg",
    socialLinks: [
      {
        url: "https://gitlab.com/arifsisman",
        icon: "fab fa-gitlab",
      },
      {
        url: "https://github.com/arifsisman",
        icon: "fab fa-github",
      },
      {
        url: "https://medium.com/@arifsisman",
        icon: "fab fa-medium",
      },
      {
        url: "https://www.linkedin.com/in/mustafaarifsisman",
        icon: "fab fa-linkedin",
      },
      {
        url: "https://arifsisman.github.io/",
        icon: "fas fa-file",
        title: "CV",
      },
    ],
  },
];

const PROJECTS = [
  {
    title: "Play2Gether",
    description: `
      The Play2Gether app is a music listening platform to listen to Spotify 
      with your friends or other people. Listen to the same song at the same time 
      with other people, queue and vote the songs, chat together, discover and share new music!
      `,
    imageSource: "assets/img/portfolio/portfolio-1.jpg",
    link: {
      url:
        "https://play.google.com/store/apps/details?id=vip.yazilim.p2g.android&hl=en&gl=US",
      title: "PlayStore",
      icon: "fab fa-android",
    },
    labels: ["spotify", "android", "mobile-app"],
  },
  {
    title: "Spring VIP",
    description: `
        A Java Spring Library that provides helpful generic and utility classes. 
        Some of features provided by library are generic CRUD Service and Rest controllers. 
        See more from documentation
      `,
    imageSource: "assets/img/portfolio/portfolio-3.jpg",
    link: {
      url: "https://springvip.yazilim.vip",
      title: "Documentation",
      icon: "fab fa-java",
    },
    labels: ["java", "spring boot", "library"],
  },
  {
    title: "TimeCountdown",
    description: `
        A visual studio code extension and this extension 
        takes care of the time countdown tasks. It is very easy to use,
        just type the time to count down in an allowed format, and 
        the application will count down the given time by 1 sec in an interval.
      `,
    imageSource: "assets/img/portfolio/portfolio-2.jpg",
    link: {
      url:
        "https://marketplace.visualstudio.com/items?itemName=yazilim-vip.time-countdown",
      title: "Home Page",
      icon: "fab fa-microsoft",
    },
    labels: ["vscode extension"],
  },
  {
    title: "maescript",
    description:
      "'Contains useful functions with autocomplete feauteres and comes with useful set of shell scripts",
    imageSource: "assets/img/portfolio/portfolio-3.jpg",
    link: {
      url: "https://yazilim-vip.github.io/maescript",
      title: "Documentation",
      icon: "fas fa-terminal",
    },
    labels: ["shell", "utils"],
  },
];

const YVIP_LINK_LIST = [
  { url: "", icon: "fab fa-discord" },
  { url: "https://medium.com/yazilim-vip", icon: "fab fa-docker" },
  {
    url: "https://hub.docker.com/orgs/yazilimvip/repositories",
    icon: "fab fa-medium",
  },
  { url: "https://github.com/yazilim-vip", icon: "fab fa-github" },
  {
    url: "https://www.linkedin.com/company/yazilimvip",
    icon: "fab fa-linkedin",
  },
];

const SECTION_LIST = [
  { id: "portfolio", name: "Portfolio" },
  { id: "team", name: "Team" },
];

const INFO_MAIL = "info@yazilim.vip";
const WEBSITE_TITLE = "Yazilim VIP";

const CAROUSEL_TITLE = "Welcome to <span>Yazilim VIP</span>";
const CAROUSEL_PARAGRAPH = `To keep this platform open to everyone who is competent
  and willing to share what we call an open source world.
  A platform aimed at presenting our competencies to the
  open source world without waiting for a response.`;
const CAROUSEL_IMAGE = "assets/img/slide/birds.jpg";
