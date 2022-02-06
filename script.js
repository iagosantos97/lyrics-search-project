function bestRockBand(band) {
    return new Promise((resolve, reject) => {
        if(band === 'Queen') {
            resolve({
                success: true,
                bandName: band,
                msg: band + ' is the best rock band ever!',
            });
        } else {
            reject({
                success: false,
                msg: 'I\'m not sure!',
            });
        }
    });
}

function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if(response.success) {
            resolve('Bohemian Rhapsody by ' + response.bandName);
        } else {
            reject('Do you know Queen?');
        }
    });
}

// SEM ASYNC/AWAIT

/*
bestRockBand('Queen')
    .then(response => {
        console.log('Checking the answer...');
        return bestRockSong(response);
    })
    .then(response => {
        console.log('Finding the best song...');
        console.log(response);
    })
    .catch(err => {
        console.log(err.msg);
    });
*/

// COM ASYNC/AWAIT

async function doTheJob() {
    try {
        const bestRockBandResponse = await bestRockBand('Queen2');
        console.log(bestRockBandResponse);
        const bestRockSongResponse = await bestRockSong(bestRockBandResponse);
        console.log(bestRockSongResponse);
    } catch (error) {
        console.log(error.msg);
    }
}

doTheJob();