## Tools

Frontend: React, Redux Toolkit, SASS, Bulma
Backend: Node, Express
Misc: Asciidoctor & Pandoc for document conversion

challenges faced:
- maneuvering bulma's lack of markdown & asciidoc support.
- converting .adoc & .md content to jsx
- picking the background image

lessons learned:
- don't use redux if local state suffices (if prop drilling is easier than setting up an entire damn redux store)
- how a backend express  server connects and dynamically updates a frontend react component
- I should've just sticked to a simple previewer instead of trying to hack together a conversion feature.

points of weakness:
- conversion is kinda weak styyl; not bidirectional; but i guess that's not my fault.
- only supports 2 markup languages: markdown (.md) and asciidoc (.adoc)


## Setup

1. Install [Pandoc](https://pandoc.org/installing.html) (document converter)
```bash
WINDOWS Chocolately   -->     $ choco install pandoc
WINDOWS Winget        -->     $ winget install pandoc

MACOS Brew            -->   $ brew install pandoc

see the above link for more install options
```

2. Navigate to project folder, install dependencies, and start development server
```bash
npm init
npm start
```

Note: npm start covers scripts for both react & express server (see 'start' script in package.json)

3. BOOM BABY, the react frontend is likely live on port 3000, and the express server on 3001.

![](https://github.com/devarshi-ap/adoc-md/blob/main/public/instruction.gif)
