# Yahoo News Application

This is a simple client-side app designed to show news articles.

The code is here https://github.com/robmkennedy/yahoo-news

The app is hosted here https://robmkennedy.github.io/yahoo-news

## Framework



## App Layout

The app provides two possible routes
- Today's News `/today`
- About This App `/about`.

### Today's News
- The **Headlines** carousel shows news loaded from existing AOL content.
- **Stories for You** displays articles from the local story-news.json file.
- The **Read More** section displays articles from the local more-news.json file.
- The **Display Browser Configuration** button shows what experiential Web APIs are supported.
- The **Registration** form imitates allowing the user to sign up for a newsletter.

### About This App
- The **About Application** page is used to display this documentation for easier access.


## Features

### The Headline Carousel



### Stories just for you

### More articles to read

### Register for newsletter


## Source File Structure
- Related Typescript and CSS files are located beside each other.
- Common components, types, and React hooks shared throughout the app are in `src/common`.
- Files specific to a particular feature are co-located in their respective folders in `src/features`.
- Styling files are in `src/styles` and seperated into files that represent their effects.
- A separate english dictionary file is in `src/i18n/locales` even though this is the only supported locale.