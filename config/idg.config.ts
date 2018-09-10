import { PageElement } from "./site.config";

const idgPageElements: PageElement[] = [
    {
      type: 'markdownDoc',
      config: 'idg.header.md'
    },
    {
      type: 'images',
      config: [
        "images/IDGsite.png"
      ]
    },
    {
      type: 'markdownDoc',
      config: 'idg.main.md'
    },
    {
      type: 'spacer',
      config: 15
    }
];

export default idgPageElements;