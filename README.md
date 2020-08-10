# Class 01-04: Notesy - Node Ecosystem

### Open Git Pull Requests

---

## Overview
Notesy is a multi-day build of a command-line (Terminal Based) note taking application.

---

## Implementation Notes:

This is where I plan to define how to run this application

---

## Feature Tasks and Requirements

### Phase 1 Requirements:
For the first phase, our notes application will accept and validate the user’s input, and confirm that the note was valid.
- [] As a user, I want to be able to call the application using command line standard syntax, indicating the text of a note I wish to add so that the system will eventually be able to save this note.
- [] As a user, I expect that the application will confirm my intent.

---

### Technical Requirements / Notes:

- [] Write this application in JavaScript as a Node.js application
- [] The application must be able to parse command line arguments
    - Example:
        - The `--add` (or `-a`) is used to tell your application that the user wants to ADD a new note.
        - All of the text following the `-a`, within quotes is the text of the note itself.
- [] If the user doesn't provide a valid argument (`-a`), show them an error.
- [] If the user specifies the flag, but doesn't provide any text, show them an error.
- [] Otherwise, display a confirmation of the note text that they specified.

`index.js`:
- [] Requires the library files you will be writing (input, notes)
- [] Instantiates an instance of an "Input" parser module
    - Parses the command line input and returns the command and data
- [] Passes the command to the Notes library, which executes the command

`lib/input.js`:
- [] Exports a constructor function
- [] Uses `minimist` (or any other node/npm library of your choosing) to read command line arguments
- [] On instantiation, evaluates and validates the input
    - is the command (i.e. '--add') a valid command
    - is there data associated with the command
- [] Returns an instance containing the action to perform and the payload for the action

`lib/notes.js`:
- [] Exports a constructor function
- [] Has a prototype method called `execute()` that executes that correct operation
- [] Write a prototype method called `add()` that will create an object representing a node (with an ID and the note text as properties) and console.log the text of the note to be added when the `add` command is executed.

---

## User Acceptance Tests


---

## Authors
- Software Developer: Joseph Zabaleta
  - [Official Github](https://github.com/joseph-zabaleta)


---

## Collaborations
- none

---

## License
This project is under the MIT License.

---

## Acknowledgements / Resources
- none
