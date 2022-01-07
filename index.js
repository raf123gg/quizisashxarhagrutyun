const questions = [
    {
        question: "Հայկական լեռնաշխարհում ձյան գծի ստորին սահմանն է՝?",
        optionA: "3462մ",
        optionB: "4090մ",
        optionC: "5165մ",
        optionD: "4200մ",
        correctOption: "optionD"
    },

    {
         question: "Հայկական լեռնաշխարհի գործող հրաբուխներն են՝ ?",
        optionA: "Աբուլը և Սամսարը",
        optionB: "Նեմրութը և Թոնդրակը",
        optionC: "Արագածը և Քաջքարը",
        optionD: "Մեծ Մասիսըև Սիփանը",
        correctOption: "optionB"
    },

    {
        question: "Տրված <<գետ-ակունքի տեղադիրք>> զույգերից ընտրել սխալը?",
        optionA: "Արաքս-Բյուրակնի լեռնազանգված",
        optionB: "Արևմտյան Եփրատ-Ծաղկանց լեռնաշղթա",
        optionC: "Արևելյան Եփրատ-Ծաղկանց լեռնաշղթա",
        optionD: "Կուր-Վանա լիճ",
        correctOption: "optionD"
    },

    {
        question: "Տրված << գետ-գետային ավազան>> զույգերից ընտրել ճիշտը:?",
        optionA: "Արաքս-Միջերկրական ծով",
        optionB: "Տիգրիս-Վանա լիճ",
        optionC: "Եփրատ-Պարսից ծոց",
        optionD: "Կուր-Սև ծով",
        correctOption: "optionC"
    },

    {
        question: "Նշված գոգավորություններից ո՞րն է գտնվում Արևմտյան Եփրատի հովտում: ?",
        optionA: "Մշո",
        optionB: "Խարբերդի",
        optionC: "Բասենի",
        optionD: "Երզնկայի",
        correctOption: "optionD"
    },

    {
        question: "Քանի՞ էնդեմիկ բուսատեսակ կա Հայկական լեռնաշխարհում: ?",
        optionA: "200",
        optionB: "171",
        optionC: "96",
        optionD: "10",
        correctOption: "optionA"
    },

    {
        question: "Հայկական Տավրոսից է սկիզբ առնում՝?",
        optionA: "Կուրը",
        optionB: "Ճորոխը",
        optionC: "Տիգրիսը",
        optionD: "Եփրատը",
        correctOption: "optionC"
    },

    {
        question: "Հայկական լեռնաշխարհում բացարձակ առավելագույն ջերմաստիճանը կազմել է՝ ?",
        optionA: "42C",
        optionB: "58C",
        optionC: "46C",
        optionD: "40C",
        correctOption: "optionA"
    },

    {
        question: "ՀՀ-ում ամենաբարձր լեռնագագաթը ?",
        optionA: "Թոնդրակ",
        optionB: "Արարատ",
        optionC: "Սիփան",
        optionD: "Արագած",
        correctOption: "optionD"
    },

    {
        question: "Ո՞րն է աշխարհի ամենաերկար գետը ?",
        optionA: "Եփրատ",
        optionB: "Նեղոս",
        optionC: "Տիգրիս",
        optionD: "Ամազոն",
        correctOption: "optionD"
    },

    {
        question: "Որտեղ է գտնվում Ֆորտ Բոյար, ջրային քարե ամրոցը ?",
        optionA: "ԱՄՆ",
        optionB: "Աֆրիկա",
        optionC: "Ֆրանսիա",
        optionD: "Իտալիա",
        correctOption: "optionC"
    },

    {
        question: "Որտեղ է գտնվում Ալկատրաս Ռազմական բանտը ?",
        optionA: "ԱՄն",
        optionB: "Հունգարիա",
        optionC: "Հունաստան",
        optionD: "Հին Հռոմ",
        correctOption: "optionA"
    },


    {
        question: "Որտեղ է գտնվում Թաջ Մահալ դամբարանային տաճար?",
        optionA: "Բրազիլիա",	
        optionB: "Հնդկաստան",
        optionC: "Չինաստան",
        optionD: "Ճապոնիա",
        correctOption: "optionB"
    },

    {
        question: "ԱՄՆ-ի ո՞ր քաղաքում է գտնվում Ազատության արձանը ?",
        optionA: "Լոս-Անջելես",
        optionB: "Վաշինգտոն",
        optionC: "Սան-Ֆրանցիսկո",
        optionD: "Նյու-Յորք",
        correctOption: "optionD"
    },

    {
        question: "Որ մարզում է գտնվում Գետաշեն գյուղը?",
        optionA: "Արմավիր",
        optionB: "Գեղարքունիք",
        optionC: "Լոռի",
        optionD: "Արագածոտն",
        correctOption: "optionA"
    },

    {
        question: "Քանի պետություն է գտնվում Եվրասիայում ?",
        optionA: "24",
        optionB: "30",
        optionC: "43",
        optionD: "37",
        correctOption: "optionC"
    },

    {
        question: "Նիգերիայի մայրաքաղաքը ?",
        optionA: "Աբուջա",
        optionB: "Լագոս",
        optionC: "Կալաբառ",
        optionD: "Կանո",
        correctOption: "optionA"
    },

    {
        question: "	Ով է հայտնաբերել Ամերիկան ?",
        optionA: "Ամերիգո Վեսպուչին",
        optionB: "Ջեյմս Կուկ ",
        optionC: " Քրիստափոր Կոլումբոսը",
        optionD: "Նիլլ Արմսթրոնգը",
        correctOption: "optionC"
    },

    {
        question: "Սերբիայի մայրաքաղաքը ?",
        optionA: "Զագրեբ",
        optionB: "Վարշավա",
        optionC: "Պրահա",
        optionD: "Բելգրադ",
        correctOption: "optionD"
    },

    {
        question: "Դանիայի մայրաքաղաքը ?",
        optionA: "Կոպենհագեն",
        optionB: "Վադուց",
        optionC: "Քիշնև",
        optionD: "Բեռն",
        correctOption: "optionA"
    },

    {
        question: "Նիդեռլանդների մայրաքաղաքը ?",
        optionA: "Կիև",
        optionB: "Վարշավա",
        optionC: "Վալետա",
        optionD: "Ամստերդամ",
        correctOption: "optionD"
    },

    {
        question: "Պորտուգալիայի մայրաքաղաքը?",
        optionA: "Մարսել",
        optionB: "Լիսաբոն",
        optionC: "Կահիրե",
        optionD: "Կամբեռա",
        correctOption: "optionB"
    },

    {
        question: "Հունաստանի Մայրաքաղաքը?",
        optionA: "Պրահա",
        optionB: "Աթենք",
        optionC: "Փարիզ",
        optionD: "Պեկին",
        correctOption: "optionB"
    },

    {
        question: "Քանի քաղաք կա ՀՀ-ում?",
        optionA: "35",
        optionB: "87",
        optionC: "49",
        optionD: "57",
        correctOption: "optionC"
    },

    {
        question: "Քանի գյուղ կա ՀՀ-ում?",
        optionA: "569",
        optionB: "865",
        optionC: "950",
        optionD: "1003",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}