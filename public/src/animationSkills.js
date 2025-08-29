function checkSkillsVisibility() {
    const skillsSection = document.getElementById("skills");
    const skills = document.getElementById("skills-list");
    const skillsPosition = skillsSection.getBoundingClientRect();

    // Verifica se a seção de skills entrou na tela
    if (skillsPosition.top <= window.innerHeight && skillsPosition.bottom >= 0) {
      skills.classList.add("show");
      
      // Adiciona as classes para mostrar as habilidades com delay
      const skillItems = document.querySelectorAll('.items-list-skills');
      skillItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('show');
        }, index * 200); // Delay de 200ms entre cada item
      });
    }
}

  // Detecta o evento de rolagem
  window.addEventListener("scroll", checkSkillsVisibility);
  checkSkillsVisibility();  // Verifica na primeira carga