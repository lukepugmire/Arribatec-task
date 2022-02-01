const submissions = document.querySelector(".submissions_box");
const suggestionTopic = ["Complaint", "QualityOfLife", "Question"];


/***************Event Listeners*******************/

    document.addEventListener("DOMContentLoaded", getSuggestions())
    submissions.addEventListener("click", deleteMessage);

/**************Retrieve Suggestions From Local Storage********************/

function getSuggestions() {
    let suggestions;

    for(let i = 0; i < suggestionTopic.length; i++) {

        if(localStorage.getItem(suggestionTopic[i]) === null) {
            suggestions = [];
        } else {
            suggestions = JSON.parse(localStorage.getItem(suggestionTopic[i]));
        }
        for(let j = 0; j < suggestions.length; j++) {
            submissions.innerHTML += `<div class="message">
            <div class="delete">x</div>
            <h3>${suggestionTopic[i]}</h3>
            <p>${suggestions[j]}</p>
        </div>`
        }
    }
}


/***************Delete Suggestions*******************/



function deleteMessage(e) {
    console.log(e);
    const messages = e.target;
    if(messages.classList[0] === "delete") {
        const message = messages.parentElement;
        removeMessage(message);
        message.remove();
        console.log(message);
    }
}

function removeMessage(x) {
    let suggestions;
    for(let i = 0; i < suggestionTopic.length; i++) {

        if(localStorage.getItem(suggestionTopic[i]) === null) {
            suggestions = [];
        } else {
            suggestions = JSON.parse(localStorage.getItem(suggestionTopic[i]));
        }
        const suggestionIndex = x.children[0].innerText;
        suggestions.splice(suggestions.indexOf(suggestionIndex), 1);
        localStorage.setItem(suggestionTopic[i], JSON.stringify(suggestions));
    }
}