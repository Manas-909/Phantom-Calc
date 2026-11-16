const prizes = [
    {
        id: 1,
        name: "travel stipend to phantom",
        fragments: 10,
        image: "assets/flight-stipend.png",
        quantity: 0,
    },
    {
        id: 2,
        name: "chrome web store license",
        fragments: 10,
        image: "assets/chrome-web-store-license.png",
        quantity: 0
    },
    {
        id: 3,
        name: "hardware grant",
        fragments: 10,
        image: "assets/hardware-grant.png",
        quantity: 0
    },
    {
        id: 4,
        name: "random pack of stickers",
        fragments: 10,
        image: "assets/random-pack-of-stickers.png",
        quantity: 0
    },
    {
        id: 5,
        name: "3d printing credits",
        fragments: 20,
        image: "assets/3d-printing-credits.png",
        quantity: 0,
    },
    {
        id: 6,
        name: "ai credits",
        fragments: 20,
        image: "assets/ai-credits.png",
        quantity: 0
    },
    {
        id: 7,
        name: "free domain",
        fragments: 20,
        image: "assets/free-domain.png",
        quantity: 0
    },
    {
        id: 8,
        name: "hosting credits",
        fragments: 20,
        image: "assets/hosting-credits.png",
        quantity: 0
    },
    {
        id: 9,
        name: "aseprite license",
        fragments: 40,
        image: "assets/aseprite-license.png",
        quantity: 0,
        artwork: true
    },
    {
        id: 10,
        name: "balatro",
        fragments: 40,
        image: "assets/balatro.jpg",
        quantity: 0,
        artwork: true
    },
    {
        id: 11,
        name: "blahaj",
        fragments: 40,
        image: "assets/blahaj.png",
        quantity: 0
    },
    {
        id: 12,
        name: "cat receipt printer",
        fragments: 40,
        image: "assets/cat-receipt-printer.png",
        quantity: 0
    },
    {
        id: 13,
        name: "hack club microSD card",
        fragments: 40,
        image: "assets/hack-club-microsd.png",
        quantity: 0
    },
    {
        id: 14,
        name: "hack club pin",
        fragments: 40,
        image: "assets/hack-club-pin.webp",
        quantity: 0
    },
    {
        id: 15,
        name: "steam/gog gift card",
        fragments: 40,
        image: "assets/steam-gog-gift-card.png",
        quantity: 0
    },
    {
        id: 16,
        name: "cheese grater",
        fragments: 50,
        image: "assets/cheese-grater.png",
        quantity: 0
    },
    {
        id: 17,
        name: "google play license grant",
        fragments: 50,
        image: "assets/google-play-license.png",
        quantity: 0
    },
    {
        id: 18,
        name: "raspberry pi zero 2 w",
        fragments: 50,
        image: "assets/raspberry-pi-zero-2-w.png",
        quantity: 0
    },
    {
        id: 19,
        name: "chants of sennaar",
        fragments: 60,
        image: "assets/chants-of-sennaar.png",
        quantity: 0,
        artwork: true
    },
    {
        id: 20,
        name: "minecraft",
        fragments: 60,
        image: "assets/minecraft.jpg",
        quantity: 0,
        artwork: true
    },
    {
        id: 21,
        name: "the phantom of the opera",
        fragments: 60,
        image: "assets/the-phantom-of-the-opera.png",
        quantity: 0,
        artwork: true
    },
    {
        id: 22,
        name: "github frisbee",
        fragments: 70,
        image: "assets/github-frisbee.webp",
        quantity: 0
    },
    {
        id: 23,
        name: "hades",
        fragments: 70,
        image: "assets/hades.png",
        quantity: 0,
        artwork: true
    },
    {
        id: 24,
        name: "blue prince",
        fragments: 80,
        image: "assets/blue-prince.jpg",
        quantity: 0,
        artwork: true
    },
    {
        id: 25,
        name: "hack club socks",
        fragments: 80,
        image: "assets/hack-club-socks.png",
        quantity: 0,
    },
    {
        id: 26,
        name: "hades 2",
        fragments: 80,
        image: "assets/hades-2.png",
        quantity: 0,
        artwork: true
    },
    {
        id: 27,
        name: "pinecil",
        fragments: 80,
        image: "assets/pinecil.png",
        quantity: 0
    },
    {
        id: 28,
        name: "unbeatable",
        fragments: 80,
        image: "assets/unbeatable.jpg",
        quantity: 0,
        artwork: true
    },
    {
        id: 29,
        name: "cmf buds pro 2",
        fragments: 100,
        image: "assets/cmf-buds-pro-2.png",
        quantity: 0
    },
    {
        id: 30,
        name: "filo snowsky echo nano",
        fragments: 100,
        image: "assets/snowskynano.png",
        quantity: 0
    },
    {
        id: 31,
        name: "laptop grant",
        fragments: 100,
        image: "assets/laptop-grant.png",
        quantity: 0
    },
    {
        id: 32,
        name: "pc grant",
        fragments: 100,
        image: "assets/pc-grant.png",
        quantity: 0
    },
    {
        id: 33,
        name: "tablet grant",
        fragments: 100,
        image: "assets/tablet-grant.png",
        quantity: 0
    },
    {
        id: 34,
        name: "github keycaps",
        fragments: 120,
        image: "assets/github-keycaps.png",
        quantity: 0
    },
    {
        id: 35,
        name: "snowsky/filo echo mini",
        fragments: 120,
        image: "assets/fiioechomini.png",
        quantity: 0
    },
    {
        id: 36,
        name: "apple pencil (usb-c)",
        fragments: 160,
        image: "assets/apple-pencil-pro.png",
        quantity: 0
    },
    {
        id: 37,
        name: "yubikey 5c nfc",
        fragments: 160,
        image: "assets/yubikey-5c-nfc.webp",
        quantity: 0
    },
    {
        id: 38,
        name: "anbernic rd ds plus",
        fragments: 190,
        image: "assets/rg-ds-plus.png",
        quantity: 0
    },
    {
        id: 39,
        name: "instax mini 12 instant camera",
        fragments: 190,
        image: "assets/instax-mini-12.png",
        quantity: 0
    },
    {
        id: 40,
        name: "8bitdo retro mechanical keyboard",
        fragments: 200,
        image: "assets/8bitdo-retro-keyboard.png",
        quantity: 0
    },
    {
        id: 41,
        name: "logitech mx master 3s",
        fragments: 200,
        image: "assets/mx-master-3s.png",
        quantity: 0
    },
    {
        id: 42,
        name: "sony wh-ch720n",
        fragments: 200,
        image: "assets/sony-wh-ch720n.png",
        quantity: 0
    },
    {
        id: 43,
        name: "steam license",
        fragments: 200,
        image: "assets/steam-license.png",
        quantity: 0
    },
    {
        id: 44,
        name: "ugreen nexode power bank",
        fragments: 200,
        image: "assets/ugreen-power-bank.png",
        quantity: 0
    },
    {
        id: 45,
        name: "raspberry pi 5",
        fragments: 220,
        image: "assets/raspberry-pi-5.png",
        quantity: 0
    },
    {
        id: 46,
        name: "apple pencil pro",
        fragments: 260,
        image: "assets/apple-pencil-pro.png",
        quantity: 0
    },
    {
        id: 47,
        name: "evoworks evo80",
        fragments: 340,
        image: "assets/evoworks-evo80.png",
        quantity: 0
    },
    {
        id: 48,
        name: "flipper zero",
        fragments: 400,
        image: "assets/flipper.webp",
        quantity: 0
    },
    {
        id: 49,
        name: "nothing headphone (a)",
        fragments: 400,
        image: "assets/nothing-headphone-a.png",
        quantity: 0
    },
    {
        id: 50,
        name: "amazon kindle paperwhite",
        fragments: 440,
        image: "assets/amazon-kindle-paperwhite.png",
        quantity: 0
    },
    {
        id: 51,
        name: "bambu lab a1 mini",
        fragments: 440,
        image: "assets/bambu-a1-mini.png",
        quantity: 0
    },
    {
        id: 52,
        name: "airpods pro 3",
        fragments: 510,
        image: "assets/airpods-pro-3.png",
        quantity: 0
    },
    {
        id: 53,
        name: "ayn thor(preorder grant)",
        fragments: 520,
        image: "assets/ayn-thor.png",
        quantity: 0
    },
    {
        id: 54,
        name: "sony wh-1000xm6",
        fragments: 920,
        image: "assets/sony-wh-1000xm6.png",
        quantity: 0
    },
    {
        id: 55,
        name: "bambu lab p2s",
        fragments: 1150,
        image: "assets/bambu-p2s.png",
        quantity: 0
    },
    {
        id: 56,
        name: "ipad mini (wi-fi)",
        fragments: 1200,
        image: "assets/ipad-mini.png",
        quantity: 0
    },
    {
        id: 57,
        name: "11-inch ipad air",
        fragments: 1500,
        image: "assets/ipad-air-11.png",
        quantity: 0
    },
    {
        id: 58,
        name: "macbook neo",
        fragments: 1500,
        image: "assets/macbook-neo.png",
        quantity: 0
    },
    {
        id: 59,
        name: "framework laptop 12",
        fragments: 1770,
        image: "assets/framework-12.png",
        quantity: 0
    },
    {
        id: 60,
        name: "nintendo switch 2",
        fragments: 2000,
        image: "assets/nintendo-switch-2.png",
        quantity: 0
    },
    {
        id: 61,
        name: "macbook air (m5)",
        fragments: 2600,
        image: "assets/macbook-air-m5.png",
        quantity: 0
    },
    {
        id: 62,
        name: "framework laptop 13",
        fragments: 2750,
        image: "assets/framework-13.png",
        quantity: 0
    },
    {
        id: 63,
        name: "framework laptop 13 pro",
        fragments: 2750,
        image: "assets/framework-13-pro.png",
        quantity: 0
    },
    
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

            <input type="number" class="quantity-input" min="0" step="1"
                value="${prize.quantity}"
                onfocus="this.select()"
                onkeydown="blockBadKeys(event)"
                oninput="setQuantity(${prize.id}, this.value)"
                onchange="finishedQuantity(${prize.id})">

            <button class="quantity-button" onclick="addPrize(${prize.id})">
                +
            </button>
        `;

    }

}

const FRAGMENTS_PER_HOURS = 10;

function blockBadKeys(event) {
    if (["-", "+", "e", "E"].includes(event.key)) {
        event.preventDefault();
    }
}

function setQuantity(id, newValue) {
    const prize = prizes.find(item => item.id === id);

    prize.quantity = Math.max(0, Math.floor(Number(newValue)) || 0);

    calculateTotal();
}

function finishedQuantity(id) {
    const prize = prizes.find(item => item.id === id);

    updateControls(prize);
    calculateTotal();
}

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
let selectedStart = null;
let selectedEnd = null;
let choosingEnd = false;

let viewsDate = new Date()
viewsDate.setDate(1);
viewsDate.setHours(0, 0, 0, 0);

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

function atMidnight(date) {
    const copy = new Date(date);
    copy.setHours(0, 0, 0, 0);
    return copy;
}

function calendarDayNumber(date) {
    return Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    ) / DAY_MS;
}

function updatePerDay(remainingHours) {
    const today = atMidnight(new Date());
    const phantomStart = atMidnight(PHANTOM_START);
    const latest = atMidnight(PHANTOM_END)

    const earliest = new Date(Math.max(today, phantomStart));
    const hasAvailableDays = earliest <= latest;

    if (hasAvailableDays) {
        if (selectedStart === null || selectedEnd === null) {
            selectedStart = new Date(earliest);
            selectedEnd = new Date(latest);
        }

        if (selectedStart < earliest) {
            selectedStart = new Date(earliest);
        }

        if (selectedEnd > latest) {
            selectedEnd = new Date(latest);  
        }

        if (selectedEnd < selectedStart) {
            selectedEnd = new Date(selectedStart);
        }
    }

    const daysToCode = hasAvailableDays
        ? calendarDayNumber(selectedEnd)
            -calendarDayNumber(selectedStart) + 1
        : 0;

    const hoursPerDay = daysToCode > 0
        ? remainingHours / daysToCode
        : 0;

    document.getElementById("hours-per-day").textContent = daysToCode > 0 ? hoursPerDay.toFixed(1) : "-";
    document.getElementById("days-to-code").textContent = daysToCode;

    const hint = document.getElementById("calendar-hint");

    const formatDate = date => date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    if (!hasAvailableDays) {
        hint.textContent = "No coding days remain before Phantom ends.";
    } else if (choosingEnd) {
        hint.textContent = `Start: ${formatDate(selectedStart)}. Now choose an end date.`;
    } else {
        hint.textContent = `${formatDate(selectedStart)} - ${formatDate(selectedEnd)}. ` + "Click a day to choose a new range.";
    }

    renderCalendar(today, earliest, latest)

}

function renderCalendar(today, earliest, latest) {
    const grid = document.getElementById("calendar-grid");
    const title = document.getElementById("calendar-title");

    const year = viewsDate.getFullYear();
    const month = viewsDate.getMonth();

    title.textContent = viewsDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
    });

    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    grid.innerHTML = "";

    for (let i = 0; i < firstWeekday; i++) {
        grid.appendChild(document.createElement("div"));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const available = date >= earliest && date <= latest;

        const cell = document.createElement("button");
        cell.type = "button";
        cell.classList.add("cal-day");
        cell.textContent = day;
        cell.disabled = !available;

        cell.setAttribute("aria-label", date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        }));

        const inRange = available &&
            selectedStart !== null &&
            selectedEnd !== null &&
            date >= selectedStart &&
            date <= selectedEnd;

        cell.setAttribute("aria-pressed", String(inRange));

        if (inRange) {
            cell.classList.add("coding");

            if (
                date.getTime() === selectedStart.getTime() ||
                date.getTime() === selectedEnd.getTime()
            ) {
                cell.classList.add("range-edge");
            }
        }


        if (!available) {
            cell.classList.add("unavailable");
        } else {
            cell.classList.add("clickable");

            cell.addEventListener("click", () => {
                if (!choosingEnd || date < selectedStart) {
                    selectedStart = new Date(date);
                    selectedEnd = new Date(date);
                    choosingEnd = true;
                } else {
                    selectedEnd = new Date(date);
                    choosingEnd = false;
                }

                calculateTotal();
            });
        }

        grid.appendChild(cell);
    }

    const firstMonth = new Date(earliest.getFullYear(), earliest.getMonth(), 1);
    const lastMonth = new Date(latest.getFullYear(), latest.getMonth(), 1);

    document.getElementById("prev-month").disabled = viewsDate <= firstMonth;
    document.getElementById("next-month").disabled = viewsDate >= lastMonth;
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

document.getElementById("prev-month").addEventListener("click", () => {
    viewsDate = new Date(
        viewsDate.getFullYear(),
        viewsDate.getMonth() - 1,
        1
    );

    calculateTotal();
});

document.getElementById("next-month").addEventListener("click", () => {
    viewsDate = new Date(
        viewsDate.getFullYear(),
        viewsDate.getMonth() + 1,
        1
    );

    calculateTotal();
});

setInterval(updatePhantomStatus, 60 * 60 *1000);
calculateTotal();