# verificador-idade
Programa verificador de idade 
## Manipulando o DOM (Document Object Model)

### Estrutura do DOM

- O DOM é uma árvore de nós, uma junção de vários nós que representam a estrutura de um documento HTML.
- Usamos o objeto `document` para acessar e manipular o DOM.

### Seletores

- `document.querySelector`: Seleciona o primeiro elemento que corresponde ao seletor CSS fornecido.
- `document.querySelectorAll`: Seleciona todos os elementos que correspondem ao seletor CSS fornecido.
- `document.getElementsByClassName`: Seleciona todos os elementos com a classe fornecida.
- `document.getElementById`: Seleciona o elemento com o ID fornecido.

### Manipulação de Atributos

- `getAttribute`: Obtém o valor de um atributo específico.
- `setAttribute`: Define ou modifica o valor de um atributo.
- `hasAttribute`: Verifica se um elemento possui um atributo específico.
- `removeAttribute`: Remove um atributo específico.

- ## Eventos no DOM

### O que é um Evento?

- Eventos são sinais que o navegador envia quando algo acontece (e.g., um clique em um botão).

### Método `addEventListener`

- `elemento.addEventListener(evento, callback)`: Associa um evento a um elemento.
    - `elemento`: O elemento HTML ao qual queremos associar o evento.
    - `evento`: O tipo de evento (e.g., 'click').
    - `callback`: A função que será chamada quando o evento ocorrer.

### Tipos de Eventos

```html
   <script>

        var a = document.getElementById('area')
        a.addEventListener('click', clicar)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', sair)

        function clicar() {
            a.innerText = 'clicou'
            a.style.background = 'red'
        }

        function entrar() {
            a.innerText = 'entrou'
            a.style.background = 'black'
        }

        function sair() {
            a.innerText = 'sair'
            a.style.background = 'green'
        }

           
       </script>
```

- **Clique (click)**:

```jsx
jsxCopiar código
// HTML: <button id="meuBotao">Clique aqui</button>
const meuBotao = document.getElementById("meuBotao");
meuBotao.addEventListener("click", function() {
    alert("O botão foi clicado!");
});

```

