// window.onload = function () {
//     Particles.init({
//         // normal options
//         selector: ".background",
//         connectParticles: false,
//         sizeVariations: 20,
//         speed: 0.3,
//         maxParticles: 250,
//         color: ["#DA046332", "#404B6922", "#DBEDF812"],
//     });
// };
///// Adding Focus
var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
    (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px");
});

const swiper = new Swiper(".mySwiper", {
    allowTouchMove: false,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});


function handleRemoveClassList(childs, childLabels) {
    for (let i = 0; i < childs.length; i++) {
        childs[i].classList.remove("option2");
        childs[i].classList.remove("col-3");
        childs[i].classList.remove("col-35");
        childs[i].classList.remove("col-4");
    }
    document
        .querySelector(`.child-3`)
        .classList.remove("grow-3");
    document
        .querySelector(`.child-3`)
        .classList.remove("flex-basis-1k");

    document
        .querySelector(`.child-3`)
        .classList.remove("flex-shrink0-1k");
    document
        .querySelector(`.parent`)
        .classList.remove("flex-wrap");
    document
        .querySelector(`.parent`)
        .classList.remove("container-query");
}

for (let i = 1; i <= 10; i++) {
    let radioInput = document.getElementById(`option${i}`);
    radioInput.addEventListener("change", () => {
        if (document.getElementById(`option${i}`).checked) {
            radio_value = document.getElementById(`option${i}`).value;
            let childs = document.querySelectorAll(`.child`);
            let childLabels = document.querySelector(`.child-label`);
            let label7 = document.querySelector('.option7-label');
            let label9 = document.querySelector('.option9-label');
            let label10 = document.querySelector('.option10-label');
            switch (radio_value) {
                case "option1":
                    childLabels.innerText = 'flex: 0 1 auto | flex: 0 1 auto | flex : 0 1 auto';

                    handleRemoveClassList(childs, childLabels);
                    label7.innerText = "To prevent Flex-grow: ____ ?";
                    label10.innerText = "For Responsive: ____ ?";

                    break;
                case "option2":
                    childLabels.innerText = 'flex: 1 1 auto | flex: 1 1 auto | flex : 1 1 auto';

                    handleRemoveClassList(childs, childLabels);
                    for (let i = 0; i < childs.length; i++) {
                        childs[i].classList.add("option2");
                    }
                    break;
                case "option3":
                    childLabels.innerText = 'flex: 1 1 auto | flex: 1 1 auto | flex : 3 1 auto';
                    handleRemoveClassList(childs, childLabels);
                    for (let i = 0; i < childs.length; i++) {
                        childs[i].classList.add("option2");
                    }
                    document
                        .querySelector(`.child-3`)
                        .classList.add("grow-3");
                    break;

                case "option4":
                    childLabels.innerText = 'default | default | flex : 0 1 1000px';
                    handleRemoveClassList(childs, childLabels);
                    document
                        .querySelector(`.child-3`)
                        .classList.add("flex-basis-1k");
                    break;
                case "option5":
                    childLabels.innerText = 'default | default | flex : 0 0 1000px';
                    handleRemoveClassList(childs, childLabels);
                    document
                        .querySelector(`.child-3`)
                        .classList.add("flex-shrink0-1k");
                    break;

                case "option6":
                    childLabels.innerText = 'default | default | flex : 0 0 1000px + flex-wrap';
                    handleRemoveClassList(childs, childLabels);
                    document
                        .querySelector(`.child-3`)
                        .classList.add("flex-shrink0-1k");
                    document
                        .querySelector(`.parent`)
                        .classList.add("flex-wrap");
                    break;


                case "option7":

                    childLabels.innerText = 'flex : 0 0 25% | flex : 0 0 25% | flex : 0 0 25% + width: 25%';
                    label7.innerText = "ans -> width: specific col %";

                    handleRemoveClassList(childs, childLabels);
                    for (let i = 0; i < childs.length; i++) {
                        childs[i].classList.add("col-3");
                    }
                    break;


                case "option8":
                    label7.innerText = "col-3";
                    childLabels.innerText = 'flex : 0 0 33.33% | flex : 0 0 33.33% | flex : 0 0 33.33% + width: 33.33%';
                    handleRemoveClassList(childs, childLabels);
                    for (let i = 0; i < childs.length; i++) {
                        childs[i].classList.add("col-4");
                    }
                    break;


                case "option9":

                    childLabels.innerText = 'flex : 0 0 29.16% | flex : 0 0 29.16% | flex : 0 0 29.16% + width: 29.16%';
                    label9.innerText = "col-3.5 = 29.16% of 12 Cols";

                    handleRemoveClassList(childs, childLabels);
                    for (let i = 0; i < childs.length; i++) {
                        childs[i].classList.add("col-35");
                    }
                    break;



                case "option10":

                    childLabels.innerText = 'flex : 0 0 100% & width: 100% in * child at specified viewport through Media Query';
                    label10.innerText = "ans -> flex: 0 0 100% & width: 100% at specific viewport";

                    handleRemoveClassList(childs, childLabels);
                    for (let i = 0; i < childs.length; i++) {
                        childs[i].classList.add("col-4");
                    }
                    document
                        .querySelector(`.parent`)
                        .classList.add("container-query");
                    break;


                default:
                    break;
            }
        }
    });
}
