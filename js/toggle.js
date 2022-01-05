const btnToggle = document.getElementById('btntoggle');

btnToggle.addEventListener('click', () =>{
    btnToggle.classList.toggle('active');
    
    const navbar = document.getElementById('navbar')
    navbar.classList.toggle('active');

    if(btnToggle.classList.contains('fa-bars')){
        btnToggle.classList.remove('fa-bars');
        btnToggle.classList.add('fa-times');
    }else{
         btnToggle.classList.add('fa-bars');
        btnToggle.classList.remove('fa-times');
    }
})