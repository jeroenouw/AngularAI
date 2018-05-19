# DEVELOPING

## Quick start

First clone this repo: `git clone https://github.com/jeroenouw/AngularAI.git`.  
Change directory to this project  
Run `npm install` to install all the dependencies.  
Run `npm start` to run this project. This will run with the AoT Compiler.    
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development

For own projects please use different token `src/environment/environment.prod.ts` and `src/environment/environment.ts`:  

```ts

dialogflow: {
  [CHOOSE_A_NAME]': '[YOUR_TOKEN]'
}

```

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  

To build the development environment, run `npm run dist`.

## Production

To build the default production environment, run `npm run prod`. This will run with the AoT Compiler.  
  
To build the production environment without hashes in your file, run `npm run prod:hashless`.  

## Speech Options

Available speech recognition options in `src/app/service/ai.service.ts`  
  
Choose if the API needs to look for further words:  
`this.speechRecognition.continuous = false;`  
  
Show interim results or just final results:  
`this.speechRecognition.interimResults = false;`  
  
Select your speech language:  
`this.speechRecognition.lang = 'en-us';`  
  
Choose the quantity of alternative available matches:  
`this.speechRecognition.maxAlternatives = 0;`  
