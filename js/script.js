let quoteArr = [
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        text: "So many books, so little time.",
        author: "Frank Zappa",
    },
    {
        text: "Two things are infinite: the universe and human s and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        text: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero",
    },
    {
        text: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "Andre Gide, Autumn Leaves",
    }
];

if(JSON.parse(localStorage.getItem("quote")))
    {quoteArr = JSON.parse(localStorage.getItem("quote"))};

let numNonDel = 5;
let lastNumber = 0;


function getRndInteger(min, max) {
    let randNumber;
    do {
        randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (randNumber === lastNumber);
    lastNumber = randNumber;
    return randNumber;
}

function luckQuote() {
    let index = getRndInteger(0, quoteArr.length - 1);

    let cartoona = "";
    cartoona +=
        `
        <q class="mb-4 d-inline-block fw-medium">${quoteArr[index].text}</q>
        <p>--${quoteArr[index].author}</p>
    `

    document.getElementById("quotes").innerHTML = cartoona;
}

function clearQuote()
{
    document.getElementById("quotes").innerHTML = "";
}


let quoteTextInput = document.getElementById("quoteInput");
let quoteAuthorInput = document.getElementById("authorInput");



function addNewQuote()
{
    let newQuote = {
        text: quoteTextInput.value,
        author: quoteAuthorInput.value,
    }

    quoteArr.push(newQuote);
    localStorage.setItem("quote", JSON.stringify(quoteArr));

    showAllQuote();
    clearInput();

}

function showAllQuote()
{
    let cartoona = '';
    for (let i = 0; i < numNonDel; i++)
    {
        cartoona += `
            <tr class="fw-semibold">
                <td>${i+1}</td>
                <td>
                    <q>${quoteArr[i].text}</q>
                </td>
                <td>${quoteArr[i].author}</td>
                <td></td>
            </tr>
        `
        }
    for (let i = numNonDel; i < quoteArr.length; i++)
    {
        cartoona += `
            <tr class="fw-semibold">
                <td>${i+1}</td>
                <td>
                    <q>${quoteArr[i].text}</q>
                </td>
                <td>${quoteArr[i].author}</td>
                <td>
                    <button class="btn btn-danger arialFamily fw-semibold" onclick="delQuote(${i})">Delete</button>
                </td>
            </tr>
        `
    }
    document.getElementById("quoteArea").innerHTML = cartoona;
}

function clearInput() {
    quoteInput.value = "";
    authorInput.value = "";
}


function delQuote(index)
{
    quoteArr.splice(index, 1);
    localStorage.setItem("quote", JSON.stringify(quoteArr));
    showAllQuote();
}