const dico = [
    { 
        fr: 'Merci', 
        en: 'Thanks', 
        it: 'Grazie', 
        ro: 'Multumesc' 
    },
    { 
        fr: 'Bonjour', 
        en: 'Good morning', 
        it: 'Buongiorno', 
        ro: 'Buna ziua' 
    },
    { 
        fr: 'Au revoir', 
        en: 'Good bye', 
        it: 'Arrivederci', 
        ro: 'La revedere' 
    },
];

const getTranslation = (word, lang) => {
    for (var i=0; i<dico.length; i++) {
        if (dico[i].fr.toLowerCase() == word.toLowerCase()) {
            // retourne la traduction du mot dans la langue spécifiée
            return dico[i][lang]; 
        }
    }
    return false; // mot à traduire non trouvé
}

module.exports = { getTranslation };