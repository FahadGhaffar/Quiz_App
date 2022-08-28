// $('a#first').click(function () {
//     $('div#container').show();
// });
// $('a#last').click(function () {
//     $('div#container').hide();
// });

window.onload = function () {

    show(0);
}

var questions = [
    {
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "run aceapt memory",
            "none of these",
        ]
    },
    {
        id: 2,
        question: "What is the full form of CPU ?",
        answer: "Central Processing Unit",
        options: [
            "Central program Unit",
            "Central Processing Unit",
            "Central preload Unit ",
            "none of these",
        ]
    },
    {
        id: 3,
        question: "What is the full form of E-mail?",
        answer: "Electronic Mail",
        options: [
            "Electric Mail",
            "Elementery Mail",
            "Electronic Mail",
            "none of these",
        ]
    },
    {
        id: 4,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "run aceapt memory",
            "none of these",
        ]
    },
]






var queston = document.getElementById("question");
var option_one = document.getElementById("option_one");
var option_two = document.getElementById("option_two");
var option_three = document.getElementById("option_three");
var option_four = document.getElementById("option_four");


queston.innerHTML = questions[0].question;



var counter = 0





function show(counter) {

    queston.innerHTML = questions[counter].question;
    option_one.innerHTML = questions[counter].options[0];
    option_two.innerHTML = questions[counter].options[1];
    option_three.innerHTML = questions[counter].options[2];
    option_four.innerHTML = questions[counter].options[3];


}



function submit() {




    counter++;






    show(counter)
    setcolor(4)


}



function setcolor(selected) {

    if (option_one.parentElement.closest('.active') ||
        option_two.parentElement.closest('.active') ||
        option_three.parentElement.closest('.active') ||
        option_four.parentElement.closest('.active')) {

        option_one.parentElement.classList.remove("active")
        option_two.parentElement.classList.remove("active")
        option_three.parentElement.classList.remove("active")
        option_four.parentElement.classList.remove("active")
    }






    if (selected === 0) {
        option_one.parentElement.classList.add("active")
    }
    if (selected === 1) {
        option_two.parentElement.classList.add("active")
    }
    if (selected === 2) {
        option_three.parentElement.classList.add("active")
    }
    if (selected === 3) {
        option_four.parentElement.classList.add("active")
    }

}



// option_one.parentElement.classList.add("active")
// option_two.parentElement.classList.add("active")

// while (a <= (questions.length - 1)) {




//     // function submit() {
//     a++
//     // }
//     console.log(a);
// }