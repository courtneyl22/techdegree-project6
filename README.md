# techdegree-project6
 This is my portfolio. Here is what is included:
 
Initialize the app and add dependencies
- The node_modules folder is referenced in the .gitignore file and isn't in the repo.
- Running npm install downloads all necessary dependencies.
- Running node app.js serves the app.
- Running npm start serves the app.

Data
- The data.json file is present.
- The data.json file contains a projects property set to an array containing at least five objects that each contain the following properties:
  1) id
  2) project_name
  3) description
  4) technologies
  5) live_link
  6) github_link
  7) image_urls

Routes
- The following routes do render the appropriate pages:
  1) / - Home page
  2) /about - About page
  3) /project or /projects route that includes a project id parameter
- App uses a static route to serve the static files in the public folder

Templates
- The following template are present:
  1) layout.pug
  2) index.pug
  3) about.pug
  4) project.pug
- Templates have all of the required information as exampled in the provided HTML and mockup files:
  1) name
  2) titles
  3) descriptions
  4) project descriptions
  5) project images
  6) links
- Starter comments have been removed from pug files.
- error.pug template has been created.

Errors
- App logs out a user friendly error message to the console when the app is pointed at a non-existent route such as /error/error.
- When the app is directed at a non-existent route, like /error/error, the app displays a user friendly error page in the browser that details the following:
  1) error.message
  2) error.status
  3) error.stack

Layout, CSS and styles
- Final project's layout and positioning does match the example HTML or mockup files.
- Project has at least three of the following items customized:
  1) color
  2) background color
  3) font
  4) box or text shadows
  5) transitions or animations
  6) add a logo
- Changes detailed in the README.md file and the submission notes.
  
CSS Changes:
- Font was changed to Darker Grotesque
- Background image set to the body
- Sidebar is now transparent
- Buttons are low opacity until you hover over them
- Font colors changed to white & light blue
