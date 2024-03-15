function copyText(text){
    console.log(text);
    navigator.clipboard.writeText(text).then(function(x) {
        alert("Link copied to clipboard: " + text);
      });
}