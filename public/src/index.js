const translate = document.getElementById('translate');


translate.addEventListener("click", async () => {
    const idioma = await carregarJson();
    console.log(idioma)

    if(translate.getAttribute("trans") == "pt") {
        translate.setAttribute("trans", "en")
        document.getElementById("apresentacao").innerText = idioma.pt.apresentacao
        
    } else {
        translate.setAttribute("trans", "pt")
        document.getElementById("apresentacao").innerText = idioma.en.apresentacao
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
