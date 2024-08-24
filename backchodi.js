const songs  = document.querySelectorAll('.card');

songs.forEach(song => {
    song.addEventListener('click',function(){
        alert("This Song is currently not available in your region\n Try Again Later or Next time");
    })
});