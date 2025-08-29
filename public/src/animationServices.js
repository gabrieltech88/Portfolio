function checkServicesVisibility() {
    const servicesSection = document.getElementById("skills");
    const servicesCards = document.querySelectorAll('.items-list-services');
    const servicesPosition = servicesSection.getBoundingClientRect();
  
    if (servicesPosition.top <= window.innerHeight && servicesPosition.bottom >= 0) {
      servicesCards.forEach((card, index) => {
        // Aplica a classe 'show' com um delay para cada card
        setTimeout(() => {
          card.classList.add('show');
        }, index *10); // 200ms entre os cards
      });
    }
  }
  
  // Detecta o evento de rolagem e verifica se a seção de serviços está visível
  window.addEventListener("scroll", checkServicesVisibility);
  checkServicesVisibility();  // Verifica na primeira carga