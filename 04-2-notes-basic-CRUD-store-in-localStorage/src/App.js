import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { nanoid } from "nanoid"

export default function App() {
    /**
    1. Initial notes state is loaded from localStorage - lazy initialization, only once
    2. As we create new note, our program maintains/updates state of [notes] array locally...
    3. ... while at the same time we write it in localStorage each time [notes] array 
    changes with useEffect() because of dependancy array [notes]. 
    This way we don't need to read our DB/localStorage each time state changes and App is re-rendered
    4. Once a note has been updated it needs to be unshift()-ed in the new array, the rest are just push()-ed
    5. Updating and deleting is synced with locaStorage data too, i.e. [notes] array changes -> effect runs    
     */

    //Lazy initialization (runs only first render) by providing callback function rather variable
    const [notes, setNotes] = React.useState(
        () => {
            console.log("notes state initilaized")
            return JSON.parse(localStorage.getItem("notes")) || []
        }
    )

    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    // console.log("Parsed:", JSON.parse(localStorage.getItem("notes")))

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }

    function updateNote(text) {
        /* Thi beautiful commented out function remaps our notes, if the id === currentNoteId, body is overwritten, otherwise we just place the item as it is
        Then state is updated with the newly create array
        However we need to place the updated item at index 0 in the array, the refactored function is below the beautiful one */
        // setNotes(oldNotes => oldNotes.map(oldNote => {
        //     return oldNote.id === currentNoteId
        //         ? { id: oldNote.id, body: text }        // unexpected token error when using {... oldNote, body: text}, must be babel incompatability
        //         : oldNote
        // }))
        setNotes(oldNotes => {
            let newNotes = []

            for (let n = 0; n < oldNotes.length; n++) {
                if (oldNotes[n].id !== currentNoteId) {
                    newNotes.push(oldNotes[n])
                } else {
                    newNotes.unshift({
                        id: oldNotes[n].id,
                        body: text
                    })
                }
            }
            return newNotes
        })
    }


    function deleteNote(event, noteId) {
        event.stopPropagation()
        // event should not propagate to parent because parent (the note itself) also has an event listener attached
        // in Sidebar.js - onClick which selects the clicked note
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
        // in the new array include only items whose id !== clicked note id 
    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={notes}
                            currentNote={findCurrentNote()}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            delNote={deleteNote}
                        />
                        {
                            currentNoteId &&
                            notes.length > 0 &&
                            <Editor
                                currentNote={findCurrentNote()}
                                updateNote={updateNote}
                            />
                        }
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                        </button>
                    </div>

            }
        </main>
    )
}
