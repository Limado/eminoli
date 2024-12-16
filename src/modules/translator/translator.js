import Translator from "../../vendor/en-translator/translator.js";
import SPA from "./resources/SPA.js";
import ENG from "./resources/ENG.js";

const initializeTranslator = () => {
    // Initialize translator.
    let language = "SPA";
    let resources = SPA;
    if (language = sessionStorage.getItem("T_Language")) {
        if (language == "SPA")
            resources = SPA
        else
            resources = ENG
    } else {
        sessionStorage.setItem("T_Language", "SPA");
    }
    const $T = new Translator({
        resources: "./assets/js/resources/",
        languaje: resources,
    });
    // Translate

    $("#btnLanguaje")?.click(function (e) {
        e.preventDefault();
        const isTranslating = $(this).attr('translating');
        if (isTranslating) return;
        let lang = $("#languaje").html();
        $(this).attr('translating', true);
        if (lang == "Español") {
            $("#languaje").html("English");
            sessionStorage.setItem("T_Language", "SPA");
            $T.setLanguaje(SPA);
        } else {
            $("#languaje").html("Español");
            sessionStorage.setItem("T_Language", "ENG");
            $T.setLanguaje(ENG);
        }
        setTimeout(() => { $("#btnLanguaje").removeAttr('translating') }, 2000);
    });
}

export default initializeTranslator;