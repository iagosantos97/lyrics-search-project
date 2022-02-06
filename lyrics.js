function findLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#lyrics_form');
form.addEventListener('submit', el => {
    el.preventDefault();
    doSubmit();
});

async function doSubmit()
{
    const lyrics_el = document.querySelector('#lyrics');
    const artist = document.querySelector('#artist');
    const song = document.querySelector('#song');

    lyrics_el.innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Carregando...</span></div>';

    /* THEN
    findLyrics(artist.value, song.value)
        .then(response => response.json())
        .then(data => {
            if(data.lyrics) {
                lyrics_el.innerHTML = data.lyrics;
            } else {
                lyrics_el.innerHTML = data.error;
            }
        })
        .catch(error => {
            lyrics_el.innerHTML = `Oops! ${error}`;
        });
    */
   
    // ASYNC / AWAIT
    try {
        const lyricsResponse = await findLyrics(artist.value, song.value);
        const data = await lyricsResponse.json();
        if(data.lyrics) {
            lyrics.innerHTML = data.lyrics;
        } else {
            lyrics.innerHTML = data.error;
        }
    } catch(error) {
        console.log(error);
    }
    
}