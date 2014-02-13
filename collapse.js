var comments;

//Array of booleans, which comment is hidden, which isn't
var hidden = Array();

var header = Array();
var header_innerHTML_orig = Array();

button_hide = "[-]"
button_show = "[+]"

function initCollapse() {

    //Get an array of the comments
    comments = document.getElementById("comments").getElementsByClassName("comment");

    //Iterate through the array of comments
    for (i = 0; i < comments.length; i++) {
        comment = comments[i];

        //Initially set thread not hidden
        hidden[i] = false;

        //Creating the new header;
        header[i] = comment.getElementsByClassName("submitted");
        header_innerHTML_orig[i] = header[i][0].innerHTML;

        //Add default button to all comments
        setHeader(i);
    }
}

function toggleThread(n) {
    /*
     *"var display" stores the CSS attribute to be added to the element, "block" (when displaying a hidden element) or "none" (if hiding a displayed element)
     *Also, toggling the element's corresponding "hidden" boolean value
     */
    var display;
    if (hidden[n]) {
        hidden[n] = false;
        display = "block";
    } else {
        hidden[n] = true;
        display = "none";
    }

    //Show hidden parts of the comment
    comments[n].getElementsByClassName("content")[0].style.display = display;
    comments[n].getElementsByClassName("link")[0].style.display = display;

    //Get next element on the same DOM level
    var next_sibling = comments[n].nextSibling;

    //Some browsers take whitespaces as next text elements - eliminate it with the following while
    while (next_sibling && next_sibling.nodeType != 1) {
        next_sibling = next_sibling.nextSibling;
    }

    /*
     *If the next element has the "indented" class attribute, it means it's a container div for the child comments (answers) of the current comment
     *Therefore if the next element is "indented", show that, too
     */
    if (next_sibling.className == "indented") {
        next_sibling.style.display = display;
    }

    //Change the header of the comment
    setHeader(n);
}

function setHeader(n) { //Create new <div class="header"> element, adding button plus the original.

    //Set button type
    if (hidden[n])
        button_type = button_show;
    else
        button_type = button_hide;

    /*
     *Assemblying the new comment header, eg.:
     * &nbsp; <a style="cursor: pointer; cursor: hand;" onclick="toggleThread(0);">[-]</a>
     */
    header[n][0].innerHTML =

        // &nbsp; <a style="cursor: pointer; cursor: hand;" onclick="toggleThread(
        "&nbsp;<a style=\"cursor: pointer; cursor: hand;\" onClick = \"toggleThread(".concat(

        //The number of the comment to be toggled
        n.toString(),

        ");\">",

        // [-] or [+]
        button_type,

        "</a>",

        //the rest of the header
        header_innerHTML_orig[n]);
}
