const prizes = [
    {
        id: 1,
        name: "Minecraft",
        fragments: 60,
        image: "assets/minecraft.jpg",
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
            <img src="${prize.image}" alt="${prize.name}" class="prize-image">

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

    prize.quantity -= 1;

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
    document.getElementById("required-hours").textContent = `${requiredHours} hours`;
    document.getElementById("remaining-hours").textContent = `${remainingHours} hours`;

}

document.getElementById("approved-hours").addEventListener("input", calculateTotal);