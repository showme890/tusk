'use strict';
const electron = require('electron');

const {ipcRenderer: ipc} = electron;

ipc.on('new-note', () => {
  // Create new note
  document.querySelector('#gwt-debug-Sidebar-newNoteButton').click();
});

ipc.on('focus-mode', () => {
  // Toggle focus mode
  document.querySelector('#gwt-debug-NoteAttributes-focusButton').click();
});

ipc.on('exit-focus-mode', () => {
  // Exit focus mode
  document.querySelector('#gwt-debug-NoteAttributes-doneButton').click();
});
