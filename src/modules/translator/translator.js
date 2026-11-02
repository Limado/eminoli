import Translator from "../../vendor/en-translator/translator.js";
import SPA from "./resources/SPA.js";
import ENG from "./resources/ENG.js";

const initializeTranslator = () => {
    let language = sessionStorage.getItem("T_Language") || "SPA";
    let resources = language === "ENG" ? ENG : SPA;
    sessionStorage.setItem("T_Language", language);

    const getResourceValue = (key) => resources.resources.find((resource) => resource.key === key)?.value;
    const applyDocumentMetadata = () => {
        document.documentElement.lang = resources.languaje === "ENG" ? "en" : "es";
        document.title = getResourceValue("document_title");
        document.querySelector('meta[name="description"]')?.setAttribute("content", getResourceValue("meta_description"));
        document.querySelector('meta[property="og:title"]')?.setAttribute("content", getResourceValue("document_title"));
        document.querySelector('meta[property="og:description"]')?.setAttribute("content", getResourceValue("meta_description"));
        document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", getResourceValue("document_title"));
        document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", getResourceValue("meta_description"));
        document.querySelector('meta[property="og:locale"]')?.setAttribute("content", resources.languaje === "ENG" ? "en_US" : "es_AR");
    };

    const $T = new Translator({
        resources: "./assets/js/resources/",
        languaje: resources,
    });
    applyDocumentMetadata();

    $("#btnLanguaje")?.click(function (e) {
        e.preventDefault();
        const isTranslating = $(this).attr('translating');
        if (isTranslating) return;
        $(this).attr('translating', true);
        resources = resources.languaje === "SPA" ? ENG : SPA;
        sessionStorage.setItem("T_Language", resources.languaje);
        $("#languaje").html(resources.languaje === "SPA" ? "English" : "Español");
        $T.setLanguaje(resources);
        applyDocumentMetadata();
        setTimeout(() => { $("#btnLanguaje").removeAttr('translating') }, 2000);
    });
}

export default initializeTranslator;
