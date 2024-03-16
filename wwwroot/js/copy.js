function copyText(text){
    console.log(text);
    navigator.clipboard.writeText(text).then(function(x) {
        alert("Copied text: " + text);
      });
}