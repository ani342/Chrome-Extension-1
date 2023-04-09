window.onload = () => {
    setInterval(() => {

        const button_container = document.getElementsByClassName("ytp-ad-skip-button-slot")[0];
        const button = document.getElementsByClassName("ytp-ad-skip-button")[0];

        if(button_container.style.display != "none") {
            button.click();
            exit(0);
        }
    }, 1000)
}
