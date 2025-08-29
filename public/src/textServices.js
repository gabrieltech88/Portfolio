document.addEventListener("DOMContentLoaded", () => {
    ajustarDescricoesParaMobile();
})


function ajustarDescricoesParaMobile() {
    const isMobile = window.innerWidth < 450;

    const descricoesCurtas = {
        descricaoOne: "Sites responsivos, modernos e rápidos para sua presença online.",
        descricaoTwo: "Softwares sob medida para sua empresa ou projeto.",
        descricaoThree: "Criação e integração de APIs escaláveis e seguras.",
        descricaoFour: "Apps Android e iOS funcionais e intuitivos.",
        descricaoFive: "Automatização com IA para poupar tempo e aumentar eficiência.",
        descricaoSix: "Proteja seus sistemas com segurança e testes automatizados."
    };

    const descricoesOriginais = {
        descricaoOne: "Criação de sites responsivos, modernos e visualmente atraentes, feitos sob medida para fortalecer sua presença online, engajar seu público-alvo de forma eficaz e garantir desempenho fluido em todos os dispositivos e navegadores",
        descricaoTwo: "Criação de soluções de software personalizadas e de alta qualidade, projetadas para atender às suas necessidades específicas desde ferramentas desktop robustas até sistemas empresariais completos oferecendo confiabilidade e escalabilidade para suas operações",
        descricaoThree: "Serviços de criação e integração de APIs, desenvolvendo APIs personalizadas e conectando-as de forma fluida aos seus sistemas existentes. Garanto trocas de dados seguras, escaláveis e eficientes, otimizando seu ecossistema digital e ampliando a funcionalidade como um todo",
        descricaoFour: "Desenvolvimento de aplicativos móveis inovadores e fáceis de usar para plataformas Android e iOS, transformando suas ideias em soluções funcionais e envolventes, acessíveis a qualquer hora e em qualquer lugar nos dispositivos dos usuários",
        descricaoFive: "Implementação de soluções de automação com o uso de inteligência artificial, desenvolvendo scripts inteligentes e ferramentas avançadas para eliminar tarefas repetitivas, otimizar a eficiência operacional, economizar tempo valioso e aumentar significativamente a produtividade dos seus projetos",
        descricaoSix: "Ofereço serviços de implementação de segurança e testes automatizados para proteger e otimizar seus sistemas. Desenvolvo medidas de segurança personalizadas e scripts de teste para garantir proteção robusta e alto desempenho"
    };

    for (let id in descricoesCurtas) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.textContent = isMobile ? descricoesCurtas[id] : descricoesOriginais[id];
        }
    }
}


// Chama ao carregar


// Atualiza ao redimensionar
window.addEventListener('resize', ajustarDescricoesParaMobile);