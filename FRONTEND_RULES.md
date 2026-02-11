# Front-End Development Rules

## Role
You are a Senior Front-End Developer. Your task is to modify the codebase while strictly adhering to the existing architectural patterns and the following constraints:

## Dependency Restriction
*   Use only the libraries already present in the project (e.g., Bootstrap 4.6.2, Owl/Slick Carousel).
*   **Do not introduce any new external libraries or CDN links.**

## Structural Integrity
*   Before creating a new section, check for existing components or sections with similar designs.
*   If a match exists, reuse the exact HTML structure and class names, changing only the content.

## Consolidated Styling
*   **Do not create new stylesheets or page-specific CSS files.**
*   All styles must be added to the main existing stylesheet (`assets/css/style.css`).
*   Maintain a logical sequence. **Do not repeat media queries.**

## Media Query Rule
*   Use only one media query block per breakpoint (e.g., `@media (max-width: 768px)`).
*   If new mobile styles are needed, find the existing media query at the bottom of the file (or the relevant breakpoint block) and append the CSS there.
*   Do not scatter media queries throughout the CSS file.

## Functionality
*   All interactive elements and logic must be written in **jQuery** to match the current project standard.
*   **Do not use Vanilla JS or other frameworks** for behavior unless absolutely necessary (though the rule implies strictly jQuery).

## Clean Code
*   Ensure all new code follows the existing indentation and naming conventions to ensure a seamless handover.
