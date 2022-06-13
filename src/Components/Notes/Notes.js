import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {getNotes} from '../../data';
import './Notes.css';

const Notes = () => {
    let notes = getNotes();

    const {noteId} = useParams()

    const filterNotes = (id) => {
        let selectedNote = false;

        if(id > 0){
            selectedNote = notes.filter(
                note => note.id === Number(id)
            );
        }

        return selectedNote;
    }

    const renderNotes = (notes) => (
        <ul>
            {
                notes.map((note,key)=>(
                    <li key={key}>
                        <Link to={`/notes/${note.id}`}>Note {note.id}</Link>
                    </li>
                ))
            }
        </ul>
    )

    const renderNote = (notes) => (
        <ul>
            {
                notes.map((note,key)=>(
                    <li key={key}>
                        <Link to={`/notes/${note.id}`}>Note {note.id}</Link>
                        <h3>{note.title}</h3>
                        <h4>{note.description}</h4>
                    </li>
                ))
            }
        </ul>
    )

    const selectedNote = filterNotes(noteId)

    return (
        <div className="Notes">
            <h1>Notes</h1>
            {selectedNote? renderNote(selectedNote):renderNotes(notes)}
        </div>
    );
};

export default Notes;