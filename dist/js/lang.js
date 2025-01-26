onload = init;

function init() {
    var onclick = clickUpdates();
    var btn = document.getElementById("langbtn");
    btn.addEventListener("click", onclick, false);
}


function clickUpdates() {
    var count = 0;
    var next = function() {
        switch(count) {
            case 0:
            // function click 1 here
            changeLanguage('fa');
            break;
            case 1:
            // function click 2 here
            changeLanguage('en');
            break;
            case 2:
            // function click 1 here
            changeLanguage('fa');
            default:
            
            
        }
        count = count<2?count+1:1;
    }
    
    return next;
}
