let max_retries = 50;

function retry() {
    return new Promise(resolve => {
        setTimeout(() => {
            const sections = document.querySelectorAll('section');

            for (let i = 0; i < sections.length; i++) {
                if (sections[i].ariaLabel !== null && sections[i].ariaLabel.toLowerCase() === "episodes for you") {
                    sections[i].remove();
                    resolve(true);
                }
            }
            
            resolve(false);
        }, 250)
    })
}


async function removePodcasts() {
    for (let i = 0; i < max_retries; i++) {
        const result = await retry();
        if (result) return;
    }
}

removePodcasts();
