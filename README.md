# 1000WordsSite
Site to show the first 1000 words in a few languages
## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals
        First time users should be able to:
        1. Understand what the site is for.
        1. Choose what language they want to use.

    -   #### Returning Visitor Goals
        Returning visitors should be able to:
        1. track their progress in some way.

    -   #### Frequent User Goals

-   ### Design

*   ### Wireframes
Wireframes were mocked up using pencil project, an open source project similar to something like figma. The develpment is not very active, but in my opinon fills a space in terms of FOSS mockup software. It would be great to see it get more interest. 
To download and run pencil project: 
* run `git clone https://github.com/evolus/pencil.git` in your terminal
* this project uses electron, so you need to download node.js
* navigate to the project directory in terminal and run `npm install` to install dependancies
* now run `npm start`

Wirefames can be seen here:
 * [Desktop](documentation/wireframes/desktop_browser.png)
 * [Phone](documentation/wireframes/mobile_browser.png)

## Features
* responsive on all devices
* Interactive elements

## Technologies Used
* html, css and javascript.

### Languages Used

* html, css and javascript.

### Frameworks, Libraries & Programs Used

## Testing

### Testing User Stories from User Experience (UX) Section


-   #### First Time Visitor Goals
     1. Understand what the site is for.
     a. On visiting the site the user is given a statement infoming of the purpose of the site
     b.The user is instructed to choose the language they want to practaice with

-   #### Returning Visitor Goals
    Returning visitors should be able to:
    1. track their progress in some way.
    a. There is no login or cookies, however users can track their progress by counting how many answers they get right, or if they need to flip the card to see the answer.

-   #### Frequent User Goals

### Further Testing


    * The Website was tested on Google Chrome, FireFox, Microsoft Edge and Safari browsers.
    * The website was viewed on a variety of devices such as Desktop, Laptop, motarolla G9
    * Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.


### Known Bugs

* Text on the card can over flow and appear outside of the card if too long.

* Text validation needs work. Trailing whitespace charecters are not ignored and items seperated by comma are treated as seperate correct answers. However if entered seperated by a comma as shown on the card, they will not be accepted.

## Deployment

### Deployment method 
This will more than likey be through github pages.

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
* The implementation of the suffle array algorithm comes from [this stackoverflow post](https://stackoverflow.com/questions/60662796/shuffle-array-in-js).

* The css for centering a div comes from this [w3 schools page](https://www.w3schools.com/css/css_align.asp*/).

* css animations from this [w3 schools page](https://www.w3schools.com/css/css3_animations.asp*/).
### Content

### Media

### Acknowledgements