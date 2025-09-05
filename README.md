# Celcom Design

Kick off development by cloning this repository. The source code ships with the main [Gatsby](https://www.gatsbyjs.org/) configuration files. [Gatsby](https://www.gatsbyjs.org/) is a free and open source framework based on React that helps developers build blazing fast websites and apps.

_This project uses [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for Git workflow and [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react) for programming style guide with a few minor exceptions. For bugs or new feature request, please open a [new issue](https://gitlab.com/celcomdesign/celcomdesign.gitlab.io/issues)._

## Prerequisites

- [Git](https://git-scm.com) with [Gitflow](https://github.com/nvie/gitflow/wiki/Installation)
- [Node.js 10+](https://nodejs.org)
- Command line tool
- [Visual Studio Code](https://code.visualstudio.com/)

## Quick start

1.  **Get the source code.**

    Clone the site.

    ```shell
    git clone git@gitlab.com:celcomdesign/celcomdesign.gitlab.io.git
    ```

1.  **Install dependencies.**

    Navigate into the site’s directory & install dependencies.

    ```shell
    cd celcomdesign/
    npm install
    ```

1.  **Start the site in `develop` mode.**

    Next, start it up.

    ```shell
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`. Open the `celcom-design` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## What's inside?

A quick look at the top-level files and directories in this project.

    .
    ├── content
    ├── src
    ├── static
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/content`**: This directory will contain all of the code related to the dynamic content of this site such as blog post or editable content.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of this site (what you see in the browser) such as the site header or a page template. `src` is a convention for “source code”.

1.  **`/static`**: This directory will contain all the static files such as favicon and robots.txt (if needed).

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about this site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`README.md`**: A text file containing useful reference information about this project.

## Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
