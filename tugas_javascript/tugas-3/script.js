let uimVotes = 0;
const uimBtn = document.getElementById('uimBtn')
const uimVotesAja = document.getElementById('uimVotes')
uimBtn.addEventListener('click', function () {
    uimVotes++;
    uimVotesAja.textContent = uimVotes
    updateResults()
})

let ugmVotes = 0;
const ugmBtn = document.getElementById('ugmBtn')
const ugmVotesAja = document.getElementById('ugmVotes')
ugmBtn.addEventListener('click', function () {
    ugmVotes++;
    ugmVotesAja.textContent = ugmVotes
    updateResults()
})

let oxfordVotes = 0;
const oxfordBtn = document.getElementById('oxfordBtn')
const oxfordVotesAja = document.getElementById('oxfordVotes')
oxfordBtn.addEventListener('click', function () {
    oxfordVotes++;
    oxfordVotesAja.textContent = oxfordVotes
    updateResults()
})

let harvardVotes = 0;
const harvardBtn = document.getElementById('harvardBtn')
const harvardVotesAja = document.getElementById('harvardVotes')
harvardBtn.addEventListener('click', function () {
    harvardVotes++;
    harvardVotesAja.textContent = harvardVotes
    updateResults()
})


const winnerVotes = document.getElementById('winnerVotes')
const winnerName = document.getElementById('winnerName')
const toyalVotes = document.getElementById('totalVotes')

function updateResults() {
    const total = uimVotes + ugmVotes + oxfordVotes + harvardVotes;
    toyalVotes.textContent = total;

    if (total === 0) {
        winnerName.textContent = "No votes yet";
        winnerVotes.textContent = 0;
    } else if (uimVotes > ugmVotes && uimVotes > oxfordVotes && uimVotes > harvardVotes) {
        winnerName.textContent = "Universitas Islam Madinah";
        winnerVotes.textContent = uimVotes;
    } else if (ugmVotes > uimVotes && ugmVotes > oxfordVotes && ugmVotes > harvardVotes) {
        winnerName.textContent = "Universitas Gadjah Mada";
        winnerVotes.textContent = ugmVotes;
    } else if (oxfordVotes > uimVotes && oxfordVotes > ugmVotes && oxfordVotes > harvardVotes) {
        winnerName.textContent = "University of Oxford";
        winnerVotes.textContent = oxfordVotes;
    } else if (harvardVotes > uimVotes && harvardVotes > ugmVotes && harvardVotes > oxfordVotes) {
        winnerName.textContent = "Harvard University";
        winnerVotes.textContent = harvardVotes;
    } else {
        winnerName.textContent = "seri";
        winnerVotes.textContent = "-";
    }
}

const resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', function () {
    uimVotes = 0
    ugmVotes = 0
    oxfordVotes = 0
    harvardVotes = 0

    uimVotesAja.textContent = uimVotes
    ugmVotesAja.textContent = ugmVotes
    oxfordVotesAja.textContent = oxfordVotes
    harvardVotesAja.textContent = harvardVotes

    updateResults()
})

