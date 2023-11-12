// Filename: m6a1.js  Author: Dylan Raguseo   Date: 11/12/2023

// Get browser information
function browserTest() {
    const browserInfo = {
        'Browser Version': navigator.userAgent,
        'Browser Cookies Enabled': navigator.cookieEnabled,
        'Language': navigator.language,
        'Browser Online': navigator.onLine,
        'Browser Platform': navigator.header,
        'Browser Tracking': navigator.doNotTrack
    };

    // Display browser information in the "output" div
    displayResults(browserInfo, "Browser Information");
}

// Check for HTML5 features support
function htmlFeatureTest() {
    // List of HTML5 features to check
    const html5Features = {
        'Search boxes': isFeatureSupported('search'),
        'Spinboxes': isFeatureSupported('step'),
        'Sliders': isFeatureSupported('max'),
        'Color pickers': isFeatureSupported('color'),
        'Telephone numbers': isFeatureSupported('tel'),
        'Web addresses': isFeatureSupported('url'),
        'Email addresses': isFeatureSupported('email'),
        'Calendar data pickers': isFeatureSupported('date'),
        'Months': isFeatureSupported('month'),
        'Weeks': isFeatureSupported('week'),
        'Timestamps': isFeatureSupported('time'),
        'Precise datetime stamps': isFeatureSupported('datetime'),
        'Local dates and times': isFeatureSupported('datetime-local')
    };

    // Display HTML5 feature support in the "output" div
    displayResults(html5Features, "HTML Feature Test");
}

// Helper function to check feature support
function isFeatureSupported(feature) {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', feature);
    return inputElement.type === feature ? "Yes" : "No";
}

// Display screen resolution
function screenResolution() {
    const resolution = {
        Width: screen.width,
        Height: screen.height
    };

    // Display screen resolution in the "output" div
    displayResults(resolution, "Mobile Screen Resolution");
}

// Display screen orientation
function screenOrientation() {
    const orientation = {
        Orientation: screen.orientation.type
    };

    // Display screen orientation in the "output" div
    displayResults(orientation, "Mobile Screen Orientation");
}

// Test general canvas support
function generalSupport() {
    const canvasSupport = {
        'Canvas support': !!document.createElement('canvas').getContext
    };

    // Display canvas support in the "output" div
    displayResultsNoList(canvasSupport, "Canvas General Support");
}

//Test canvas text support
function textSupport() {
    // Clear previous content
    clearOutput();
    clearCanvas();
    
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const textSupport = !!context && typeof context.fillText === 'function';

    // Display new header
    document.getElementById('heading').innerHTML = '<h1>Canvas Text Support</h1>';

    // Display text support status in the "output" div without the label
    const paragraph = document.createElement('p');
    paragraph.textContent = textSupport ? 'This browser supports canvas text' : 'This browser does not support canvas text';
    document.getElementById('output').appendChild(paragraph);
}

// Draw an image on the canvas
function drawCanvas() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions to match the viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create an image object
    const img = new Image();
    img.src = 'irsc.gif';

    // When the image is loaded, draw it on the canvas
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Display draw canvas result in the "output" div
        displayResultsNoList(null, "Draw Canvas");
    };
}

// Clear Canvas 
function clearCanvas() {
    const canvas = document.getElementById('myCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// Clear output
function clearOutput() {
    document.getElementById('output').innerHTML = '';
}

// Updated displayResults function
function displayResults(data, header) {
    // Clear previous content
    clearOutput();
    clearCanvas();
    
    // Display new header
    document.getElementById('heading').innerHTML = `<h1>${header}</h1>`;

    // Create and display an unordered list for the results
    const ul = document.createElement('ul');
    for (const key in data) {
        const li = document.createElement('li');
        li.textContent = `${key}: ${data[key]}`;
        ul.appendChild(li);
    }
    document.getElementById('output').appendChild(ul);
}

function displayResultsNoList(data, header) {
    // Clear previous content
    clearOutput();
    data != null ? clearCanvas() : null;

    // Display new header
    document.getElementById('heading').innerHTML = `<h1>${header}</h1>`;

    // Display each key-value pair on its own line
    for (const key in data) {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${key}: ${data[key]}`;
        document.getElementById('output').appendChild(paragraph);
    }
}