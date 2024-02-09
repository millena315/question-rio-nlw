const perguntas = [
    {
      questão: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de servidor",
        "Uma linguagem de marcação",
        "Uma linguagem de programação de cliente"
      ],
      correta: 2
    },
    {
      questão: "Qual a função do operador '==' em JavaScript?",
      respostas: [
        "Comparação estrita de valores e tipos",
        "Comparação de valores",
        "Atribuição de valores"
      ],
      correta: 2
    },
    {
      questão: "Qual a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "const myVar = 10;",
        "var myVar = 10;"
      ],
      correta: 0
    },
    {
      questão: "O que é um array em JavaScript?",
      respostas: [
        "Uma coleção de elementos ordenados por chaves",
        "Um tipo de dado que armazena apenas valores booleanos",
        "Uma estrutura de controle condicional"
      ],
      correta: 0
    },
    {
      questão: "O que é um callback em JavaScript?",
      respostas: [
        "Uma função que é executada após a conclusão de uma operação assíncrona",
        "Um método para adicionar elementos a um array",
        "Uma técnica de otimização de código"
      ],
      correta: 0
    },
    {
      questão: "Qual a maneira correta de escrever um comentário em uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "/* Este é um comentário de uma linha */",
        "<!-- Este é um comentário de uma linha -->"
      ],
      correta: 0
    },
    {
      questão: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de dado utilizado para armazenar informações sobre um objeto",
        "Um modelo de objeto que representa a estrutura de uma página HTML",
        "Uma técnica de manipulação de strings"
      ],
      correta: 1
    },
    {
      questão: "Qual a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Remover um evento de um elemento HTML",
        "Adicionar um evento a um elemento HTML",
        "Atualizar o conteúdo de um elemento HTML"
      ],
      correta: 1
    },
    {
      questão: "Qual o resultado da expressão '3 + 2 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "7"
      ],
      correta: 1
    },
    {
      questão: "O que é o operador '===' em JavaScript?",
      respostas: [
        "Um operador lógico de negação",
        "Um operador de comparação estrita de valores e tipos",
        "Um operador de concatenação de strings"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.questão
  
    for(let respostas of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = respostas
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(respostas)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value = item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }