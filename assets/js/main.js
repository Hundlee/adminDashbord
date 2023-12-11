const dropDownMenu = () => {
    var subBtns = document.querySelectorAll(".sub-btn");
    var subMenus = document.querySelectorAll(".sub-menu");

    subBtns.forEach(function (subBtn, index) {
        subBtn.addEventListener("click", function () {
            var subMenu = subMenus[index];
            subMenu.style.display =
                subMenu.style.display === "block" ? "none" : "block";

            document.addEventListener("click", function (event) {
                if (
                    !subBtn.contains(event.target) &&
                    !subMenu.contains(event.target)
                ) {
                    subMenu.style.display = "none";
                }
            });
        });
    });
};

dropDownMenu();

// swiper

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,

    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});
