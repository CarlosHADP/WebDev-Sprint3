import Pista from "../Pista";



function infoCircuitos(){

    const infos = [
        {
            localPista: "Alemanha",
            bandeira: "/src/imgs/Bandeiras/ale.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Tempelhof.svg",
            informacoes: "O E-Prix da Alemanha no Aeroporto de Tempelhof é uma das corridas mais emblemáticas do calendário da Fórmula E, o campeonato mundial de carros elétricos. A pista é montada no histórico aeroporto de Tempelhof, em Berlim, um local que tem grande significado histórico e cultural, especialmente relacionado ao período da Guerra Fria."
        },
        {
            localPista: "China",
            bandeira: "/src/imgs/Bandeiras/chi.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Shanghai.svg",
            informacoes: "O E-Prix de Shanghai é outro marco importante no calendário da Fórmula E, trazendo a emocionante disputa de carros elétricos para uma das cidades mais vibrantes e futuristas do mundo. A corrida em Shanghai oferece uma experiência única, combinando a rica cultura chinesa com a tecnologia de ponta da Fórmula E."
        },
        {
            localPista: "Coreia",
            bandeira: "/src/imgs/Bandeiras/cor.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Seoul.svg",
            informacoes: "O circuito de Seul, palco do E-Prix na Coreia do Sul, é uma verdadeira obra-prima da engenharia automobilística, combinando elementos urbanos e paisagens naturais de forma única. Construído em torno do Parque Olímpico, que sediou os Jogos Olímpicos de Verão de 1988, o traçado oferece aos pilotos e fãs uma experiência emocionante e memorável."
        },
        {
            localPista: "Espanha",
            bandeira: "/src/imgs/Bandeiras/esp.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Valencia.svg",
            informacoes: "Valência, a vibrante cidade espanhola conhecida por sua arquitetura moderna e pela Cidade das Artes e das Ciências, já foi palco de diversas competições automobilísticas de renome internacional. A Fórmula E, com sua visão de futuro e foco na sustentabilidade, encontrou em Valência o cenário perfeito para realizar um E-Prix memorável."
        },
        {
            localPista: "Inglaterra",
            bandeira: "/src/imgs/Bandeiras/ing.svg",
            circuito: "/src/imgs/Circuitos/Eprix-London.svg",
            informacoes: "O E-Prix de Londres oferece uma experiência única para os fãs da Fórmula E, combinando a emoção das corridas de alta velocidade com a vibração da capital britânica. O circuito, localizado no centro de exposições ExCeL London, é um dos mais desafiadores e inovadores do calendário da Fórmula E."
        },
        {
            localPista: "Italia",
            bandeira: "/src/imgs/Bandeiras/ita.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Italia.svg",
            informacoes: ""
        },
        {
            localPista: "Mexico",
            bandeira: "/src/imgs/Bandeiras/mex.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Mexico.svg",
            informacoes: ""
        },
        {
            localPista: "Monaco",
            bandeira: "/src/imgs/Bandeiras/mon.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Monaco.svg",
            informacoes: ""
        },
        {
            localPista: "Arabia Saudita",
            bandeira: "/src/imgs/Bandeiras/sau.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Riyadh-SA.svg",
            informacoes: ""
        },
        {
            localPista: "Estados Unidos",
            bandeira: "/src/imgs/Bandeiras/usa.svg",
            circuito: "/src/imgs/Circuitos/Eprix-NewYork.svg",
            informacoes: ""
        },
    ]

    return(
        
        <Pista dados={infos} />
       
    )
}

export default infoCircuitos;