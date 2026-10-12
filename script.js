const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const videos =
    document.querySelectorAll(".video-card");

const categoryButtons =
    document.querySelectorAll(".categories button");


/* =========================
   PESQUISA
========================= */

function searchVideos() {

    const text =
        searchInput.value
        .toLowerCase()
        .trim();

    videos.forEach(video => {

        const title =
            video.querySelector("h3")
            .textContent
            .toLowerCase();

        const description =
            video.querySelector(".description")
            .textContent
            .toLowerCase();

        if (
            title.includes(text) ||
            description.includes(text)
        ) {

            video.style.display = "";

        } else {

            video.style.display = "none";
        }

    });
}


searchButton.addEventListener(
    "click",
    searchVideos
);


searchInput.addEventListener(
    "keyup",
    event => {

        if (event.key === "Enter") {

            searchVideos();

        }

    }
);


/* =========================
   CATEGORIAS
========================= */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const category =
                button.dataset.category;

            videos.forEach(video => {

                if (
                    video.dataset.category === category
                ) {

                    video.style.display = "";

                } else {

                    video.style.display = "none";

                }

            });

        }
    );

});