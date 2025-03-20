const translate = document.getElementById('translate');
const buttonContainer = document.getElementById('button-container')


translate.addEventListener("click", async function () {
    
    const idioma = await carregarJson();
    console.log(idioma)
    
        if(translate.getAttribute("trans") == "pt") {
            translate.setAttribute("trans", "en")
            //translate.style.marginLeft = '30px';
            buttonContainer.style.backgroundColor = '#4CAF50';
            
            document.getElementById("apresentacao").innerText = idioma.pt.apresentacao
            document.getElementById("aboutTextOne").innerText = idioma.pt.aboutTextOne
            document.getElementById("aboutTextTwo").innerText = idioma.pt.aboutTextTwo
            document.getElementById("keySkills").innerText = idioma.pt.keySkills
            document.getElementById("mySkills").innerText = idioma.pt.mySkills
            document.getElementById("skillsText").innerText = idioma.pt.skillsText
            document.getElementById("myServices").innerText = idioma.pt.myServices
            document.getElementById("descricaoOne").innerText = idioma.pt.descricaoOne
            document.getElementById("descricaoTwo").innerText = idioma.pt.descricaoTwo
            document.getElementById("descricaoThree").innerText = idioma.pt.descricaoThree
            document.getElementById("descricaoFour").innerText = idioma.pt.descricaoFour
            document.getElementById("descricaoFive").innerText = idioma.pt.descricaoFive
            document.getElementById("descricaoSix").innerText = idioma.pt.descricaoSix
            document.getElementById("myProjects").innerText = idioma.pt.myProjects
            document.getElementById("sendMessage").innerText = idioma.pt.sendMessage
            document.getElementById("textMessage").innerText = idioma.pt.textMessage
            document.getElementById("aboutTittle").innerText = idioma.pt.aboutTittle
            
        } else {
            translate.setAttribute("trans", "pt")
            //translate.style.marginLeft = '0px';
            buttonContainer.style.backgroundColor = '#555555'
            document.getElementById("apresentacao").innerText = idioma.en.apresentacao
            document.getElementById("aboutTextOne").innerText = idioma.en.aboutTextOne
            document.getElementById("aboutTextTwo").innerText = idioma.en.aboutTextTwo
            document.getElementById("keySkills").innerText = idioma.en.keySkills
            document.getElementById("mySkills").innerText = idioma.en.mySkills
            document.getElementById("skillsText").innerText = idioma.en.skillsText
            document.getElementById("myServices").innerText = idioma.en.myServices
            document.getElementById("descricaoOne").innerText = idioma.en.descricaoOne
            document.getElementById("descricaoTwo").innerText = idioma.en.descricaoTwo
            document.getElementById("descricaoThree").innerText = idioma.en.descricaoThree
            document.getElementById("descricaoFour").innerText = idioma.en.descricaoFour
            document.getElementById("descricaoFive").innerText = idioma.en.descricaoFive
            document.getElementById("descricaoSix").innerText = idioma.en.descricaoSix
            document.getElementById("myProjects").innerText = idioma.en.myProjects
            document.getElementById("sendMessage").innerText = idioma.en.sendMessage
            document.getElementById("textMessage").innerText = idioma.en.textMessage
            document.getElementById("aboutTittle").innerText = idioma.en.aboutTittle
        }
}) 

async function carregarJson() {
    try {
        const dados = await fetch('./src/scripts.json', {
            method: "GET",
        })

        return dados.json()
    } catch {
        throw new Error("Não foi possível captar tradução")
    }
}
