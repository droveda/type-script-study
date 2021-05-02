import { NegociacaoController } from './controllers/NegociacaoController'

const controller = new NegociacaoController();

$('.form').submit(controller.adiciona.bind(controller));
$('#botao-importa').click(controller.importaDados.bind(controller));


//https://brew.sh
//https://changelog.com/posts/install-node-js-with-homebrew-on-os-x
//use visual studio code, it is better for typescript

//it is necessary to have node.js installed (npm) (mac osx Homebrew)
//-> brew update
//-> brew doctor
//-> brew upgrade
//-> brew install node
//-> node -v

//inside the application directory execute the following:
//-> npm init
//-> npm install typescript@2.3.2 --save-dev
//-> npm run compile
//-> npm watch

//execute the following to enable usage of jquery, this way the typescript compiler understand the jquery objects and methods
//and the autocomplete will work on vs code
//-> npm install @types/jquery@2.0.42 --save-dev

//execute the following command to install lite-server
//-> npm install lite-server@2.3.0 --save-dev
//-> npm run server (this command start the server)

//-> npm install concurrently@3.4.0 --save-dev

//-> npm start