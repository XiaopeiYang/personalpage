<h2 align="center">
  Portfolio Website - v3.0<br/>
  <a href="https://gaopengbai.com/" target="_blank">Gaopeng Bai</a>
</h2>

<br/>

<h3 align="center">
    🔹
    <a href="https://github.com/Gaopeng-Bai/personalpage/issues">Report Bug</a> &nbsp; &nbsp;
    🔹
    <a href="https://github.com/Gaopeng-Bai/personalpage/issues">Request Feature</a>
</h3>


## Built With

My personal portfolio <a href="https://gaopengbai.com/" target="_blank">gaopengbai.com</a> which features some of my github projects as well as my resume and technical skills.<br/>

This project was built using these technologies.

- React.js
- Node.js
- Express.js
- CSS3
- VsCode
- Vercel

## Features

**📖 Multi-Page Layout**

**🎨 Styled with React-Bootstrap and Css with easy to customize colors**

**📱 Fully Responsive**

## Getting Started

Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. In the project directory, you can run: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## Usage Instructions

Open the project folder and Navigate to `/src/components/`. <br/>
You will find all the components used and you can edit your information accordingly.

## Deployment (gh-page)

1. Install GitHub Pages package as a dev-dependency.
    ```
    Install gh-pages --save-dev
    ```
2. Add properties to package.json file.
   The first property we need to add at the top level homepage second we will define this as a string and the value will be "http://{username}.github.io/{repo-name}" {username} is your GitHub username, and {repo-name} is the name of the GitHub repository you created it will look like this :

    ```
      "homepage": "http://yuribenjamin.github.io/my-app"
    ```

      Second in the existing scripts property we to need to add predeploy and deploy.

    ```
      "scripts": {
      //...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
      }
    ```

3. Create a Github repository and initialize it and add it as a remote in your local git repository.
   ```
   git init
   git remote add origin git@github.com:Yuribenjamin/my-app.git
   ```
4. Now deploy it to GitHub Pages.
   ```
   npm run deploy
   ```

5. commit and push your commit to GitHub. Optionally

    ```
    git add .
    git commit -m "Your awesome message"
    git push origin master
    ```