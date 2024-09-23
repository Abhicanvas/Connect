document.addEventListener("DOMContentLoaded", function() {
    const autoList = document.querySelector('.autoList');
    const autos = Array.from(autoList.children);
    for (let i = autos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [autos[i], autos[j]] = [autos[j], autos[i]];
    }

    while (autoList.firstChild) {
        autoList.removeChild(autoList.firstChild);
    }

    // Append the shuffled divs back to autoList
    autos.forEach(auto => {
        autoList.appendChild(auto);
    });
});