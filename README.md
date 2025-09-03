This is a simple client-side app designed to show news articles.

The code is at [https://github.com/robmkennedy/yahoo-news](https://github.com/robmkennedy/yahoo-news)

The app is hosted at [https://robmkennedy.github.io/yahoo-news](https://robmkennedy.github.io/yahoo-news)

## Framework

- The app is built using React and the Vite framework.
- All components are built with vanilla Typescript and CSS modules.


## App Layout

The app provides two possible routes

### Today's News `/today`
- Provides five distinct features related to news articles (see below).

### About This App `/about`
- Shows a panel containing this documentation for easier access.


## Features

The Today's News page provides five distinct features

### Headline Carousel

* Shows a carousel of news loaded from existing AOL content.
* 

### Stories for You

* Displays articles from the local story-news.json file.


### Browser Information

* Mimics allowing the user to sign up for a newsletter
*

### More Articles

* Displays articles from the local more-news.json file.
*

### Registration

* Mimics allowing the user to sign up for a newsletter
*


## Source File Structure
- Related Typescript and CSS files are located beside each other.
- Common components, types, and React hooks shared throughout the app are in `src/common`.
- Files specific to a particular feature are co-located in their respective folders in `src/features`.
- Styling files are in `src/styles` and seperated into files that represent their effects.
- A separate english dictionary file is in `src/i18n/locales` even though this is the only supported locale.