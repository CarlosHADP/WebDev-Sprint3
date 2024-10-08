import EquipeStats from "../EquipeStats"


function infoEquipes(){
    
    const informacoes = [
        {
            logo: "/imgs/Logo-Times/MahindraRacing.webp",
            nome: "Mahindra Racing",
            pais: "/imgs/Bandeiras/ind.svg",
            pais_nome: "Índia",
            foto_piloto_1: "/imgs/Fotos-Pilotos/Edoardo Mortara.webp",
            foto_piloto_2: "/imgs/Fotos-Pilotos/Jordan_King.jpg",
            nome_piloto_1: "Edoardo Mortara",
            nome_piloto_2: "Jordan King",
            vitorias: "5 / 131",
            podios: "24 / 131",
            poles: "11 / 131",
        
            
        },
        {
            logo: "/imgs/Logo-Times/JaguarRacing.webp",
            nome: "Jaguar TCS Racing",
            pais: "/imgs/Bandeiras/ing.svg",
            pais_nome: "Reino Unido",
            foto_piloto_1: "/imgs/Fotos-Pilotos/Mitch Evans.webp",
            foto_piloto_2: "/imgs/Fotos-Pilotos/Nick Cassidy.webp",
            nome_piloto_1: "Mitch Evans",
            nome_piloto_2: "Nick Cassidy",
            vitorias: "16/ 111",
            podios: "46 / 111",
            poles: "10 / 111",
      
        },
        {
            logo: "/imgs/Logo-Times/TAGHeuerPorsche.webp",
            nome: "TAG Heuer Porsche",
            pais: "/imgs/Bandeiras/ale.svg",
            pais_nome: "Alemanha",
            foto_piloto_1: "/imgs/Fotos-Pilotos/António Félix da Costa.webp",
            foto_piloto_2: "/imgs/Fotos-Pilotos/Pascal Wehrlein.webp",
            nome_piloto_1: "António Félix",
            nome_piloto_2: "Pascal Wehrlein",
            vitorias: "12 / 74",
            podios: "22 / 74",
            poles: "6 / 74" , 
          
        },
        {
            logo: "/imgs/Logo-Times/ds-penske.webp",
            nome: "DS Penske",
            pais: "/imgs/Bandeiras/chi.svg",
            pais_nome: "China",
            foto_piloto_1: "/imgs/Fotos-Pilotos/Jean-Eric Vergne.webp",
            foto_piloto_2: "/imgs/Fotos-Pilotos/Stoffel Vandoorne.jpeg",
            nome_piloto_1: "Jean-Eric",
            nome_piloto_2: "Stoffel V.",
            vitorias: "16 / 111",
            podios: "50 / 111",
            poles: "24 / 111",

        },
        {
            logo: "/imgs/Logo-Times/AndrettiAutosport.webp",
            nome: "Andretti Autosport",
            pais: "/imgs/Bandeiras/usa.svg",
            pais_nome: "Estados Unidos",
            foto_piloto_1: "/imgs/Fotos-Pilotos/Jake Dennis.webp",
            foto_piloto_2: "/imgs/Fotos-Pilotos/NormanNato.webp",
            nome_piloto_1: "Jake Dennis",
            nome_piloto_2: "Norman Nato",
            vitorias: "11 / 132 ",
            podios: "37 / 132",
            poles: "13 / 132",

        },
        {
            logo: "/imgs/Logo-Times/NissaneDams.webp",
            nome: "Nissan e.dams",
            pais: "/imgs/Bandeiras/jap.svg",
            pais_nome: "Japão",
            foto_piloto_1: "/imgs/Fotos-Pilotos/Caio-collet.webp",
            foto_piloto_2: "/imgs/Fotos-Pilotos/Oliver Rowland.webp",
            nome_piloto_1: "Caio Collet",
            nome_piloto_2: "Oliver Rowland",
            vitorias: "19 / 132",
            podios: "47 / 132",
            poles: "23 / 132",
    
        },
        {
            logo: "/imgs/Logo-Times/McLaren.webp",
            nome: "NEOM McLaren",
            pais: "/imgs/Bandeiras/ing.svg",
            pais_nome: "Reino Unido",
            foto_piloto_1: "/imgs/Fotos-Pilotos/Jake-Hugges.webp",
            foto_foto_piloto_2: "/imgs/Fotos-Pilotos/Sam Bird.png",
            nome_piloto_1: "Jake Hughes",
            nome_piloto_2: "Sam Bird",
            vitorias: "1 / 32",
            podios: "3 / 32",
            poles: "4 / 32",  

        },
        {
            logo: "/imgs/Logo-Times/EnvisionVirginRacing.webp",
            nome: "Envision Racing",
            pais: "/imgs/Bandeiras/ing.svg",
            pais_nome: "Reino Unido",
            foto_piloto_1: "/imgs/Fotos-Pilotos/Joel-Erikson.webp",
            foto_piloto_2: "/imgs/Fotos-Pilotos/Paul-Aron.webp",
            nome_piloto_1: "Joel Erikson",
            nome_piloto_2: "Paul Aron",
            vitorias: "16 / 132",
            podios: "53 / 132",
            poles: "15 / 132",

        
        },
        {
            logo: "/imgs/Logo-Times/Maserati_logo_2.svg",
            nome: "Maserati MSG Racing",
            pais: "/imgs/Bandeiras/ita.svg",
            pais_nome: "Italia",
            foto_piloto_1: "/imgs/Fotos-Pilotos/Maximilian Günther.webp",
            foto_piloto_2: "/imgs/Fotos-Pilotos/Jehan-Draubala.webp",
            nome_piloto_1: "Maximilian G.",
            nome_piloto_2: "Jehan Draubala",
            vitorias: "2 / 32",
            podios: "6 / 32",
            poles: "2 / 32",  

        },
        {
            logo: "/imgs/Logo-Times/AudiSportABTSchaeffler.webp",
            nome: "ABT CUPRA",
            pais: "/imgs/Bandeiras/ale.svg",
            pais_nome: "Alemanha",
            foto_piloto_1: "/imgs/Fotos-Pilotos/Kelvin-Van-Der-L.webp",
            foto_piloto_2: "/imgs/Fotos-Pilotos/Lucas-di-Grassi.webp",
            nome_piloto_1: "Kevin van der L.",
            nome_piloto_2: "Lucas di Grassi",
            vitorias: "14 / 115",
            podios: "47 / 115",
            poles: "6 / 115",

        },
        
       
    ]   

    return(
        <EquipeStats dados={informacoes}/>       
    )
}

export default infoEquipes;