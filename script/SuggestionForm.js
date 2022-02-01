/***************Selectors*******************/
const suggestionTextArea = document.getElementById("suggestion_box");
const suggestionButton = document.getElementById("send_suggestion");
const suggestionTopic = document.getElementById("catagories");
    


/**************Event Listeners ********************/

suggestionButton.addEventListener("click", addSuggestions);

/**************Add suggestions to Local Storage********************/

function addSuggestions(event) {
    event.preventDefault();
    if(suggestionTextArea.value === "") {
        alert("Please enter a suggestion")
    } else {
        saveSuggestions(suggestionTextArea.value)
    }
    
}

function saveSuggestions(newSuggestion) {
    let suggestions; 
    if(localStorage.getItem(suggestionTopic.value) === null) {
        suggestions = [];
    } else {
        suggestions = JSON.parse(localStorage.getItem(suggestionTopic.value));
    }
    suggestions.push(newSuggestion);
    localStorage.setItem(suggestionTopic.value, JSON.stringify(suggestions));
    suggestionTextArea.value = "";
    
}

