// le module yargs permet de gérer facilement les arguments fournis
// à l'app au moment de l'exécution
const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs.command('add', 'Ajouter une note', {
    title: {
       describe: 'Titre de la note',
       alias: 't',
       required: true
    }
}).argv;

let cmd = argv._[0];

if (cmd == 'list') {
    console.log('*** Liste des notes enregistrées ***');
    let list = notes.fetchNotes(); // récupère un tableau d'objets note
    list.forEach(note => {
        console.log(note.title); // lecture la prop title de l'objet note
    })
} else if (cmd == 'add') {
    let result = notes.addNote(argv.title);
    if (result) {
        console.log('=> Note enregistrée');
    } else {
        console.log(
            '=> Enregistrement interdit, le titre ' + argv.title + ' existe déjà');
    }  
} else if (cmd == 'edit') {
    let result = notes.editNote(argv.title, argv.newTitle);
    if (result) {
        console.log('=> Note mise à jour');
    } else {
        console.log('=> Aucune portant ce titre n\'a été trouvée');
    }
}


