<h1 align="center">
    <img src="./imagens/logolithub.jpg"/>
</h1>

## 🚨 Sobre

<p id="sobre" align="left">LitHub é um projeto de desenvolvimento de um website utilizando HTML, CSS, JavaScript e Node Js. Este projeto faz parte da disciplina Desenvolvimento de Framework I e seu repositório foi criado para facilitar a visualização do projeto. O site foi desenvolvido utilizando a plataforma Visual Studio Code (VS Code) para escrever os códigos. Além disso, foi utilizado um servidor JSON para implementar o sistema CRUD. 

CRUD é um acrônimo que representa as quatro operações básicas realizadas em bases de dados e sistemas de gerenciamento de informação: Create (Criar), Read (Ler), Update (Atualizar) e Delete (Excluir). Essas operações permitem adicionar novos registros, visualizar dados existentes, modificar informações e remover registros de um sistema, facilitando a gestão eficiente dos dados.<p/>

## 🗒️Tabela de Conteúdo

<ul id="tabelaconteudo" align="left">
  <li><a href="#sobre">🚨 Sobre</a></li>
  <li><a href="#ferramentas">🛠️ Ferramentas utilizadas</a></li>
  <li><a href="#requisitos">📋 Pré-requisitos</a></li>
  <li><a href="#links">🔗 Links para instalação do Vs Code, Node.js e pacotes do projeto.</a></li>
  <li><a href="#backend">🔄 Rodando o Back End (servidor)</a></li>
  <li><a href="#mapa">🗺️ Mapa do projeto</a></li>
  <li><a href="#features">✅ Features</a></li>
  <li><a href="#integrantes">🤝 Integrantes do Grupo</a></li>
  <li><a href="#autores">✒️ Autores</a></li>
</ul>

## 🛠️ Ferramentas utilizadas

<ul id="ferramentas" align="left">
  <li>Html</li>
  <li>Css</li>
  <li>Javascript</li>
  <li>Node Js</li>
  <li>Visual Studio Code</li>
</ul> 

## 📋 Pré-requisitos
<p id="requisitos">Antes de inicializar o projeto, tenha em mente que será necessário algumas instalações:</p>

```bash
    # Instalação da IDE Visual Studio Code para rodar os códigos.

    # Instalação do Node.js para manipulação do projeto.

    # Instalações de pacotes utilizados no projeto.
```
## 🔗 Links para instalação do Vs Code, Node.js e pacotes do projeto.

<ul id="links" align="left">
    <li>
        <a href="https://code.visualstudio.com/download" rel="nofollow">Visual Studio Code</a>
    </li>
    <li>
        <a href="https://nodejs.org/en/download/package-manager/current" rel="nofollow">Node Js</a>
    </li>
    <li>
        <a href="https://drive.google.com/drive/folders/1Y_IgrsnjrkfS35FBt1ee7M-5wbeEvJWs?usp=drive_link" rel="nofollow">Arquivo passo a passo para instalar os pacotes</a>
    </li>
</ul>

## 🔄 Rodando o Back End (servidor)

<p id="backend">Resumo dos comandos utilizados:</p>

```bash
# Inicialize um novo projeto Node.js
$ npm init -y

# Instale o express
$ npm install express

# Instale o cors
$ npm install cors

# Instale o nodemon como dependência
$ npm install --save-dev nodemon

# Rodando o servidor com o nodemon
$ npm run dev

# Ao rodar o servidor, no terminal irá aparecer:

> livrariaonline@1.0.0 dev
> nodemon

[nodemon] 3.1.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Rodando o servidor
```

## 🗺️ Mapa do projeto

<p id="mapa">Abaixo segue a estrutura de pastas do projeto:</p>

```bash

Listagem de caminhos de pasta para o volume Acer
O número de série do volume é 5405-C99E
C:.
├───.vscode
├───db
├───imagens
├───javascript
├───node_modules
│   ├───.bin
│   ├───@mongodb-js
│   ├───@types
│   ├───accepts
│   ├───anymatch
│   ├───array-flatten
│   ├───balanced-match
│   │   └───.github
│   ├───binary-extensions
│   ├───body-parser
│   │   └───lib
│   │       └───types
│   ├───brace-expansion
│   ├───braces
│   │   └───lib
│   ├───bytes
│   ├───call-bind
│   │   ├───.github
│   │   └───test
│   ├───chokidar
│   │   ├───lib
│   │   └───types
│   ├───concat-map
│   │   ├───example
│   │   └───test
│   ├───content-disposition
│   ├───content-type
│   ├───cookie
│   ├───cookie-signature
│   ├───cors
│   │   └───lib
│   ├───debug
│   │   └───src
│   ├───define-data-property
│   │   ├───.github
│   │   └───test
│   ├───depd
│   │   └───lib
│   │       └───browser
│   ├───destroy
│   ├───ee-first
│   ├───encodeurl
│   ├───es-define-property
│   │   ├───.github
│   │   └───test
│   ├───es-errors
│   │   ├───.github
│   │   └───test
│   ├───escape-html
│   ├───etag
│   ├───express
│   │   └───lib
│   │       ├───middleware
│   │       └───router
│   ├───fill-range
│   ├───finalhandler
│   ├───forwarded
│   ├───fresh
│   ├───function-bind
│   │   ├───.github
│   │   └───test
│   ├───get-intrinsic
│   │   ├───.github
│   │   └───test
│   ├───glob-parent
│   ├───gopd
│   │   ├───.github
│   │   └───test
│   ├───has-flag
│   ├───has-property-descriptors
│   │   ├───.github
│   │   └───test
│   ├───has-proto
│   │   ├───.github
│   │   └───test
│   ├───has-symbols
│   │   ├───.github
│   │   └───test
│   │       └───shams
│   ├───hasown
│   │   └───.github
│   ├───http-errors
│   ├───iconv-lite
│   │   ├───encodings
│   │   │   └───tables
│   │   └───lib
│   ├───ignore-by-default
│   ├───inherits
│   ├───ipaddr.js
│   │   └───lib
│   ├───is-binary-path
│   ├───is-extglob
│   ├───is-glob
│   ├───is-number
│   ├───media-typer
│   ├───merge-descriptors
│   ├───methods
│   ├───mime
│   │   └───src
│   ├───mime-db
│   ├───mime-types
│   ├───minimatch
│   ├───ms
│   ├───negotiator
│   │   └───lib
│   ├───nodemon
│   │   ├───bin
│   │   ├───doc
│   │   │   └───cli
│   │   ├───lib
│   │   │   ├───cli
│   │   │   ├───config
│   │   │   ├───help
│   │   │   ├───monitor
│   │   │   ├───rules
│   │   │   └───utils
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       └───ms
│   ├───normalize-path
│   ├───object-assign
│   ├───object-inspect
│   │   ├───.github
│   │   ├───example
│   │   └───test
│   │       └───browser
│   ├───on-finished
│   ├───parseurl
│   ├───path-to-regexp
│   ├───picomatch
│   │   └───lib
│   ├───proxy-addr
│   ├───pstree.remy
│   │   ├───lib
│   │   └───tests
│   │       └───fixtures
│   ├───qs
│   │   ├───.github
│   │   ├───dist
│   │   ├───lib
│   │   └───test
│   ├───range-parser
│   ├───raw-body
│   ├───readdirp
│   ├───safe-buffer
│   ├───safer-buffer
│   ├───semver
│   │   ├───bin
│   │   ├───classes
│   │   ├───functions
│   │   ├───internal
│   │   └───ranges
│   ├───send
│   │   └───node_modules
│   │       └───ms
│   ├───serve-static
│   ├───set-function-length
│   │   └───.github
│   ├───setprototypeof
│   │   └───test
│   ├───side-channel
│   │   ├───.github
│   │   └───test
│   ├───simple-update-notifier
│   │   ├───build
│   │   └───src
│   ├───statuses
│   ├───supports-color
│   ├───to-regex-range
│   ├───toidentifier
│   ├───touch
│   │   └───bin
│   ├───type-is
│   ├───undefsafe
│   │   ├───.github
│   │   │   └───workflows
│   │   └───lib
│   ├───unpipe
│   ├───utils-merge
│   └───vary
└───style
PS C:\Users\bruno\OneDrive\Documentos\Projeto Desenvolvimento Framework I\LivrariaOnline>

```

## ✅ Features

<ul id="features" align="left">
  <li>[ x ] Página Home</li>
  <li>[ x ] Página Biblioteca</li>
  <li>[ x ] Página Feedback</li>
  <li>[ x ] Contatos</li>
</ul> 

## 🤝 Integrantes do Grupo

<ul id="integrantes" align="left">
  <li>Bruno Alessandro Bosso Alves RA: 2201178.</li>
  <li>Matheus Henrique Melo Lima RA: 2205415.</li>
  <li>Rafael Lopes Caetano RA: 2206256.</li>
</ul> 

## ✒️ Autores

<ul id="autores" align="left">
  <li>Bruno Alessandro Bosso Alves (Desenvolvimento da página HOME e Biblioteca).</li>
  <li>Matheus Henrique Melo Lima (Desenvolvimento da página Feedback).</li>
  <li>Rafael Lopes Caetano (Desenvolvimento da página contatos).</li>
</ul> 


