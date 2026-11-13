const prizes = [
    {
        id: 1,
        name: "Minecraft",
        fragments: 60,
        image: "assets/minecraft.jpg",
        quantity: 0,
        artwork: true
    },
    {
        id: 2,
        name: "Framework 13",
        fragments: 3750,
        image: "assets/framework-13-pro.png",
        quantity: 0
    },
    {
        id: 3,
        name: "Github Frisbee",
        fragments: 200,
        image: "assets/github-frisbee.webp",
        quantity: 0
    },
    {
        id: 4,
        name: "ipad mini",
        fragments: 1500,
        image: "assets/ipad-mini.png",
        quantity: 0
    },
    {
        id: 5,
        name: "Chants of sennar",
        fragments: 60,
        image: "assets/chants-of-sennaar.png",
        quantity: 0,
        artwork: true
    },
    {
        id: 6,
        name: "PC grant",
        fragments: 500,
        image: "assets/pc-grant.png",
        quantity: 0
    }
];

const prizesGrid = document.getElementById("prizes-grid");

function showPrizes() {
    prizesGrid.innerHTML = "";

    prizes.forEach(prize => {
        const card = document.createElement("div");
        card.classList.add("prize-card");

        card.innerHTML = `
            <img src="${prize.image}" alt="${prize.name}" class="prize-image ${prize.artwork ? 'artwork' : ''}">

            <div class="prize-info">
                <h3>${prize.name}</h3>

                <p class="prize-price">
                    ${prize.fragments} fragments
                </p>

                <div class="prize-controls" id="controls-${prize.id}">
                    <button class="add-button" onclick="addPrize(${prize.id})">
                        + Add
                    </button>
                </div>
            </div>
        `;

        prizesGrid.appendChild(card);
    });
}

showPrizes();

function addPrize(id) {
    const prize = prizes.find(item => item.id === id);

    prize.quantity++;

    updateControls(prize);
    calculateTotal();

}

function removePrize(id) {
    const prize = prizes.find(item => item.id === id);

    prize.quantity--;

    updateControls(prize);
    calculateTotal();

}

function updateControls(prize) {
    const controls = document.getElementById(`controls-${prize.id}`);

    if (prize.quantity === 0) {

        controls.innerHTML = `
            <button class="add-button" onclick="addPrize(${prize.id})">
                + Add
            </button>
        `;
    } else {

        controls.innerHTML = `
            <button class="quantity-button" onclick="removePrize(${prize.id})">
                -
            </button>

            <span>${prize.quantity}</span>

            <button class="quantity-button" onclick="addPrize(${prize.id})">
                +
            </button>
        `;

    }

}

const FRAGMENTS_PER_HOURS = 10;

function calculateTotal() {

    let totalFragments = 0;

    prizes.forEach(prize => {
        totalFragments += prize.fragments * prize.quantity;
    });

    const requiredHours = totalFragments / FRAGMENTS_PER_HOURS;

    const approvedHours = Number(
        document.getElementById("approved-hours").value
    ) || 0;

    const remainingHours = Math.max(0, requiredHours - approvedHours);

    document.getElementById("total-fragments").textContent = totalFragments;
    document.getElementById("required-hours").textContent = `${requiredHours.toFixed(1)} hours`;
    document.getElementById("remaining-hours").textContent = `${remainingHours.toFixed(1)} hours`;

}

const approvedInput = document.getElementById("approved-hours");

approvedInput.addEventListener("keydown", event => {
    if (["-", "+", "e", "E"].includes(event.key)) {
        event.preventDefault();
    }
});

approvedInput.addEventListener("input", () => {
    if (approvedInput.value !== "" && Number(approvedInput.value) < 0) {
        approvedInput.value = 0;
    }
});

approvedInput.addEventListener("input", calculateTotal);

const PHANTOM_START = new Date("2026-08-13T00:00:00");
const PHANTOM_END = new Date("2027-02-28T23:59:59");
const DAY_MS = 1000*60*60*24;

function updatePhantomStatus() {
    const now = new Date();

    const totalMs = PHANTOM_END - PHANTOM_START;
    const elapsedMs = now - PHANTOM_START;

    const daysLeft = Math.max(0, Math.ceil((PHANTOM_END - now) / DAY_MS));

    const percent = Math.min(100, Math.max(0, (elapsedMs / totalMs) * 100));

    document.getElementById("days-remaining").textContent = daysLeft;
    document.getElementById("progress-fill").style.width = `${percent}%`;
    document.getElementById("progress-label").textContent = `${percent.toFixed(0)}% of Phantom complete`;
}

updatePhantomStatus();

setInterval(updatePhantomStatus, 60 * 60 *1000);