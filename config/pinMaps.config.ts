import { PageElement } from "./site.config";

const pinMapsPageElements: PageElement[] = [
    {
      type: 'markdownDoc',
      config: 'pinMaps.header.md'
    },
    {
      type: 'images',
      config: [
        "images/pinMaps.jpg"
      ]
    }, 
    {
        type: 'markdownDoc',
        config: 'pinMaps.main.md'
    },
    {
        type: 'spacer',
        config: 15
    }
];

export default pinMapsPageElements;