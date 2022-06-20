import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {getNotes} from '../../data';
import './Portafolio.css';

const Portafolio = () => {
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
                        
                        <h3>{note.title}</h3>
                        <h4>{note.description}</h4>
                        <Link to={`/portafolio/${note.title}`}>Ver</Link>
                    </li>
                ))
            }
        </ul>
    )

    const renderNote = (notes) => (
        <ul className = "Lista">
            {
                notes.map((note,key)=>(
                    <li key={key} className='boxes'>
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
            <h1>Portafolio</h1>
            {renderNotes(notes)}
        </div>
    );
};

export default Portafolio;