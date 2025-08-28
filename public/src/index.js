const translateBtn = document.getElementById('translate');
const buttonContainer = document.getElementById('button-container');

async function carregarJson() {
    const response = await fetch('./src/scripts.json');
    if (!response.ok) throw new Error('Não foi possível carregar traduções');
    return await response.json();
}

translateBtn.addEventListener('click', async () => {
    const texts = await carregarJson();
    const lang = translateBtn.getAttribute('trans') === 'pt' ? 'en' : 'pt';
    translateBtn.setAttribute('trans', lang);
    buttonContainer.style.backgroundColor = lang === 'en' ? '#4CAF50' : '#555555';

    const map = texts[lang];

    document.querySelectorAll('.saibamais').forEach(el => {
        el.textContent = map.saibaMais;
    });

    document.getElementById('title-service1').textContent = map.titleService1;
    document.getElementById('title-service2').textContent = map.titleService2;
    document.getElementById('title-service3').textContent = map.titleService3;
    document.getElementById('title-service4').textContent = map.titleService4;
    document.getElementById('title-service5').textContent = map.titleService5;
    document.getElementById('title-service6').textContent = map.titleService6;

    document.getElementById('btn-projects').textContent = map.btnProjects;
    document.getElementById('btn-fale-comigo').textContent = map.btnFaleComigo;
    document.getElementById('menuHome').textContent = map.menuHome;
    document.getElementById('menuAbout').textContent = map.menuAbout;
    document.getElementById('menuProjects').textContent = map.menuProjects;
    document.getElementById('miniTittleAbout').textContent = map.miniTittleAbout;
    document.getElementById('apresentacao').textContent = map.apresentacao;
    document.getElementById('aboutTextOne').textContent = map.aboutTextOne;
    document.getElementById('miniTittleOne').textContent = map.miniTittleOne;
    document.getElementById('mySkills').textContent = map.mySkills;
    document.getElementById('skillsText').textContent = map.skillsText;
    document.getElementById('miniTittleTwo').textContent = map.miniTittleTwo;
    document.getElementById('myServices').textContent = map.myServices;
    document.getElementById('descricaoOne').textContent = map.descricaoOne;
    document.getElementById('descricaoTwo').textContent = map.descricaoTwo;
    document.getElementById('descricaoThree').textContent = map.descricaoThree;
    document.getElementById('descricaoFour').textContent = map.descricaoFour;
    document.getElementById('descricaoFive').textContent = map.descricaoFive;
    document.getElementById('descricaoSix').textContent = map.descricaoSix;
    document.getElementById('miniTittleThree').textContent = map.miniTittleThree;
    document.getElementById('myProjects').textContent = map.myProjects;
    document.getElementById('sendMessage').textContent = map.sendMessage;
    document.getElementById('textMessage').textContent = map.textMessage;
    document.querySelector('#footer .text').textContent = map.footerTagline;
    document.getElementById('fastlinks').textContent = map.quickLinks;
    document.querySelector('#footer .contact-container p').textContent = map.copyright;
});


const btn = document.querySelector('.hamburger');

btn.addEventListener('click', () => {
  btn.classList.toggle('is-active');
});
