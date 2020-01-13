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
//console.log(cmd);

if (cmd == 'list') {
    console.log('*** Liste des notes enregistrées ***');
    let list = notes.fetchNotes(); // récupère un tableau d'objets note
    list.forEach(note => {
        console.log(note.title); // lecture la prop title de l'objet note
    })

}


