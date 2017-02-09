# Bourbon-Chef-Site
### v 1.5 - Migrated to a PHP page workflow
> Tags: parallax, side bars, hero landing, back to top button, php, browserSync, gulp, sass, scss  

### 1.0 GENERAL
The end goal of this website development is simple:  a WordPress site with a landing page.  Since WordPress site structures are php based it only makes sense that Bourbon Chef is developed in a like environment.  Hindsight says this should have been the first thing implemented.  However since this was not the case, development moves ahead with a bit more of an understanding of how gulp and browserSync and WAMP don't always co-operate as simply as one hopes.  It is worth noting that documentation on the internet regarding these issues can be daunting - so much and all well-intended, but overwhelming.  ***Wordpress***, ***wamp***, ***browsersync*** and ***php*** were the keywords that enabled Google to finally [help out](http://duaneblake.co.uk/front-end/how-to-set-up-browsersync-with-wordpress-using-wamp-and-gulp/).  

Enhanced parallax features such as various scroll speeds in header and culinaria sections, as well as animated buttons (contact section) are planned.

### 2.0 HEADER
#### 2.1 Main Navigation
Start with a basic, responsive top menu.  Links go to page sections as with a one page website.  
There is a floating arrow on the right of the site that takes a visitor back to the top.  Maybe adjust the animation flow/speed?


#### 2.2 Callout
A default quote (WordPress tagline), replaced by a randomly selected quote from a custom library.

### 3.0 MAIN CONTENT
#### 3.1 About :: Weather
ABOUT section: About the site, about me, why this is here?  
WEATHER aside: Dark Sky aside: `darksky.json` contains a developement API key. This file is not tracked by Git so has to be passed to each development environment seperately.  

Add a links to radar and other weather sites

#### 3.2 Culinaria :: Links
CULINARIA section:  the fixed background was jumpy because of a bug in IE and Edge.  Removing the top background image that only added a transparent gradient resolved the issue.  

>Adding apifier data feed:  

1. Load json history and then
2. use the link to load the data.


#### 3.3 Coding :: Bookmarks

#### 3.4 Blog :: Recent Posts
BLOG section: Display a most recent blog entry?  Section might not exist in final deployment, the link at the top of the page might be all that is required for referencing the blog poriton of the site.  
RECENT POSTS: self explanatory  

#### 3.5 Contacts :: Repo Links
CONTACTS: [Contact Form Tutorial](https://code.tutsplus.com/tutorials/build-a-neat-html5-powered-contact-form--net-20426)  
Basic contact form that will be replaced with a wordpress plug once migrated. The code from the tutorial works, but to test it from a local server set up without a mail server installed, [the tool mentioned below](http://www.toolheap.com/) works.  Thanks **Michael Stypko** for these pointers in the notes below the tutorial.  Saved me a heap of frustration.  

```txt
For those of you having problems receiving emails from the contact form,
unless you have a mail server this will not work.
However you can test the mail function on a local host with this http://www.toolheap.com/

Also make sure that your php.ini file is edited to listen in on SMTP port 25,
you may or may not need to do this because by default I believe it should be port 25.
If its not just look for the mail function within the ini file and change it to 25,
it should look like this:

[mail function]

; For Win32 only.

; http://php.net/smtp

SMTP = localhost

; http://php.net/smtp-port

smtp_port = 25
```
REPO LINKS: GitHub and Pinterest buttons to animate when adding additional parallax features to the site.

### 4.0 FOOTER
Parallax in that it appears as scroll takes the page up.


### 5.0 THANKS FOR ALL THE FISH...
[Bootstrap Font Awesome CDN](https://www.bootstrapcdn.com/fontawesome/)  
[Tut on "back to top" button](https://getflywheel.com/layout/add-sticky-back-top-button-website/)  
[Bourbon](http://bourbon.io/docs/)   
[SASS](http://sass-lang.com/libsass)
[Font Awesome](http://fontawesome.io/icons/)  
[Random Quote Generator](http://codepen.io/kkoutoup/pen/zxmGLE)  
[CSS Tricks Glyphs and Special Characters](https://css-tricks.com/snippets/html/glyphs/)  
[Fade in Mixin](https://coderwall.com/p/-xfqmq/scss-keyframe-mixin)
[Dark Sky PHP Tut](http://lekkerlogic.com/2015/08/dark-sky-forecast-io-weather-api-part-1/)
[Sitepoint AJAX tut](https://www.sitepoint.com/ajaxjquery-getjson-simple-example/)  
[WAMP GULP AND BROWSERSYNC -  a gulpfile that works with PHP](http://duaneblake.co.uk/front-end/how-to-set-up-browsersync-with-wordpress-using-wamp-and-gulp/)  
