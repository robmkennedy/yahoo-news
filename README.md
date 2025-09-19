This is a simple client-side app designed to show news articles.

The code is at [https://github.com/robmkennedy/yahoo-news](https://github.com/robmkennedy/yahoo-news)

The app is hosted at [https://robmkennedy.github.io/yahoo-news](https://robmkennedy.github.io/yahoo-news)

## Framework

- The app is built using React and the Vite framework.
- All components are built with vanilla Typescript and CSS modules.



## App Layout

The app provides two possible routes

### Today's News `/today`
- Provides five distinct features related to news (see below).

### About This App `/about`
- Shows a panel containing this documentation for easier access.


## Features

The Today's News page provides the following features

### Headline Carousel

* Shows a carousel of news loaded from existing AOL content.
* Uses the common Carousel component to display a carousel of headlines.
* Uses a react-query custom hook to fetch the news data.
* Displays separate components to handle the loading and error states.

### Stories for You

* Displays articles from the local **`story-news.json`** file.
* Shows a grid of "Stories for You" inside a Card component.
* Each article has a vertical layout and is located below the carousel.
* Uses a react-query custom hook to fetch the news data.
* Displays separate components to handle the loading and error states.


### Browser Information

* Displays information regarding the current browser.
* The first section displays the UserAgent string.
* The second section shows a grid of experimental Web APIs and whether they are supported.
* Contains the button to open the dialog and the dialog itself.
* Maintains a React state to indicate whether the dialog is opened or closed.
* Utilises a common ModalDialog component.


### More Articles

* Displays articles from the local **`more-news.json`** file.
* Shows a list of "Read More" articles inside a Card component.
* Each article has a horizontal layout and is located in the sidebar.
* Uses a react-query custom hook to fetch the news data.
* Displays separate components to handle the loading and error states.

### Registration

* A form that allows the user to sign up for a newsletter.
* The form provides a text input for a user to enter their email.
* When the signup button is clicked, the email address is validated and an appropriate message displayed.
* The form mimics actual signup by also providing a message if the email already exists.


## Source File Structure
- Related Typescript and CSS files are located beside each other.
- Common components, types, and React hooks shared throughout the app are in **`src/common`**.
- Files specific to a particular feature are co-located in their respective folders in **`src/features`**.
- Styling files are in **`src/styles`** and seperated into files that represent their effects.
- A separate english dictionary file is in **`src/i18n/locales`** even though this is the only supported locale.