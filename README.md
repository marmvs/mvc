## Conceito padrão MVC javascript
O Padrão MVC (Model-View-Controller)
O MVC é utilizado em muitos projetos devido a arquitetura que possui, o que possibilita a divisão do projeto em camadas muito bem definidas. Cada uma delas, o Model, o Controller e a View, executa o que lhe é definido e nada mais do que isso.

A utilização do padrão MVC traz como benefício o isolamento das regras de negócios da lógica de apresentação, que é a interface com o usuário. Isto possibilita a existência de várias interfaces com o usuário que podem ser modificadas sem a necessidade de alterar as regras de negócios, proporcionando muito mais flexibilidade e oportunidades de reuso das classes.

Uma das características de um padrão de projeto é poder aplicá-lo em sistemas distintos. O padrão MVC pode ser utilizado em vários tipos de projetos como, por exemplo, desktop, web e mobile.

A comunicação entre interfaces e regras de negócios é definida através de um controlador, que separa as camadas. Quando um evento é executado na interface gráfica, como um clique em um botão, a interface se comunicará com o controlador, que por sua vez se comunica com as regras de negócios.

O MVC inicialmente foi desenvolvido no intuito de mapear o método tradicional de entrada, processamento, e saída que os diversos programas baseados em GUI utilizavam. No padrão MVC, teríamos então o mapeamento de cada uma dessas três partes para o padrão MVC conforme ilustra a Figura 1.

![Figura 1](https://arquivo.devmedia.com.br/artigos/Higor_Medeiros/IntroducaoMVC/IntroducaoMVC01.jpg)


Mapeamento das três partes de uma aplicação para o MVC
Figura 1. Mapeamento das três partes de uma aplicação para o MVC.
A Figura 2 demonstra que a entrada do usuário, a modelagem do mundo externo e o feedback visual para o usuário são separados e gerenciados pelos objetos Modelo (Model), Visão (View) e Controlador (Controller).

![Figura 2](https://arquivo.devmedia.com.br/artigos/Higor_Medeiros/IntroducaoMVC/IntroducaoMVC02.jpg)

Objetos utilizados no MVC e suas interações
Figura 2. Objetos utilizados no MVC e suas interações.
Explicando cada um dos objetos do padrão MVC tem-se:

1 - Primeiramente o controlador (Controller), que interpreta as entradas do mouse ou do teclado enviadas pelo usuário e mapeia essas ações do usuário em comandos que são enviados para o modelo (Model) e/ou para a janela de visualização (View) para efetuar a alteração apropriada;

2 - Por sua vez, o modelo (Model) gerencia um ou mais elementos de dados, responde a perguntas sobre o seu estado e responde a instruções para mudar de estado. O modelo sabe o que o aplicativo quer fazer e é a principal estrutura computacional da arquitetura, pois é ele quem modela o problema a ser resolvido;

3 - Por fim, a visão (View) gerencia a área retangular do display e é responsável por apresentar as informações para o usuário através de uma combinação de gráficos e textos. A visão não sabe nada sobre o que a aplicação está atualmente fazendo, pois tudo que ela realmente faz é receber instruções do controle e informações do modelo e então exibi-las. A visão também se comunica de volta com o modelo e com o controlador para reportar o seu estado.


Portanto, a principal ideia do padrão arquitetural MVC é a separação dos conceitos - e do código. O MVC é como a clássica programação orientada a objetos, ou seja, criar objetos que escondem as suas informações e como elas são manipuladas e então apresentadas em uma interface simples para o mundo. Entre as diversas vantagens do padrão MVC estão a possibilidade de reescrita da GUI ou do Controller sem alterar o modelo, reutilização da GUI para diferentes aplicações com pouco esforço, facilidade na manutenção e adição de recursos, reaproveitamento de código, facilidade na manutenção do código sempre limpo etc.

Para saber mais clique [devmedia](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308#:~:text=banco%20de%20dados.-,O%20Padr%C3%A3o%20MVC%20(Model%2DView%2DController),nada%20mais%20do%20que%20isso.)


## Conceito framework javascript

Framework é uma definição que vai além do mercado de software. Em outros contextos, refere-se a uma série de ações e estratégias que visam solucionar um problema bem específico. Assim, quando se deparam com esse cenário, os profissionais recorrem a um conjunto pronto de abordagens e otimizam os seus resultados.

Na área de tecnologia, a definição é semelhante, mas de acordo com os aspectos técnicos de programação de sistemas. Trata-se de uma série de bibliotecas e classes — ou seja, códigos prontos — que oferecem alguma funcionalidade específica. Em outras palavras, é um padrão que pode ser incorporado a sistemas para agilizar a codificação de certas partes.

Simplificando, é como se fossem peças prontas que podem ser inseridas em um carro. Essas peças apresentam uma função específica e só funcionam dentro do contexto inteiro, por isso ajudam quando o motorista precisa economizar o dinheiro do conserto de alguma peça defeituosa. 

Suas funções são adequadas para determinadas tarefas repetitivas e mais simples, que geralmente são comuns em softwares de diferentes naturezas. Assim, o programador pratica o reuso de código. Esse conjunto de funcionalidades é como uma máquina que automatiza parte do seu trabalho para que você consiga focar outras tarefas. 

O conceito é semelhante ao de biblioteca — códigos prontos para serem aplicados. No entanto, os frameworks podem ser compreendidos como uma série de bibliotecas, ou seja, uma estrutura ainda maior e mais robusta que permite configurar partes maiores do código.

Um exemplo de funcionalidade que é implantada com frameworks: formulário de login. As ações que envolvem essa função raramente mudam a depender do contexto da aplicação — um formulário de login quase sempre requer as mesmas coisas, que é um usuário/e-mail e uma senha, por exemplo. 

### Quais as vantagens de utilizar os frameworks?

Redução de tempo
Uma das principais vantagens é a agilidade e economia do tempo. Afinal, essas ferramentas facilitam o desenvolvimento dos sistemas, permitindo que os programadores não percam tempo com funcionalidades mais básicas. 

Desse modo, eles podem investir recursos nas funções e requisitos específicos do sistema, que o diferencia de outros já existentes. Assim, a produtividade aumenta consideravelmente, já que há menos desperdício de tempo e esforço. Isso, no geral, contribui para resultados melhores e maior satisfação dos clientes.

Segurança
Os frameworks são desenvolvidos por comunidades de programadores e são, geralmente, abertos para modificações e revisões por esses profissionais. Dessa maneira, eles são consistentes e robustos, apresentando um bom padrão de qualidade de código.

Em razão disso, ao aplicá-los, você ganha maior segurança para o seu sistema, com menos erros. Dessa forma, é possível utilizar esses padrões prontos sem receio e concentrar mais nos códigos originais. 

Padrões de legibilidade
Outra vantagem de ser desenvolvido por uma comunidade é a legibilidade. Esse quesito é essencial para a construção de código, sendo um dos aspectos mais cobrados em cursos e graduações da área. Afinal, um código limpo é importante para que programadores consigam realizar manutenções e entender do que se trata quando leem. 

Os frameworks são geralmente criados sob esse padrão e garantem uma clareza muito grande que auxilia no dia a dia. 

Para saber mais clique [betrybe](https://blog.betrybe.com/framework-de-programacao/o-que-e-framework/)


## Conceito biblioteca javascript
As bibliotecas de JavaScript são coleções de trechos prontos de código que os desenvolvedores Web podem reutilizar para executar funções padrão do JavaScript. O código de biblioteca de JavaScript é conectado ao restante do código do projeto de acordo com a necessidade. Fazendo uma analogia, se você pensar no código da aplicação em JavaScript como uma casa, as bibliotecas de JavaScript são móveis modulares que os desenvolvedores podem usar para aprimorar a funcionalidade da casa.

Veja a seguir alguns dos usos comuns das bibliotecas de JavaScript:

Visualização de dados
A visualização de dados é crucial para que usuários vejam estatísticas, p. ex., no painel de administração ou sobre métricas de painel e desempenho.

Bibliotecas como Chart.js, ApexCharts e Algolia Places têm funções integradas que você pode usar para criar aplicativos Web que exibem dados em gráficos e mapas.

Manipulação de DOM
É possível usar bibliotecas como jQuery e Umbrella JS para facilitar o desenvolvimento Web, pois elas oferecem código de funções padrão de sites, como animações de menu, galerias de imagem, botões, caixas de luz e mais.

Formulários
Qualquer desenvolvimento Web usa formulários para que visitantes do site entrem em contato com alguém, façam o pedido de produtos ou o cadastro para eventos. Algumas bibliotecas de JavaScript, como wForms, LiveValidation, Validanguage e qForms, simplificam as funções de criação de formulários, inclusive validação, layout, condições e transformação de formulários.
Funções de matemática e texto
Muitas aplicações Web precisam resolver equações matemáticas e processar datas, horários e texto. Em vez de enviar todas as solicitações para o servidor, é mais eficiente processar uma parte do lado do cliente. Desenvolvedores Web fazem isso usando bibliotecas de JavaScript como Date.js, Sylvester e JavaScript URL Library

![biblioteca](https://d1.awsstatic.com/sdk-overview%20(3).42131cb0342fa57ce637ca4254eb58ca8fb48845.png)


Para saber mais clique [AWS](https://aws.amazon.com/pt/what-is/javascript/#:~:text=As%20bibliotecas%20de%20JavaScript%20s%C3%A3o,de%20acordo%20com%20a%20necessidade.)


