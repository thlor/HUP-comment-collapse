function toggleThread(e){var t;if(hidden[e]){hidden[e]=false;t="block"}else{hidden[e]=true;t="none"}comments[e].getElementsByClassName("content")[0].style.display=t;comments[e].getElementsByClassName("link")[0].style.display=t;var n=comments[e].nextSibling;while(n&&n.nodeType!=1){n=n.nextSibling}if(n&&n.className=="indented"){n.style.display=t}else{}setHeader(e)}function setHeader(e){if(hidden[e])button_type=button_show;else button_type=button_hide;header[e][0].innerHTML='&nbsp;<a style="cursor: pointer; cursor: hand;" onClick = "toggleThread('.concat(e.toString(),');">',button_type,"</a>",header_innerHTML_orig[e])}if(typeof collapser_activated==="undefined"){var comments;var hidden=Array();var header=Array();var header_innerHTML_orig=Array();button_hide="[-]";button_show="[+]";comments=document.getElementById("comments").getElementsByClassName("comment");for(i=0;i<comments.length;i++){comment=comments[i];hidden[i]=false;header[i]=comment.getElementsByClassName("submitted");header_innerHTML_orig[i]=header[i][0].innerHTML;setHeader(i);var collapser_activated=true}}