var links = document.querySelectorAll('.nav__link');
for(var link of links) {
    link.addEventListener('click', function(){
        document.getElementById('checkbox').checked = false;
    });
}
    
