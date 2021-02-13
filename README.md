# Font Selector

## Technologies
The technologies used are:
- React
- npm
- bootstrap

## Description
A Google Fonts style app in which a number of different fonts are displayed and the user can input some sample text which will be shown in each font as well as selecting the font size.

## Functionality

The App.js file imports 1 component:
- FontCard

### Font Cards

Props are passed down to the Font Cards so that the same layout can be used for all cards. The information for each card is stored in a JSON file and is passed to the card when it is mapped in App.js.

### Sample Text

The input field for the user's sample text has an onChange handler and the useState hook is used to take the value of the input and pass it down to each of the Font Cards as a prop.

### Font Size

The font size of the sample text is determined by a Bootstrap range slider. Again, the useState hook is used to get the range slider's current value and pass it down to resize the sample text.