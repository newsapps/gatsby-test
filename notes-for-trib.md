NOTES FOR TRIB FOLKS
=====================

Welcome to the team's first Gatsby repo! Here's how I suggest doing this: the below contains some first steps on installing and starting up a local server in Gatsby. I also go through the important files in this repo, and have commented the code. Once you've read through these steps, I suggest you go through the official Gatsby tutorial here (https://www.gatsbyjs.org/tutorial/), and add pages/components to this initial repo as you see fit. VERY IMPORTANT NOTE: I am still learning React so the code in here is amateur at best! 

1. Gatsby is an npm package so you can download it with `npm install -g gatsby-cli`. I installed Gatsby within a virtual environment, just to be safe (`mkvirtualenv gatsby-test` if you use `virtualenv`). Run `gatsby --help` to see a list of common commands.

2. When you install and then run `gatsby --help`, you may get a `command not found`. These commands worked for me to fix this:
    
    `npm config delete prefix`   
    `npm config set prefix /usr/local`  
    `npm i -g gatsby-cli`  
    `gatsby --version`  

(From here: https://github.com/gatsbyjs/gatsby/issues/2137)

3. Gatsby is built on React. You'll need a Babel plug-in to get the correct colors in Sublime (things will look weird otherwise). You can use these instructions to get that: https://stackoverflow.com/questions/41319547/syntax-highlighting-for-react-code-in-sublime

4. Some key commands:
    -- `gatsby new chicago-gatsby-repo <URL>` = this is equivalent to `tarbell serve` + `git init`. `gatsby new` is the basic command, `chicago-gatsby-repo` is your chosen name/slug of the project, and the `<URL>` would be a URL for a project you'd want to clone. Eventually, we can make a standard project on our github, with all necessary files, that the team can clone each time.  
    -- `gatsby develop` = this is equivalent to `tarbell serve` once you're inside the repo directory and your site is served on `http://localhost:8000`.  
    -- `gatsby build` = this is equivalent to `npm run build` and outputs a `/public/` directory within which the file `index.html` has all of the code that your project has generated.  

5. Some key directories and files:  
    -- `gatsby-config.js`: this is equivalent to `tarbell_config.py`. It is where you can call in plugins, credentials, and even data.  
    -- `/pages/`: These are the front-facing pages of any Gatsby project. The `index.html` will be the landing page of your site or, in our case, where the main graphic lives. Any other page, like `about.js`, would live at something like `url.com/about.js`. One of the nice aspects of React is that you can assign each `.js` page its own CSS, eliminating the need for hyper-specific classes and IDs. In this repo, `about.js` has its own CSS file, which is `about.module.scss` (since we use SASS).  
    -- `/components/`: This is the cool thing about React. Components are what they sound like: if your graphic includes a header, some chatter, a chart, and a timeline, you can create components for each of those things (each with its own SASS file), and import them into the `index.html` where you'd like them to be. The great thing for us is that this allows us to standardize common things we build (like a bar chart) with set styles and placements.  
    -- `/styles/global.scss`: This holds global styles.  
    -- `index.html`: This is the main landing page of this project. For us, this will likely be the main graphic for a given project and will have all components imported into it.  
    -- `/public/`: This contains an `index.html` file that is built when you run `gatsby build`. This index contains all the code the project produced.  
    -- The other pages are all pages I'm still messing with but feel free to look around!  

6. At this point, you should take a look around the repo and walk yourself through the main Gatsby tutorial.  


USEFUL LINKS
============

-- Deployment: https://www.gatsbyjs.org/docs/deploying-to-s3-cloudfront/, http://lofi.fi/deploying-gatsbyjs-to-amazon-aws/  
-- Different Sheets plugin: https://github.com/aendrew/gatsby-source-google-sheet  
-- This helped with credentials: https://github.com/brandonmp/gatsby-source-google-sheets/blob/master/README.md  
-- These helped with Sheets+Gatsby: https://levelup.gitconnected.com/building-a-collaborative-calendar-with-google-and-gatsby-5989b283c937, https://jmolivas.weknowinc.com/how-use-google-spreadsheet-manage-content-and-trigger-deployment-your-gatsbyjs-site  


NEXT STEPS FOR NAUSHEEN
=======================

-- How can we publish directly to P2P (and hence into Arc)? Is there replicatable code in Tarbell we could use?  
-- How can we use `awscli` to push repos to AWS?  
-- How can we push this repo to Gitlab? https://www.gatsbyjs.org/docs/deploying-to-gitlab-pages/  
^^^ Can we do all of those at once?  
