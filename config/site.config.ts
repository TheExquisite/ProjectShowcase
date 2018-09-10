import homePageElements from "./home.config";
//import infoPageElements from "./info.config";
import QUTMSPageElements from "./QUTMS.config";
import idgPageElements from "./idg.config";
import swashbucklePageElements from "./swashbuckle.config";
import radioAppPageElements from "./radioApp.config";
import pinMapsPageElements from "./pinMaps.config";
import thisProjectPageElements from "./thisProject.config";

const siteConfig: Page[] = [
  {
    id: "homePage",
    title: "Home",
    path: "/home",
    pageElements: homePageElements   
  },
  {
    id: "QUTMSPage",
    title: "Motorsports App",
    path: "/QUTMSapp",
    pageElements: QUTMSPageElements     
  },
  {
    id: "IDGpage",
    title: "Impact Dynamics Global Site",
    path: "/IDGsite",
    pageElements: idgPageElements     
  },
  {
    id: "SwashbucklePage",
    title: "Swashbuckle",
    path: "/SwashBuckle",
    pageElements: swashbucklePageElements     
  },
  {
    id: "pinMaps",
    title: "Pin Maps",
    path: "/pinMaps",
    pageElements: pinMapsPageElements     
  },
  {
    id: "radioApp",
    title: "Radio App",
    path: "/radioApp",
    pageElements: radioAppPageElements     
  },
  {
    id: "thisProject",
    title: "This Website",
    path: "/thisProject",
    pageElements: thisProjectPageElements     
  }
]

export default siteConfig;

interface Page {
  id: string;
  title: string;
  path: string;
  pageElements: any;
}

export interface PageElement {
  type: string;
  config?: any;
}