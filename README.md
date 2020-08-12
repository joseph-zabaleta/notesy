# Class 01-04: Notesy - Node Ecosystem

## Overview
Notesy is a multi-day build of a command-line (Terminal Based) note taking application.

Current Phase: Phase 3
Total Phases: 4

---

## Implementation Notes:
1. Clone repo
2. Npm install
3. node index.js [some flag]
    - `-a` or `-add`
---

## Feature Tasks and Requirements

### Phase 1 Requirements:
For the first phase, our notes application will accept and validate the user’s input, and confirm that the note was valid.
- [x] As a user, I want to be able to call the application using command line standard syntax, indicating the text of a note I wish to add so that the system will eventually be able to save this note.
- [x] As a user, I expect that the application will confirm my intent.

#### Technical Requirements / Notes:

- [x] Write this application in JavaScript as a Node.js application
- [x] The application must be able to parse command line arguments
    - Example:
        - The `--add` (or `-a`) is used to tell your application that the user wants to ADD a new note.
        - All of the text following the `-a`, within quotes is the text of the note itself.
- [x] If the user doesn't provide a valid argument (`-a`), show them an error.
- [x] If the user specifies the flag, but doesn't provide any text, show them an error.
- [x] Otherwise, display a confirmation of the note text that they specified.

`index.js`:
- [x] Requires the library files you will be writing (input, notes)
- [x] Instantiates an instance of an "Input" parser module
    - Parses the command line input and returns the command and data
- [x] Passes the command to the Notes library, which executes the command

`lib/input.js`:
- [x] Exports a constructor function
- [x] Uses `minimist` (or any other node/npm library of your choosing) to read command line arguments
- [x] On instantiation, evaluates and validates the input
    - is the command (i.e. '--add') a valid command
    - is there data associated with the command
- [x] Returns an instance containing the action to perform and the payload for the action

`lib/notes.js`:
- [x] Exports a constructor function
- [x] Has a prototype method called `execute()` that executes that correct operation
- [x] Write a prototype method called `add()` that will create an object representing a node (with an ID and the note text as properties) and console.log the text of the note to be added when the `add` command is executed.

---

### Phase 2 Requirements:

From a business/user perspective, the requirements remain unchanged from the previous lab:

Our notes application will accept and validate the user’s input, and confirm that the note was valid.
- [x] As a user, I want to be able to call the application using command line standard syntax, indicating the text of a note I wish to add so that the system will eventually be able to save this note.
- [x] As a user, I expect that the application will confirm my intent.

#### Technical Requirements / Notes:

- [x] Refactor your previous work by re-implementing both the `Input` and `Notes` library modules as proper ES6 Classes
- [x] Using the jest framework, write tests to assert that your application is working correctly.
    - [x] As noted in the Application Requirements document, tests must be in the `__tests__` folder
    - [x] Make sure that your package.json file is setup with a test script
    - [x] For the `input` module tests, you will need to assert the following:
        - Given a good input:
            - [x] The Class’ `valid()` method returns true
            - [x] The input module creates a new instance with both action and payload properties
        - Given invalid input:
            - [x] The Class’ `valid()` method returns false
    - [x] For the `notes` module tests, you will need to assert the following:
        - [x] Nothing is logged to the console if there was no command given
        - [x] If the command (add) and data (the note) were both valid, assert that the console shows the output.

### Phase 3 Requirements:
We will be extending the functionality of the notes application by adding a persistence layer to allow users to save notes to a database, organize them into categories, view, and delete them.

- [] As a user, I want my notes to be saved in a database so that I can retrieve them later.
- [] As a user, I want to categorize my notes so that I can more easily find them.
- [] As a user, I want to be able to see a list of my notes so that I can manage them.
- [] As a user, I want to be able to delete a note

- [] When a user adds a new note, save it to the database
    - [] The application should display a confirmation message.

- [] Users should be able to list notes from the database.
    - [] All notes. `node notes.js --list`
    - [] Notes in a category. `node notes.js --list General`

- [] Users should be able to delete a single note.
    - [] Send the --delete arugment, with the id of the note to delete.

#### Techinical Requirements / Notes
- [] Create a mongoose schema called notes
    - [] The `notes` shema should have 2 properties
        - text (string, required)
        - category (string, required)

- [] Add "CRUD" functionality to the `notes.js` class
    - [] Bring in `mongoose` as a library.
    - [] Create a new method for each of the allowed commands.

## User Acceptance Tests
To run tests associated with this application do the following:
- From the root run `npm test`
- This will execute all tests, all tests are stored in `__tests__` directory.
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
