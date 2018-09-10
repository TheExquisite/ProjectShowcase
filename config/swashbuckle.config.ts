import { PageElement } from "./site.config";

const swashbucklePageElements: PageElement[] = [
    {
      type: 'markdownDoc',
      config: 'swashbuckle.header.md'
    },
    {
      type: 'images',
      config: [
        "images/swashbuckle.png"
      ]
    },
    {
      type: 'markdownDoc',
      config: 'swashbuckle.main.md'
    },
    {
      type: 'spacer',
      config: 15
    }
];

export default swashbucklePageElements;