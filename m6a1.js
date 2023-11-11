// Add your JavaScript functions here
function browserTest() {
    // Get browser information
    const browserInfo = {
        UserAgent: navigator.userAgent,
        AppName: navigator.appName,
        AppVersion: navigator.appVersion,
        Platform: navigator.platform,
        Language: navigator.language
    };

    // Display browser information in the "output" div
    displayResults(browserInfo, "Browser Information");
}

function htmlFeatureTest() {
    // Check for HTML5 features support
    const html5Features = {
        Search: 'search' in document.createElement('input'),
        Spinbox: 'step' in document.createElement('input'),
        Slider: 'max' in document.createElement('input'),
        ColorPicker: 'color' in document.createElement('input'),
        Telephone: 'tel' in document.createElement('input'),
        WebAddress: 'url' in document.createElement('input'),
        Email: 'email' in document.createElement('input'),
        Calendar: 'date' in document.createElement('input'),
        Month: 'month' in document.createElement('input'),
        Week: 'week' in document.createElement('input'),
        Timestamp: 'datetime' in document.createElement('input'),
        PreciseTimestamp: 'datetime-local' in document.createElement('input'),
        LocalDatetime: 'time' in document.createElement('input')
    };

    // Display HTML5 feature support in the "output" div
    displayResults(html5Features, "Compatible HTML5 Features");
}

function screenResolution() {
    // Display screen resolution
    const resolution = {
        Width: screen.width,
        Height: screen.height
    };

    // Display screen resolution in the "output" div
    displayResults(resolution, "Mobile Screen Resolution");
}

function screenOrientation() {
    // Display screen orientation
    const orientation = {
        Orientation: screen.orientation.type
    };

    // Display screen orientation in the "output" div
    displayResults(orientation, "Mobile Screen Orientation");
}

function generalSupport() {
    // Test general canvas support
    const canvasSupport = {
        GeneralSupport: !!document.createElement('canvas').getContext
    };

    // Display canvas support in the "output" div
    displayResults(canvasSupport, "Canvas General Support");
}

function textSupport() {
    // Test canvas text support
    const textSupport = {
        TextSupport: !!document.createElement('canvas').getContext && typeof document.createElement('canvas').getContext('2d').fillText === 'function'
    };

    // Display text support in the "output" div
    displayResults(textSupport, "Canvas Text Support");
}

function drawCanvas() {
    // Draw an image on the canvas
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Example: Draw a red rectangle
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Display draw canvas result in the "output" div
    displayResults({ DrawCanvas: 'Image drawn on canvas' }, "Draw Canvas");
}

// Updated displayResults function
function displayResults(data, header) {
    // Clear previous content
    document.getElementById('output').innerHTML = '';

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





/* 
Your menu should consist of the following 4 main menu items and their associated sub items.
The sub items should be accessible by way of a “drop down” item. These items should be
structured in you “nav” unordered list within your html document
a. Browser Test
b. HTML Feature Test
c. Mobile Tests
i. Screen Resolution
ii. Screen Orientation
d. Canvas Tests
i. General Support
ii. Text Support
iii. Draw Canvas
E. Each of your menu items should link to a JavaScript function when selected. For the sub-item
functionality, you may opt to direct these both to a single function with branching functionality,
or you may choose to split the functionality into multiple functions.
F. The functionality for each JavaScript function is as follows:
a. Browser Test
i. This function should access the browser’s navigator object to display pertinent
browser information using an unordered list.
ii. You should display at minimum 5 navigator browser properties:
https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent
iii. The function should identify the browsers info and then display it using the
“output” div.
iv. A new header line should be displayed in the “heading” div (Check sample
output for example)
b. HTML Feature Test
i. This function should be able to test the browser’s ability to use various HTML5
features.
ii. You should check for and display either a ‘Yes’ or ‘No’ for the for the following
features: Search boxes, Spinboxes, Sliders, Color pickers, Telephone numbers,
Web addresses, Email addresses, Calendar data pickers, Months, Weeks,
Timestamps, Precises date+time stamps, and Local dates and times.
iii. These feature options and their results should be displayed using an unordered
list. This list should then be display to an updated “output” div.
iv. A new header line should be displayed in the “heading” div (Check sample
output for example)
c. Mobile Tests
i. Screen Resolution
1. This function should display the width and height of the current device’s
screen to the “output” div.
2. A new header line should be displayed in the “heading” div (Check
sample output for example)
COP 2830 Advanced HTML M6A1 Assessment
ii. Screen Orientation
1. This function should display the orientation of the current devices
screen to the “output” div.
2. A new header line should be displayed in the “heading” div (Check
sample output for example)
d. Canvas Tests
i. General Support
1. This function should test the basic ability for the current browser to
create a HTML5 Canvas, and display a message stating the results to the
“output” div.
2. A new header line should be displayed in the “heading” div (Check
sample output for example)
ii. Text Support
1. This function should test the ability for the current browser to use
HTML5 Canvas Text, and display a message stating the results to the
“output” div.
2. A new header line should be displayed in the “heading” div (Check
sample output for example)
iii. Draw Canvas
1. This function should attempt draw an image to the “myCanvas”
element.
2. This image must be sized to fill the current dimensions of the screen
(height and width)
3. The image can be of your choosing, as long as it is appropriate.
4. A new header line should be displayed in the “heading” div (Check
sample output for example)
*/