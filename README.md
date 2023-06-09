# 1000 Words Site
Site to show the first 1000 words in a few languages. I want to help language learners get started by learning the 1000 most common words in their target language.

This project is the second of four projects that needs to be completed in order to receive a diploma in Software Development from The Code Institute. Required technologies are HTML5, CSS3 and JavaScript.
## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals
        As a first time user I want to
        1. Easily understand what the site is for and how to use it.
        1. Be able to choose what language I want to use.
   
    -   #### Returning Visitor Goals
        As a returning visitor I want to:
        1. track my progress in some way.
        1. to continue enjoy playing the game. 
        1. to try out new languages.


### Project Requirements
 - To build an interactive front-end site that responds to user actions. The user should engage actively by altering data and how the site displays. The development process needs to be well documented through a version controls system such as GitHub and contain HTML5, CSS3 and JavaScript.

 ### Design

*   ### Wireframes
Wireframes were mocked up using pencil project, an open source project similar to something like figma. The development is not very active, but in my opinion fills a space in terms of FOSS mock-up software. It would be great to see it get more interest. 
To download and run pencil project: 
* run `git clone https://github.com/evolus/pencil.git` in your terminal
* this project uses electron, so you need to download node.js
* navigate to the project directory in terminal and run `npm install` to install dependencies
* now run `npm start`

Wireframes can be seen here:
 
 * [Desktop](documentation/wireframes/desktop_browser.png)
 * [Phone](documentation/wireframes/mobile_browser.png)

## Features

The 1000WordsSite site consists of 2 sections: 

* The home page, at "index.html"
* The game screen at "app.html"

### Home Page

![alt text](/documentation/features/home_page.png)

The home page provides a few paragraphs on the motivation for the project and a short expatiation on how to play the game. It also has a form for the user to choose the language they want the game in. 
* Project motivations and short introduction on how to play
* Language select
* Submit button

### Game Screen 

![alt text](/documentation/features/app_page.png)

The game screen is meant to feel like a mobile app. Similar to something like AnkiDroid or Memrise. The features of the game screen occupy the whole page on mobile screens to lend to this feel. 

The app page has the following features: 
* counters for lives and for correct answers.
* card showing the word in the selected language and its english translation. The word in the selected language displays first, then on a click event the card is "fliped" to reveal its translation. 
* A text input box for the answer. The expected answer is the english translation.
* A text box for the answer. The expected answer is the english translation. 
* A submit button to check the answer. 
* A skip button that moves to the next word pair.
* A "lose animation" on the submission of the incorrect answer. 
* A "win animation" on submission of the correct answer.

### Overall site 
The site overall has minimal to no styling, this is somewhat intentional from a minimalistic point of view, as well as the aspects of the site that do have colour are more attention grabing because of the lack of colour else where. 
It also had the added benefit of saving me some time in terms of styling.

### Features yet to be implemented

* An end game screen.


## Technologies Used
* HTML, CSS and JavaScript.


## Testing

### Validator testing

[HTML of app](https://validator.w3.org/nu/?doc=https%3A%2F%2Fam505.github.io%2F1000WordsSite%2Fapp.html%3Flanguage%3DTurkish)
![alt text](/documentation/validator/validator_app_html.png)
Just one warning and one info in validator. 

[HTMl of index](https://validator.w3.org/nu/?doc=https%3A%2F%2Fam505.github.io%2F1000WordsSite%2F)

![alt text](/documentation/validator/validator_index_html.png)

No errors were found with the W3C validator for index.html.

[CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fam505.github.io%2F1000WordsSite%2Fapp.html%3Flanguage%3DTurkish&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

![alt text](/documentation/validator/validator_css.png)

No errors were found with the W3C validator for CSS.

Lighthouse

Lighthouse for app

![alt text](/documentation/lighthouse/lighthouse_app.png)

Lighthouse for index 
![alt text](/documentation/lighthouse/lighthouse_index.png)



### Testing User Stories from User Experience (UX) Section


-   #### First Time Visitor Goals
     1. Understand what the site is for.
     a.  On visiting the site the user is given a statement informing of the purpose of the site
     b. The user is instructed to choose the language they want to practice with

-   #### Returning Visitor Goals
    Returning visitors should be able to:
    1. track their progress in some way.
    a. There is no login or cookies, however users can track their progress by counting how many answers they get right, or if they need to flip the card to see the answer.
    1. New languages can be found at the beginning menu

### Further Testing


* The Website was tested on Google Chrome, FireFox, Microsoft Edge and Safari browsers.
* The website was viewed on a variety of devices such as Desktop, Laptop, motarolla G9
* Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.


### Known Bugs

* Text on the card can over flow and appear outside of the card if too long.

* Text validation needs work. Trailing white space characters are not ignored and items separated by comma are treated as separate correct answers. However if entered separated by a comma as shown on the card, they will not be accepted.

## Deployment

### Deployment method 
This will more than likely be through github pages.

To deploy to github pages follow these steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.


### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `1000Words-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code
* The implementation of the shuffle array algorithm comes from [this stackoverflow post](https://stackoverflow.com/questions/60662796/shuffle-array-in-js).

* The CSS for centring a div comes from this [w3 schools page](https://www.w3schools.com/css/css_align.asp*/).

* CSS animations from this [w3 schools page](https://www.w3schools.com/css/css3_animations.asp*/).

### Content
* Followed code institute example for readme.md 

### Media

### Acknowledgements
* My mentor Martina Terlević for help in first review of the project.