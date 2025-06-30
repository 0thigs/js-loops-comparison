const personagens = [
  {
    nome: "Homem de Ferro",
    forca: 85,
    inteligencia: 95,
    velocidade: 75,
  },
  {
    nome: "Capitão América",
    forca: 80,
    inteligencia: 70,
    velocidade: 65,
  },
  {
    nome: "Thor",
    forca: 95,
    inteligencia: 80,
    velocidade: 90,
  },
  {
    nome: "Hulk",
    forca: 100,
    inteligencia: 50,
    velocidade: 60,
  },
  {
    nome: "Viúva Negra",
    forca: 60,
    inteligencia: 85,
    velocidade: 80,
  },
  {
    nome: "Thanos",
    forca: 98,
    inteligencia: 90,
    velocidade: 70,
  },
]

function compararPersonagens(p1, p2) {
  console.log(`\n--- Comparando: ${p1.nome} x ${p2.nome} ---`)

  for (let atributo of ['forca', 'inteligencia', 'velocidade']) {
    const valor1 = p1[atributo]
    const valor2 = p2[atributo]

    let vencedor = ''
    if (valor1 > valor2) {
      vencedor = `${p1.nome} vence em ${atributo}`
    } else if (valor2 > valor1) {
      vencedor = `${p2.nome} vence em ${atributo}`
    } else {
      vencedor = `Empate em ${atributo}`
    }

    console.log(`• ${atributo}: ${p1.nome} (${valor1}) vs ${p2.nome} (${valor2}) → ${vencedor}`)
  }
}

const thanos = personagens.find(p => p.nome === "Thanos")

for (let personagem of personagens) {
  if (personagem.nome !== "Thanos") {
    compararPersonagens(personagem, thanos)
  }
}
