// Import Reveal.js CSS
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

import Reveal from 'reveal.js';
import PluginNotes from "reveal.js/plugin/notes/notes.esm.js";

const transition = document.body.dataset.transition;

Reveal.initialize({
    plugins: [PluginNotes],
    transition: transition,
    backgroundTransition: transition,
    center: false,
    controls: true,
    maxScale: 1,
    minScale: 0.45,
    hash: true,
    hashOneBasedIndex: true,
    width: 1920,
    height: 1080,
    display: 'flex',
});