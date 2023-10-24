import Profiles from "./Components/content-five/contentFive";
import ImageFolder from "./Components/content-four/contentFour";
import Content1 from "./Components/content-one/contentOne";
import BootIcons from "./Components/content-three/contentThree";
import LargeComponent from "./Components/content-two/contentTwo";
import profile1 from "../src/Assets/profile1-icon.jpg"
import profile2 from "../src/Assets/profile2-icon.jpg"
import profile3 from "../src/Assets/profile3-icon.jpg"
import Window from "../src/Assets/window-icon.png"
import Stack from "../src/Assets/stack-icon.png"
import Terminal from "../src/Assets/terminal-icon.png"
import Phone from "../src/Assets/phone-icon.jpg"
import Code from "../src/Assets/code-icon.jpg"
import Laptop from "../src/Assets/laptop-icon.jpg"
import BottomMail from "./Components/content-six/contentSix";
import LastSection from "./Components/content-seven/contentSeven";





const textList = [
  {
    no: 1,
    heading: "Fully Responsive Design",
    details:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    way: Phone,
  },
  {
    no: 0,
    heading: "Updated For Bootstrap 5",
    details: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    way: Code,
  },
  {
    no: 1,
    heading: "Easy to Use & Customize",
    details: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    way: Laptop,
  },
]


const iconList = [
  {
    id: 1,
    title: "Fully Responsive",
    description: "This theme will look great on any device, no matter the size!",
    iconurl: Window,
  },
  {
    id: 2,
    title: "Bootstrap 5 Ready",
    description: "Featuring the latest build of the new Bootstrap 5 framework!",
    iconurl: Stack,
  },
  {
    id: 3,
    title: "Easy to Use",
    description: "Ready to use with your own content, or customize the source files!",
    iconurl: Terminal,
  },
]

const profiles = [
  {
    rand: 1,
    name: "Margaret E.",
    review: "This is fantastic! Thanks so much guys!",
    path: profile1,
  },
  {
    rand: 2,
    name: "Fred S.",
    review: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
    path: profile2,
  },
  {
    rand: 3,
    name: "Sarah W.",
    review: "Thanks so much for making these free resources available to us!",
    path: profile3,
  },
]

function App() {

  return (
    <div className="App">
      <Content1 />
      <LargeComponent />
      <BootIcons iconList={iconList}/>
      <ImageFolder textList={textList} />
      <Profiles profiles={profiles}/>
      <BottomMail />
      <LastSection />
    </div>
  );
}

export default App;
