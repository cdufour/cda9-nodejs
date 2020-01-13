// le module yargs permet de gérer facilement les arguments fournis
// à l'app en ligne de commande
const yargs = require('yargs');
const notes = require('./notes');

const titleOptions = {
    describe: 'Titre de la note',
    alias: 't',
    required: true
};

const argv = yargs
.command('add', 'Ajouter une note', {
    title: titleOptions
})
.command('remove', 'Supprimer une note', {
    title: titleOptions
})
.command('list', 'Afficher la liste de notes')
.command('edit', 'Mettre une note à jour', {
    title: titleOptions,
    newTitle: {
        describe: 'Nouveau titre de la note',
        alias: 'n',
        required: true
    }
})
.help()
.argv;

let cmd = argv._[0]; // récupère le nom de la commande

if (cmd == 'list') {
    console.log('*** Liste des notes enregistrées ***');
    let list = notes.fetchNotes(); // récupère un tableau d'objets note
    list.forEach(note => {
        console.log(note.title); // lecture la prop title de l'objet note
    })
} else if (cmd == 'add') {
    let result = notes.addNote(argv.title);
    if (result) {
        console.log('[+] Note enregistrée');
    } else {
        console.log(
            '[-] Enregistrement interdit, le titre ' + argv.title + ' existe déjà');
    }  
} else if (cmd == 'edit') {
    let result = notes.editNote(argv.title, argv.newTitle);
    if (result) {
        console.log('[+] Note mise à jour');
    } else {
        console.log('[-] Aucune note portant ce titre n\'a été trouvée');
    }
} else if (cmd == 'remove') {
    let result = notes.removeNote(argv.title);
    if (result) {
        console.log('[+] Note supprimée');
    } else {
        console.log('[-] Aucune note portant ce titre n\'a été trouvée');
    }
} else {
    console.log('[-] Commande non reconnue');
}


