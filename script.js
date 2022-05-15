const slides = function () {
    const slide = document.querySelectorAll(".slide");
    const prebtn = document.querySelector(".previous");
    const nextbtn = document.querySelector(".next");

    const goTOSlide = function () {
        slide.forEach((s) => (s.style.transform = `translateX(-136%)`));
    };
    const backTOSlide = function () {
        slide.forEach((s) => (s.style.transform = `translateX(0%)`));
    };

    let curSlide = 0;

    nextbtn.addEventListener("click", function () {
        if (curSlide === 1) {
            curSlide = 0;
            backTOSlide();
        } else {
            curSlide++;
            goTOSlide(curSlide);
        }
    });
    prebtn.addEventListener("click", function () {
        if (curSlide === 0) {
            curSlide = 1
            goTOSlide();
        } else {
            curSlide--;
            backTOSlide(curSlide);
        }
    });
};
slides();
