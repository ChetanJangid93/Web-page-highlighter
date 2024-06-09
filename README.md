# Web Page Highlighter Chrome Extension

This Chrome extension allows users to highlight text on any webpage and attach notes to those highlights. The highlights and notes are stored locally and persist even after the browser is closed or the page is reloaded. Users can also export the highlights and notes to a PDF file for offline reference.

## Features

- **Text Highlighting:** Highlight any text on a webpage with different colors.
- **Persistent Highlights:** Highlights remain intact even after reloading the page or closing the browser.
- **Attach Notes:** Attach notes to each highlight for additional context or information.
- **Modify Notes:** Easily modify or update notes directly on the webpage.
- **Remove Highlights:** Remove any highlight and its associated note with a single click.
- **Export to PDF:** Export all highlights and notes to a PDF file for offline viewing and reference.
- **Highlight Filters:** Apply filters to only see highlights of specific colors.

## Installation

1  Clone the repository or download the ZIP file.
   ```bash
   git clone https://github.com/ChetanJangid93/web-page-highlighter.git
2  Open Chrome and navigate to chrome://extensions/.
3  Enable "Developer mode" by toggling the switch in the top-right corner.
4  Click "Load unpacked" and select the directory where you cloned/downloaded the extension.

Usage
1 Highlight Text
2 Select the text you want to highlight.
3 A popup will appear allowing you to enter a note. Enter the note and click "Save" or click "Cancel" to save without a note.
4 The text will be highlighted with the selected color.

Modify Notes
1 Click on any highlighted text to open the note popup.
2 Modify the note as needed and click "Save".

Remove Highlights
1 Click on any highlighted text to open the note popup.
2 Click the "Remove Highlight" button to remove the highlight and its note.

Apply Highlight Filters
1 Click the extension icon in the Chrome toolbar.
2 Select the colors you want to filter by. Only highlights of the selected colors will be visible.

Export to PDF
1 Click the extension icon in the Chrome toolbar.
2 Select "Export to PDF" to download a PDF file containing all highlights and notes.

Development

content.js
The content.js file contains the main logic for highlighting text, attaching notes, and managing highlights. Key functions include:

- showNoteInputPopup(): Displays a popup to enter or modify notes.
- saveHighlight(): Saves the highlight and note data to Chrome's local storage.
- loadHighlights(): Loads highlights from local storage and applies them to the page.
- applyHighlight(): Highlights the text on the page based on stored data.
- removeHighlight(): Removes the highlight and its note from the page and storage.
- exportHighlightsToPDF(): Exports all highlights and notes to a PDF file.

manifest.json
The manifest.json file defines the extension's permissions, background scripts, and other metadata.
