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