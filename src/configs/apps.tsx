import { appBarHeight } from "~/utils";
import type { AppsData } from "~/types";

const apps: AppsData[] = [
  {
    id: "finder",
    title: "Finder",
    desktop: true,
    width: 900,
    height: 560,
    minWidth: 600,
    minHeight: 380,
    x: -20,
    y: -20,
    img: "img/icons/finder.png",
    mobileTitle: "Files",
    mobileImg: "img/icons/folder-generic.png",
    content: <Finder />,
  },
  {
    id: "bear",
    title: "Bear",
    desktop: true,
    width: 860,
    height: 500,
    show: true,
    hideOnMobile: true,
    y: -40,
    img: "img/icons/phone.png",
    content: <Bear />,
  },
  
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    width: 1024,
    height: 700,
    minWidth: 375,
    minHeight: 200,
    x: -20,
    y: -20,
    img: "img/icons/safari.png",
    dockOnMobile: true,
    content: <Safari />,
  },
 
 
  {
    id: "github",
    title: "Github",
    desktop: false,
    hideOnMobile: true,
    img: "img/icons/github.png",
    link: "https://github.com/aakashsharma003/macOS-Portfolio",
  },
  {
    id: "spotify",
    title: "Spotify",
    desktop: true,
    width: 860,
    height: 500,
    show: false,
    hideOnMobile: true,
    y: -40,
    titlebar: "transparent",
    img: "img/icons/spotify.png",
    content: <Spotify />,
  },
  
  
  {
    id: "photos",
    title: "Photos",
    desktop: true,
    width: 820,
    height: 540,
    minWidth: 620,
    minHeight: 420,
    x: 40,
    y: -20,
    img: "img/icons/photos.png",
    content: <Photos />,
  },
 
  {
    id: "mail",
    title: "Mail",
    desktop: true,
    width: 860,
    height: 540,
    minWidth: 640,
    minHeight: 400,
    x: 20,
    y: -10,
    img: "img/icons/mail.png",
    content: <Mail />,
  },
   
 
];

export default apps;