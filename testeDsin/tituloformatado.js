function imprimirTitulo(superior, inferior) {
    const largura = 45
    const borda = "I".repeat(largura)
    const linhaVazia = "I" + " ".repeat(largura - 2) + "I"
    
    const centrar = (texto) => {
        const espacos = Math.floor((largura - 2 - texto.length) / 2)
        return "I" + " ".repeat(espacos) + texto + " ".repeat(espacos) + "I"
    }

    console.log(borda)
    console.log(linhaVazia)
    console.log(centrar(superior))
    console.log(centrar(inferior))
    console.log(linhaVazia)
    console.log(borda)
}

imprimirTitulo("DSIN", "TECNOLOGIA DA INFORMAÇÃO")