# Font Selector

## Technologies
The technologies used are:
- React
- npm

## Description
A Google Fonts style app in which a number of different fonts are displayed and the user can input some sample text which will be shown in each font as well as selecting the font size.

## Functionality

The App.js file imports 2 components:
- FontCard
- FontSize

### Font Cards

Props are passed down to the Font Cards so that the same layout can be used for all cards. The information for each card is stored in a JSON file and is passed to the card when it is mapped in App.js.

### Sample Text

The input field for the user's sample text has an onChange handler and the useState hook is used to take the value of the input and pass it down to each of the Font Cards as a prop.

### Font Size

Since the FontSize component is a child of App, I had to lift the state of the font size value up to the App in order for it to be used as the font size of the sample text. The handleFontSize function is therefore declared in the App component and passed as a prop to FontSize. I could then use the value that the user inputs within the Font Cards by passing it as an inline style prop. 

## Next Steps
Work on a range slider for selecting the font size rather than a text input field.