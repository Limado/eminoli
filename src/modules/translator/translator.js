import Translator from "../../vendor/en-translator/translator.js";
import SPA from "./resources/SPA.js";
import ENG from "./resources/ENG.js";

const initializeTranslator = () => {
    // Initialize translator.
    const $T = new Translator({
        resources: "./assets/js/resources/",
        languaje: SPA,
    });
    // Translate

    $("#btnLanguaje").click(function(e) {
        e.preventDefault();
        const isTranslating = $(this).attr('translating');
        if (isTranslating) return;
        let lang = $("#languaje").html();
        $(this).attr('translating', true);
        if (lang == "Español") {
            $("#languaje").html("English");
            $T.setLanguaje(SPA);
        } else {
            $("#languaje").html("Español");
            $T.setLanguaje(ENG);
        }
        setTimeout(() => { $("#btnLanguaje").removeAttr('translating') }, 2000);
    });
}

export default initializeTranslator;