/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Name: Lisa Moody
// Project: DSP EquityTech Screen reader
// Type: Google Chrome extension
// Page: popup.js
// Description: javascript page to give functionality to the buttons and drop downs on the pop up interface. 
// Last edited: 27/04/22  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//START
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Text to speech:

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TTS button for reading
document.addEventListener('DOMContentLoaded', function() {
    var startButton = document.getElementById('read');
    //Start reading button 
    startButton.addEventListener("click", async() => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: read,

        });
    });

}, false);

//Stop reading button 
document.addEventListener('DOMContentLoaded', function() {
    var stopButton = document.getElementById('stopReading');
    //Stop reading button 
    stopButton.addEventListener("click", async() => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: stopReading,

        });
    });

}, false);

// Reading the current page
function read() {
    // reading the paragraphs
    let paragraphs = document.getElementsByTagName('p');
    // Used a ES6 loop to  return the element itself rather than the index. Paragraphs as an array. 
    for (elt of paragraphs) {
        // start reading paragraphs
        const utterThis = new SpeechSynthesisUtterance(elt.innerText);
        //Language set to English 
        utterThis.lang = 'en-GB';

        const synth = window.speechSynthesis;
        //Speaks
        synth.speak(utterThis);
    }
}
// Stop button function 
function stopReading() {
    window.speechSynthesis.cancel()
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Colour overlay section:

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Blue overlay button
document.addEventListener('DOMContentLoaded', function() {
    var blueButton = document.getElementById('add-blue');
    //Even listener add to listen for clicks
    blueButton.addEventListener("click", async() => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setBluePageBackgroundColor,
        });
    });

}, false);


//   The body of this function will be executed as a content script inside the
//   current page
function setBluePageBackgroundColor() {
    // Need to get the selected colour here
    let paragraphs = document.getElementsByTagName('p');
    // Used a ES6 loop to  return the element itself rather than the index. Paragraphs as an array. 
    for (elt of paragraphs) {
        //Background colour being set
        elt.style['background-color'] = '#94c1f2';
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

// Green overlay button
document.addEventListener('DOMContentLoaded', function() {
    var greenButton = document.getElementById('add-green');

    greenButton.addEventListener("click", async() => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setPageBackgroundColor,
        });
    });

}, false);


//   The body of this function will be executed as a content script inside the
//   current page
function setPageBackgroundColor() {
    // Need to get the selected colour here
    let paragraphs = document.getElementsByTagName('p');
    // Used a ES6 loop to  return the element itself rather than the index. Paragraphs as an array. 
    for (elt of paragraphs) {
        //Background colour being set
        elt.style['background-color'] = '#74f2be';
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////

// Yellow overlay button
document.addEventListener('DOMContentLoaded', function() {
    var yellowButton = document.getElementById('add-yellow');

    yellowButton.addEventListener("click", async() => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setYellowPageBackgroundColor,
        });
    });

}, false);


//   current page
function setYellowPageBackgroundColor() {
    // Need to get the selected colour here
    let paragraphs = document.getElementsByTagName('p');
    // Used a ES6 loop to  return the element itself rather than the index. Paragraphs as an array. 
    for (elt of paragraphs) {
        //Background colour being set
        elt.style['background-color'] = '#f1fa8c';
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Red overlay button
document.addEventListener('DOMContentLoaded', function() {
    var redButton = document.getElementById('add-red');

    redButton.addEventListener("click", async() => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setRedPageBackgroundColor,
        });
    });

}, false);



// current page
function setRedPageBackgroundColor() {
    // Need to get the selected colour here
    let paragraphs = document.getElementsByTagName('p');
    // Used a ES6 loop to  return the element itself rather than the index. Paragraphs as an array. 
    for (elt of paragraphs) {
        //Background colour being set
        elt.style['background-color'] = '#f57f7f'; //#fc9a9a, 
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Orange overlay button
document.addEventListener('DOMContentLoaded', function() {
    var orangeButton = document.getElementById('add-orange');

    orangeButton.addEventListener("click", async() => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setOrangePageBackgroundColor,
        });
    });

}, false);


//   current page
function setOrangePageBackgroundColor() {
    // Need to get the selected colour here
    let paragraphs = document.getElementsByTagName('p');
    // Used a ES6 loop to  return the element itself rather than the index. Paragraphs as an array. 
    for (elt of paragraphs) {
        //Background colour being set
        elt.style['background-color'] = '#f78b63';
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pink overlay button
document.addEventListener('DOMContentLoaded', function() {
    var pinkButton = document.getElementById('add-pink');

    pinkButton.addEventListener("click", async() => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setPinkPageBackgroundColor,
        });
    });

}, false);


//   current page
function setPinkPageBackgroundColor() {
    // Need to get the selected colour here
    let paragraphs = document.getElementsByTagName('p');
    // Used a ES6 loop to  return the element itself rather than the index. Paragraphs as an array. 
    for (elt of paragraphs) {
        //Background colour being set
        elt.style['background-color'] = '#ff91ff';
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Purple overlay button
document.addEventListener('DOMContentLoaded', function() {
    var purpleButton = document.getElementById('add-purple');

    purpleButton.addEventListener("click", async() => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setPurplePageBackgroundColor,
        });
    });

}, false);


//   current page
function setPurplePageBackgroundColor() {
    // Need to get the selected colour here
    let paragraphs = document.getElementsByTagName('p');
    // Used a ES6 loop to  return the element itself rather than the index. Paragraphs as an array. 
    for (elt of paragraphs) {
        //Background colour being set
        elt.style['background-color'] = '#a48cfa';
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////

// No colour overlay button
document.addEventListener('DOMContentLoaded', function() {
    var noButton = document.getElementById('remove-colour');

    noButton.addEventListener("click", async() => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setNoPageBackgroundColor,
        });
    });

}, false);


//   current page
function setNoPageBackgroundColor() {
    // Need to get the selected colour here
    let paragraphs = document.getElementsByTagName('p');
    // Used a ES6 loop to  return the element itself rather than the index. Paragraphs as an array. 
    for (elt of paragraphs) {
        //Background colour being set
        elt.style['background-color'] = '#FFFFFF';
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Dictionary modal section

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Dictionary modal pop-up and close feature 
// Open dictionary
const openModalButtons = document.querySelectorAll('[data-modal-target]')
    //Close dictionary
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

//Open modal
openModalButtons.forEach(button => {
    // Listens for button clicked
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
            // The modal opens
        openModal(modal)
    })
})

// closes when user clicks outside box
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        //Function closes the modal
        closeModal(modal)
    })
})

// closes modal
closeModalButtons.forEach(button => {
    //Listening for an event of clicking the close
    button.addEventListener('click', () => {
        //chooses the closest parent node called modal
        const modal = button.closest('.model')
        closeModal(modal)
    })
})

// opening the modal function overlay
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
        // adding the overlay to the rest of the popup when the modal is open
    overlay.classList.add('active')
}
// closing the modal function overlay
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
        //removing the overlay to the rest of the popup when closing the  modal
    overlay.classList.remove('active')
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Dictionary function - Dictionary itself

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Free dictionary API
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const btn = document.getElementById("search-btn");
const result = document.getElementById("result");


//Event listener waiting for button click in modal
btn.addEventListener("click", () => {
    let dictWord = document.getElementById("dict-word").value;

    //Fetches the word
    fetch(`${url}${dictWord}`)
        //json() method returns word
        .then((response) => response.json())
        .then((data) => {
            //Checking the console log to make sure its running
            console.log(data);
            // Produces a result of a definition and example.
            // Also if it as adjective, noun, verb, adverb etc.  
            result.innerHTML = `
            <div class="word">
                    <h3>${dictWord}</h3>
                </div>
                <p class="word-definition"> 
                   ${data[0].meanings[0].definitions[0].definition} 
                </p>
                <p class="word-example"> 
                    ${data[0].meanings[0].definitions[0].example || ""} 
                </p>`;
        })
        // Produces error message if it cannot find the definition for that word.
        .catch(() => {
            result.innerHTML = `<h3 class="errorMsg">Could not find word, please try a different word.</h3>`;
        });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//END

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////