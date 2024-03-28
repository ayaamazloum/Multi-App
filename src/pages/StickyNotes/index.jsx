import './style.css';

import { useEffect, useState } from "react";

const StickyNotes = () => {

    const [notes, setNotes] = useState();
    const [newText, setNewText] = useState("");

    const addNote = () => {
        setNotes([...notes, { id: notes.length, text: "New Note!", editing: false }]);
        localStorage.setItem('notes', JSON.stringify(notes));
    };

    const startEditing = (index) => {
        const newNotes = [...notes];
        newNotes[index] = { ...newNotes[index], editing: true };
        setNotes(newNotes);
        console.log(notes)
    };

    const saveNote = (index) => { 
        const newNotes = [...notes];
        newNotes[index] = { id: index, text: newText, editing: false };
        setNotes(newNotes);
        localStorage.setItem('notes', JSON.stringify(notes));
    };

    const deleteNote = (id) => { 
        const newNotes = notes.filter(note => note.id !== id);
        setNotes(newNotes);
        localStorage.setItem('notes', JSON.stringify(notes));
    };

    useEffect(() => {
        //localStorage.setItem("notes", JSON.stringify([{ id: 0, text: "New Note!", editing: false },{ id: 1, text: "New Note!", editing: false },{ id: 2, text: "New Note!", editing: false },{ id: 3, text: "New Note!", editing: false }]));
        setNotes(JSON.parse(localStorage.getItem("notes")));
    }, []);

    return (
        <div className='notes-page full-width full-height'>
            <svg onClick={addNote} className="add-icon lucide lucide-file-plus-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M3 15h6"/><path d="M6 12v6"/></svg>
            
            {notes?.map((note, index) => {
                return (
                    <div key={note.id} className='note'>
                        <div className="note-content full-height full-width">
                            {note.editing && <input onChange={(e) => setNewText(e.target.value)} className='text-input' type='text' defaultValue={note.text} />}
                            {!note.editing && <p>{note.text}</p>}
                            {!note.editing && <svg onClick={() => startEditing(index)} className="edit-icon lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>}
                            {note.editing && <svg onClick={() => saveNote(index)} className="save-icon lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>}
                            <svg onClick={() => deleteNote(note.id)} className="delete-icon lucide lucide-trash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                        </div>
                    </div>
                );
            })}

        </div>
    );
}

export default StickyNotes;