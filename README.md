# Bourbon-Chef
### A Bourbon, Bitters, Neat and Refills Based Web App Build System

#### About
The Bourbon-Chef workflow is based on some experimenting I did in the [underscores-boilerplate](https://github.com/Surfing-Chef/underscores-boilerplate/wiki) repository.  Much of the content in that wiki pertains to the use of WordPress and its Underscores theme.  As I started working on [Surfing-Chef-4.0](https://github.com/Surfing-Chef/underscores-boilerplate/tree/Surfing-Chef-4.0), I realized that Bourbon and and its various ingredients allowed for a great build system.  

The mixin library that is **[Bourbon](http://bourbon.io/)** combines with the grid framework of **[Neat](http://neat.bourbon.io/)** to give Bourbon-Chef its *Sass-y* flexibility. Adding **[Bitters'](http://bitters.bourbon.io/)** scaffold styles, variables and structure gives a consistant feel to the project, while **[Refills](http://refills.bourbon.io/)** contributes reliable components and patterns built with both **Bourbon** and **Neat**.  The Gulp toolkit automates **Bourbon-Chef's** ingredients, allowing for a front end development workflow focused more on design and content.  

#### Installation and Setup
Basic knowledge of Git and Github, CSS, SASS, Gulp, and the command terminal are essential to the setup process.  

1. Bourbon-Chef requires that [Ruby](http://rubyinstaller.org/) is installed on your machine.  Setup [Ruby, Sass and Bourbon](https://github.com/Surfing-Chef/Bourbon/wiki/Ruby-and-Bourbon).
2. [Create a Bourbon Project](https://github.com/Surfing-Chef/Bourbon/wiki/Create-a-Bourbon-Project) is created
3. Running the following command in your terminal, from within the ***app*** directory, will start Sass watching the ***sass*** folder for changes to the ***style.scss*** file and automatically write them to the ***style.css*** file in the **css** folder: `sass --watch sass/style.scss:css/style.css`. Only edit the style.scss file at this point to test, not the style.css.
4. The Bourbon-Chef build system also requires that [Node.js](https://nodejs.org/en/), more specifically NPM (node package manager)is installed on your machine to load packages for Gulp.  Ensure the [latest version](https://github.com/Surfing-Chef/Bourbon/wiki/Latest-Node.js-and-Gulp) is installed on your machine.   
5. Once Gulp is installed globally, set up a ***[package.json](https://github.com/Surfing-Chef/Bourbon/wiki/package.json)*** and install Gulp into your project
6. Install the gulp packages into project directory, automatically entered as *devDependencies* in ***package.json***: `>npm install gulp-plumber gulp-uglify gulp-rename gulp-autoprefixer del gulp-browser-sync --save-dev`  
7. Setup ***[gulpfile.js](https://github.com/Surfing-Chef/Bourbon/wiki/The-gulpfile.js)*** to automate build tasks.

#### Version Control
1.0.0 - Basic project structure   
1.0.1 - Basic HTML and SCSS  
1.1.0 - Installed Bourbon components  
1.1.1 - Created and imported master directories  
1.2.0 - Installed Gulp into project
1.2.1 - Installed the Gulp packages into project directory via package.json
1.2.2 - Set up a gulpfile.js
1.2.3 - Configured gulp tasks

#### References
[Bourbon](http://bourbon.io/)  
[Gulp](http://gulpjs.com/)
[Ruby Installer](http://rubyinstaller.org/)  
[Node Installer](https://nodejs.org/en/)  
[Travis Tutorial](https://www.youtube.com/watch?v=8ItNE_DX6Cc&t=18s)  
