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
                    <img src="assets/fragment.svg" alt="fragment" class="fragment-icon">
                    <input type="number" class="fragment-input" min="0" step="1"
                        value="${prize.fragments}"
                        oninput="updateFragments(${prize.id}, this.value)"
                        onblur="resetEmptyFragments(this, ${prize.id})">
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

    const resultBox = document.querySelector(".calc-rslt");
    resultBox.classList.toggle("goal-reached", totalFragments > 0 && remainingHours === 0);

    updatePerDay(remainingHours);

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

function updatePerDay(remainingHours) {
    const today = new Date()
    today.setHours(0,0,0,0);

    const end = new Date(PHANTOM_END)
    end.setHours(0,0,0,0);

    const daysToCode = Math.max(0, Math.round((end - today) / DAY_MS) + 1);

    const hoursPerDay = daysToCode > 0 ? remainingHours / daysToCode : 0;

    document.getElementById("hours-per-day").textContent = hoursPerDay.toFixed(1);
    document.getElementById("days-to-code").textContent = daysToCode;

    renderCalendar(today, end);
}

function renderCalendar(today, end) {
    const grid = document.getElementById("calendar-grid");
    const title = document.getElementById("calendar-title");

    const year = today.getFullYear();
    const month = today.getMonth();

    title.textContent = today.toLocaleDateString("en-US", {month: "long", year: "numeric"});

    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    grid.innerHTML = "";

    for (let i = 0; i < firstWeekday; i++) {
        const empty = document.createElement("div");
        grid.appendChild(empty);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year,month, day);
        const cell = document.createElement("div");
        cell.classList.add("cal-day");
        cell.textContent = day;

        if (date < today) {
            cell.classList.add("past");
        } else if (date <= end) {
            cell.classList.add("coding");
        }

        if (date.getTime() === today.getTime()) {
            cell.classList.add("today");
        }

        grid.appendChild(cell);
    }
}

function updateFragments(id, newValue) {
    const prize = prizes.find(item => item.id === id)

    prize.fragments = Math.max(0, Math.floor(Number(newValue)) || 0);

    calculateTotal();
}

function resetEmptyFragments(input, id) {
    if (input.value === "") {
        const prize = prizes.find(item => item.id === id);
        input.value = prize.fragments;
    }
}

setInterval(updatePhantomStatus, 60 * 60 *1000);
calculateTotal();