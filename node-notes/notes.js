const fs = require('fs'); // module natif filesystem

const fetchNotes = () => {
    let notes = fs.readFileSync('notes-data.json');
    return JSON.parse(notes); // renvoie tableau d'objets
};

const addNote = (title) => {
    let notes = fetchNotes();

    // éviter doublon. Seule une note ayant un titre identique
    // à celui fourni en entrée sera "pushed" dans duplicatedNotes
    let duplicatedNotes = 
        notes.filter(note => note.title == title);

    if (duplicatedNotes.length == 0) {
        // pas de doublon
        notes.push({title});
        saveNote(notes);
        return true;
    } else {
        // doublon trouvé
        return false;
    }
};

const editNote = (title, newTitle) => {
    let notes = fetchNotes();

    // itération sur les notes
    for (var i=0; i<notes.length; i++) {
        if (notes[i].title == title) {
            // note portant le même titre trouvée
            notes[i].title = newTitle; // mise à jour de l'objet note
            saveNote(notes); // écrasement du fichier json
            return true; // sortie de boucle prématurée par retour de fonction
        }
    }

    return false; // note portant le titre recherché non trouvée
};

const removeNote = (title) => {
    let notes = fetchNotes();

    // newNotes reçoit uniquement les notes ayant un titre de celui
    // fourni en entrée de la fonction
    let newNotes = notes.filter(note => note.title != title);

    saveNote(newNotes); // écrasement du fichier json

    // on retourne le résultat de l'évaluation booléenne
    // qui compare les longueurs des tableaux
    return notes.length != newNotes.length;

};

const saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', 
        JSON.stringify(notes))
};

module.exports = { fetchNotes, addNote, editNote, removeNote };