
// Question 1:
document.getElementById("Execute").addEventListener("click", function() {
    let sentenceInput = document.getElementById("sentence").value;
    let cleanedSentence = sentenceInput.replace(/[^a-zA-Z0-9 ]/g, "");
    let wordsArray = cleanedSentence.split(" ");
    let validWords = [];
    let underlinedHTML = "";
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].trim() !== "") {
            validWords.push(wordsArray[i]);
            underlinedHTML = underlinedHTML + "<u>" + wordsArray[i] + "</u> ";
        }
    }
    document.getElementById("sent-count").value = validWords.length;
    document.getElementById("words").innerHTML = underlinedHTML;
});

// Question 2:
let totalRemoved = 0;
function updateColors() {
    let listItems = document.getElementById("list").getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        if (i % 2 === 0) {
            listItems[i].style.backgroundColor = "white";
        } else {
            listItems[i].style.backgroundColor = "yellow";
        }
    }
}
document.getElementById("add").addEventListener("click", function() {
    let itemInput = document.getElementById("item");
    let text = itemInput.value;
    if (text.trim() !== "") {
        let ul = document.getElementById("list");
        let li = document.createElement("li");
        li.innerHTML = text;
        ul.appendChild(li);
        updateColors();
    }
    
    itemInput.value = "";
});

document.getElementById("remove").addEventListener("click", function() {
    let itemInput = document.getElementById("item");
    let textToRemove = itemInput.value.toLowerCase(); 
    let ul = document.getElementById("list");
    let listItems = ul.getElementsByTagName("li");
    let removedText = "";

    for (let i = 0; i < listItems.length; i++) {
        let currentItemText = listItems[i].innerHTML.toLowerCase();
        
        if (currentItemText === textToRemove) {
            removedText = listItems[i].innerHTML;
            ul.removeChild(listItems[i]);
            totalRemoved++;
            break;
        }
    }
    
    if (removedText !== "") {
        let removedItemsDiv = document.getElementById("removed-items");
        removedItemsDiv.innerHTML += "<p style='color:red; font-weight:bold; margin: 2px 0;'>" + removedText + "</p>";
        let removedCountDiv = document.getElementById("removed-count");
        removedCountDiv.innerHTML = "<p style='color:green; margin: 5px 0;'>(" + totalRemoved + ") item(s) removed</p>";
        updateColors();
    }
    
    itemInput.value = "";
});