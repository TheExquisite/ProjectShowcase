import { PageElement } from "./site.config";

const radioAppPageElements: PageElement[] = [
    {
      type: 'markdownDoc',
      config: 'radioApp.header.md'
    },
    {
      type: 'images',
      config: [
        "images/radioApp.PNG"
      ]
    },
    {
        type: 'markdownDoc',
        config: 'radioApp.main.md'
    },
    {
        type: 'spacer',
        config: 15
    }
];

export default radioAppPageElements;