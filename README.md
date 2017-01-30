React Starter Kit
=================

This project aims to collect common modules and configurations for our next react projects.

## Installation

- Clone the repo as your projectname
```
git clone https://github.com/Buildize/react-starter-kit.git projectname
```

- Enter the directory
```
cd projectname
```

- Remove git files
```
rm -rf .git
```

- Install dependencies
```
npm install
```

## Development Server
- Start development server
```
npm start
```

- Open the url in your browser
```
http://localhost:8080
```

## Building
- Build project file into ```./dist``` directory
```
npm run build
```
- Build for production
```
NODE_ENV=production npm run build
```

## Environment Variables
Create a ```.env``` file using ```.env-example``` file. Then you can use this variables in your js code like: 
```javascript
process.env.API_URL
```

If you want to be able to use a new environment variable in your js file you need to add it into ```package.json```

Look at ```package.json > environmentVariables```

If you want to use different variable in building process you can override it:

```
NODE_ENV=production API_URL=http://prod.myapi.com npm run build
```
