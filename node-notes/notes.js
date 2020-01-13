const fs = require('fs'); // module natif filesystem

const fetchNotes = () => {
    let notes = fs.readFileSync('notes-data.json');
    return JSON.parse(notes);
};

const addNote = (title) => {

};

const saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', 
        JSON.stringify(notes))
}

saveNote([{title: "fqdfsdfsd"}, {title: "papa"}])

module.exports = { fetchNotes };