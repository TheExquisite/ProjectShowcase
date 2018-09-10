import { PageElement } from "./site.config";

const thisProjectPageElements: PageElement[] = [
    {
      type: 'markdownDoc',
      config: 'thisProject.header.md'
    },
    {
      type: 'images',
      config: [
        "images/thisProject.PNG"
      ]
    },
    {
        type: 'markdownDoc',
        config: 'thisProject.main.md'
    },
    {
        type: 'spacer',
        config: 15
      }
];

export default thisProjectPageElements;