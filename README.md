## Tools

Frontend: React, Redux Toolkit, SASS, Bulma
Backend: Node, Express
Misc: Asciidoctor & Pandoc for document conversion

challenges faced:
- maneuvering bulma's lack of markdown & asciidoc support.
- converting .adoc & .md content to jsx
- picking the background image :/

lessons learned:
- don't use redux if local state suffices (esp. when prop drilling is easier than setting up an entire damn redux store)

points of weakness:
- conversion is not bidirectional nor fully up-to-date because of AsciiDoctor version
- only supports 2 markup languages: markdown (.md) and asciidoc (.adoc)


## Setup

1. Navigate to project folder, install dependencies, and start development server
```bash
npm init
npm start
```

[Live demo]()
