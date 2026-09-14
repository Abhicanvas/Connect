var currentHour;


/* =========================================================
   PAGE LOAD
   ========================================================= */

window.onload = () => {

    const busLists = document.querySelectorAll('.Buses');

    busLists.forEach((busList) => {
        busList.style.display = "none";
    });

    const def = document.getElementById('default');

    if (def) {
        def.style.display = 'none';
    }
};


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMenu() {

    const menu = document.getElementById('menu');

    if (menu) {
        menu.classList.toggle('active');
    }

}


/* =========================================================
   DIRECT MENU
   ========================================================= */

const directM = () => {};


/* =========================================================
   GET TIME
   ========================================================= */

const getTime = () => {

    const inputValue =
        document.getElementById("input-time").value;

    return inputValue;

};


/* =========================================================
   GET AM / PM
   ========================================================= */

const getapm = (hour) => {

    return hour >= 12 ? 'pm' : 'am';

};


/* =========================================================
   FISAT -> ANGAMALY
   ========================================================= */

const addBuses = () => {

    const buses = [

        {
            name: "ST MARYS",

            times: [
                "9:10 am",
                "12:45 pm",
                "3:50 pm",
                "6:55 pm"
            ],

            totime: [
                "9:40 am",
                "1:15 pm",
                "4:20 pm",
                "7:25 pm"
            ]
        },

        {
            name: "ANNA MOL",

            times: [
                "7:12 am",
                "8:15 am",
                "10:10 am",
                "4:08 pm"
            ],

            totime: [
                "7:47 am",
                "8:50 am",
                "10:45 am",
                "4:43 pm"
            ]
        }

    ];


    const busContainer =
        document.getElementById("Ann1");


    if (!busContainer) {
        return;
    }


    buses.forEach(bus => {

        bus.times.forEach((ti, index) => {

            const busList =
                document.createElement('div');


            busList.classList.add('bus-list');


            busList.innerHTML = `

                <div class="route-animation">

                    <div class="route-line"></div>

                    <div class="route-dot start-dot"></div>

                    <div class="route-bus">
                        <i class="fa-solid fa-bus"></i>
                    </div>

                    <div class="route-dot end-dot"></div>

                </div>


                <div class="from">
                    <h5>FISAT</h5>
                    <h6>${ti}</h6>
                </div>


                <div class="to">
                    <h5>Angamaly</h5>
                    <h6>${bus.totime[index]}</h6>
                </div>


                <button onclick='window.location.href="https://maps.app.goo.gl/y6qQhxeokHwmD8Wq8"'>
                    Stop Direction >>
                </button>


                <div class="bus-name">
                    <h5>Bus :</h5>
                </div>


                <div class="time">
                    <p>${bus.name}</p>
                </div>

            `;


            busContainer.appendChild(busList);

        });

    });

};


/* =========================================================
   ANGAMALY -> FISAT
   ========================================================= */

const addBuses1 = () => {

    const buses = [

        {
            name: "FISAT AVE",

            times: [
                "7:00 am",
                "8:20 am",
                "9:55 am",
                "10:25 am",
                "1:50 pm",
                "4:45 pm",
                "5:35 pm",
                "5:50 pm"
            ],

            totime: [
                "7:35 am",
                "8:55 am",
                "10:30 am",
                "11:00 am",
                "2:25 pm",
                "5:20 pm",
                "6:10 pm",
                "6:25 pm"
            ]
        },


        {
            name: "FISAT",

            times: [
                "6:28 am",
                "7:32 am",
                "9:32 am",
                "11:40 am",
                "2:05 pm",
                "5:20 pm"
            ],

            totime: [
                "6:58 am",
                "8:02 am",
                "10:02 am",
                "12:10 pm",
                "2:35 pm",
                "5:50 pm"
            ]
        },


        {
            name: "Pandipally",

            times: [
                "7:15 am",
                "8:30 am",
                "9:10 am",
                "10:00 am",
                "2:20 pm",
                "3:45 pm",
                "6:45 pm"
            ],

            totime: [
                "7:50 am",
                "9:05 am",
                "9:45 am",
                "10:35 am",
                "2:55 pm",
                "4:20 pm",
                "7:20 pm"
            ]
        }

    ];


    const busContainer =
        document.getElementById("Ann");


    if (!busContainer) {
        return;
    }


    buses.forEach(bus => {

        bus.times.forEach((ti, index) => {

            const busList =
                document.createElement('div');


            busList.classList.add('bus-list');


            busList.innerHTML = `

                <div class="route-animation">

                    <div class="route-line"></div>

                    <div class="route-dot start-dot"></div>

                    <div class="route-bus">
                        <i class="fa-solid fa-bus"></i>
                    </div>

                    <div class="route-dot end-dot"></div>

                </div>


                <div class="from">
                    <h5>Angamaly</h5>
                    <h6>${ti}</h6>
                </div>


                <div class="to">
                    <h5>FISAT</h5>
                    <h6>${bus.totime[index]}</h6>
                </div>


                <button onclick='window.location.href="https://maps.app.goo.gl/y6qQhxeokHwmD8Wq8"'>
                    Stop Direction >>
                </button>


                <div class="bus-name">
                    <h5>Bus :</h5>
                </div>


                <div class="time">
                    <p>${bus.name}</p>
                </div>

            `;


            busContainer.appendChild(busList);

        });

    });

};


/* =========================================================
   MOOKKANOOR -> ANGAMALY
   ========================================================= */

const addMookkannoorToAngamaly = () => {

    const times = [

        "5:45 am",
        "6:25 am",
        "6:45 am",
        "7:02 am",
        "7:18 am",
        "7:37 am",
        "7:50 am",
        "8:00 am",
        "8:08 am",
        "8:22 am",
        "8:35 am",
        "8:41 am",
        "8:52 am",
        "9:10 am",
        "9:27 am",
        "9:48 am",
        "10:00 am",
        "10:17 am",
        "10:21 am",
        "10:40 am",
        "10:55 am",
        "11:10 am",
        "11:35 am",
        "12:00 pm",
        "12:15 pm",
        "12:30 pm",
        "12:40 pm",
        "1:00 pm",
        "1:10 pm",
        "1:30 pm",
        "1:44 pm",
        "2:02 pm",
        "2:25 pm",
        "2:30 pm",
        "2:45 pm",
        "3:05 pm",
        "3:20 pm",
        "3:45 pm",
        "4:00 pm",
        "4:15 pm",
        "4:35 pm",
        "4:53 pm",
        "5:10 pm",
        "5:20 pm",
        "5:40 pm",
        "6:00 pm",
        "6:15 pm",
        "6:30 pm",
        "6:40 pm",
        "6:50 pm",
        "7:00 pm",
        "7:15 pm",
        "7:30 pm"

    ];


    const totime = [

        "6:15 am",
        "6:55 am",
        "7:15 am",
        "7:32 am",
        "7:48 am",
        "8:07 am",
        "8:20 am",
        "8:30 am",
        "8:38 am",
        "8:52 am",
        "9:05 am",
        "9:11 am",
        "9:22 am",
        "9:40 am",
        "9:57 am",
        "10:18 am",
        "10:30 am",
        "10:47 am",
        "10:51 am",
        "11:10 am",
        "11:25 am",
        "11:40 am",
        "12:05 pm",
        "12:30 pm",
        "12:45 pm",
        "1:00 pm",
        "1:10 pm",
        "1:30 pm",
        "1:40 pm",
        "2:00 pm",
        "2:14 pm",
        "2:32 pm",
        "2:55 pm",
        "3:00 pm",
        "3:15 pm",
        "3:35 pm",
        "3:50 pm",
        "4:15 pm",
        "4:30 pm",
        "4:45 pm",
        "5:05 pm",
        "5:23 pm",
        "5:40 pm",
        "5:50 pm",
        "6:10 pm",
        "6:30 pm",
        "6:45 pm",
        "7:00 pm",
        "7:10 pm",
        "7:20 pm",
        "7:30 pm",
        "7:45 pm",
        "8:00 pm"

    ];


    const busContainer =
        document.getElementById("MokAng");


    if (!busContainer) {
        return;
    }


    times.forEach((ti, index) => {

        const busList =
            document.createElement('div');


        busList.classList.add('bus-list');


        busList.innerHTML = `

            <div class="route-animation">

                <div class="route-line"></div>

                <div class="route-dot start-dot"></div>

                <div class="route-bus">
                    <i class="fa-solid fa-bus"></i>
                </div>

                <div class="route-dot end-dot"></div>

            </div>


            <div class="from">
                <h5>Mookkannoor</h5>
                <h6>${ti}</h6>
            </div>


            <div class="to">
                <h5>Angamaly</h5>
                <h6>${totime[index]}</h6>
            </div>


            <button onclick='window.location.href="https://maps.app.goo.gl/y6qQhxeokHwmD8Wq8"'>
                Stop Direction >>
            </button>

        `;


        busContainer.appendChild(busList);

    });

};


/* =========================================================
   ANGAMALY -> MOOKKANOOR
   ========================================================= */

const toMookannor = () => {

    const time = [

        "6:35 am",
        "7:12 am",
        "7:18 am",
        "7:29 am",
        "7:48 am",
        "8:07 am",
        "8:11 am",
        "8:27 am",
        "8:47 am",
        "8:55 am",
        "9:00 am",
        "9:22 am",
        "9:38 am",
        "9:52 am",
        "10:07 am",
        "10:23 am",
        "10:42 am",
        "10:53 am",
        "11:12 am",
        "11:32 am",
        "11:57 am",
        "12:13 pm",
        "12:29 pm",
        "12:57 pm",
        "1:19 pm",
        "1:32 pm",
        "1:47 pm",
        "2:00 pm",
        "2:20 pm",
        "2:30 pm",
        "2:50 pm",
        "3:10 pm",
        "3:20 pm",
        "3:30 pm",
        "4:00 pm",
        "4:20 pm",
        "4:30 pm",
        "4:47 pm",
        "4:54 pm",
        "5:15 pm",
        "5:20 pm",
        "5:34 pm",
        "5:40 pm",
        "6:00 pm",
        "6:05 pm",
        "6:20 pm",
        "6:32 pm",
        "6:43 pm",
        "7:13 pm",
        "7:32 pm",
        "8:00 pm",
        "8:25 pm"

    ];


    const totime = [

        "7:05 am",
        "7:42 am",
        "7:48 am",
        "7:59 am",
        "8:18 am",
        "8:37 am",
        "8:41 am",
        "8:57 am",
        "9:17 am",
        "9:25 am",
        "9:30 am",
        "9:52 am",
        "10:08 am",
        "10:22 am",
        "10:37 am",
        "10:53 am",
        "11:12 am",
        "11:23 am",
        "11:42 am",
        "12:02 pm",
        "12:27 pm",
        "12:43 pm",
        "12:59 pm",
        "1:27 pm",
        "1:49 pm",
        "2:02 pm",
        "2:17 pm",
        "2:30 pm",
        "2:50 pm",
        "3:00 pm",
        "3:20 pm",
        "3:40 pm",
        "3:50 pm",
        "4:00 pm",
        "4:30 pm",
        "4:50 pm",
        "5:00 pm",
        "5:17 pm",
        "5:24 pm",
        "5:45 pm",
        "5:50 pm",
        "6:04 pm",
        "6:10 pm",
        "6:30 pm",
        "6:35 pm",
        "6:50 pm",
        "7:02 pm",
        "7:13 pm",
        "7:43 pm",
        "8:02 pm",
        "8:30 pm",
        "8:55 pm"

    ];


    const busContainer =
        document.getElementById('Mok');


    if (!busContainer) {
        return;
    }


    time.forEach((ti, index) => {

        const busList =
            document.createElement('div');


        busList.classList.add('bus-list');


        busList.innerHTML = `

            <div class="route-animation">

                <div class="route-line"></div>

                <div class="route-dot start-dot"></div>

                <div class="route-bus">
                    <i class="fa-solid fa-bus"></i>
                </div>

                <div class="route-dot end-dot"></div>

            </div>


            <div class="from">
                <h5>Angamaly</h5>
                <h6>${ti}</h6>
            </div>


            <div class="to">
                <h5>Mookkannoor</h5>
                <h6>${totime[index]}</h6>
            </div>


            <button onclick='window.open("https://maps.app.goo.gl/qn7uvrG3CNs6uC6L9","blank")'>
                Stop Direction >>
            </button>

        `;


        busContainer.appendChild(busList);

    });

};


/* =========================================================
   ROUTE VARIABLES
   ========================================================= */

let addfisat = false;
let addangamaly = false;
let addmookanoor = false;
let addmookangamaly = false;


/* =========================================================
   HIDE ALL ROUTES
   ========================================================= */

const hideAllRoutes = () => {

    document.querySelectorAll('.Buses').forEach(bus => {

        bus.style.display = "none";

    });

};


/* =========================================================
   SHOW SELECTED ROUTE
   ========================================================= */

const showRoute = (containerId) => {

    hideAllRoutes();

    const container =
        document.getElementById(containerId);


    if (container) {

        container.style.display = "flex";

    }

};


/* =========================================================
   FISAT -> ANGAMALY
   ========================================================= */

const fisatToAngamaly = () => {

    if (!addfisat) {

        addBuses();

        addfisat = true;

    }

    showRoute("Ann1");

    filterRouteByTime("Ann1");

};


/* =========================================================
   ANGAMALY -> FISAT
   ========================================================= */

const angamalyToFisat = () => {

    if (!addangamaly) {

        addBuses1();

        addangamaly = true;

    }

    showRoute("Ann");

    filterRouteByTime("Ann");

};


/* =========================================================
   ANGAMALY -> MOOKKANOOR
   ========================================================= */

const angamalyToMookannoor = () => {

    if (!addmookanoor) {

        toMookannor();

        addmookanoor = true;

    }

    showRoute("Mok");

    filterRouteByTime("Mok");

};


/* =========================================================
   MOOKKANOOR -> ANGAMALY
   ========================================================= */

const mookannoorToAngamaly = () => {

    if (!addmookangamaly) {

        addMookkannoorToAngamaly();

        addmookangamaly = true;

    }

    showRoute("MokAng");

    filterRouteByTime("MokAng");

};


/* =========================================================
   GET HOUR FROM INPUT
   ========================================================= */

const getHourFromInput = () => {

    const input = getTime();


    if (!input) {
        return null;
    }


    const parts =
        input.split(':');


    let hour =
        parseInt(parts[0], 10);


    if (isNaN(hour)) {
        return null;
    }


    return hour;

};


/* =========================================================
   CONVERT TO 12-HOUR FORMAT
   ========================================================= */

const get12Hour = (hour) => {

    if (hour === 0) {
        return 12;
    }


    if (hour > 12) {
        return hour - 12;
    }


    return hour;

};


/* =========================================================
   CONVERT TIME STRING TO MINUTES
   ========================================================= */

const timeToMinutes = (timeString) => {

    const match =
        timeString.match(
            /^(\d{1,2}):(\d{2})\s*(am|pm)$/i
        );


    if (!match) {
        return null;
    }


    let hour =
        parseInt(match[1], 10);

    const minute =
        parseInt(match[2], 10);

    const ampm =
        match[3].toLowerCase();


    /* Convert to 24-hour format */

    if (ampm === "am") {

        if (hour === 12) {
            hour = 0;
        }

    } else {

        if (hour !== 12) {
            hour += 12;
        }

    }


    return (hour * 60) + minute;

};


/* =========================================================
   FILTER ROUTE BY TIME
   =========================================================

   Selected time:
       7:20 AM

   Shows buses between:
       7:20 AM -> 8:20 AM

   This means the selected time is the START
   of the one-hour search window.
   ========================================================= */

const filterRouteByTime = (containerId) => {

    const input =
        getTime();


    const def =
        document.getElementById('default');


    const container =
        document.getElementById(containerId);


    if (!container) {
        return;
    }


    const busLists =
        container.querySelectorAll('.bus-list');


    /* =====================================================
       NO TIME SELECTED
       ===================================================== */

    if (!input) {

        busLists.forEach(bus => {

            bus.style.display = "grid";

        });


        container.style.display = "flex";


        if (def) {
            def.style.display = "none";
        }


        return;
    }


    /* =====================================================
       CONVERT INPUT TIME TO MINUTES
       ===================================================== */

    const inputParts =
        input.split(':');


    const inputHour =
        parseInt(inputParts[0], 10);


    const inputMinute =
        parseInt(inputParts[1], 10);


    if (
        isNaN(inputHour) ||
        isNaN(inputMinute)
    ) {

        return;

    }


    const inputTotalMinutes =
        (inputHour * 60) + inputMinute;


    /* =====================================================
       ONE HOUR SEARCH WINDOW
       ===================================================== */

    const endTime =
        inputTotalMinutes + 60;


    let found = false;


    /* =====================================================
       CHECK EVERY BUS
       ===================================================== */

    busLists.forEach(bus => {

        const timeElement =
            bus.querySelector('.from h6');


        if (!timeElement) {

            bus.style.display = "none";

            return;

        }


        const timeText =
            timeElement.textContent.trim();


        const busTotalMinutes =
            timeToMinutes(timeText);


        if (busTotalMinutes === null) {

            bus.style.display = "none";

            return;

        }


        /* =================================================
           BUS IS WITHIN THE NEXT ONE HOUR
           ================================================= */

        if (
            busTotalMinutes >= inputTotalMinutes &&
            busTotalMinutes <= endTime
        ) {

            bus.style.display = "grid";

            found = true;

        } else {

            bus.style.display = "none";

        }

    });


    /* =====================================================
       DISPLAY RESULTS
       ===================================================== */

    if (found) {

        container.style.display = "flex";


        if (def) {

            def.innerHTML =
                "<h1>The bus timings provided may vary according to the traffic conditions</h1>";

            def.style.display = "block";

        }

    } else {

        container.style.display = "none";


        if (def) {

            def.innerHTML =
                "<h1>There are no buses available within the next hour</h1>";

            def.style.display = "block";

        }

    }

};


/* =========================================================
   ORIGINAL FUNCTION
   ========================================================= */

const addFit = () => {

    filterRouteByTime("Ann1");

};


/* =========================================================
   TIME SEARCH
   ========================================================= */

const hideTime = () => {

    const activeRoute =
        document.querySelector(
            '.Buses[style*="flex"]'
        );


    if (activeRoute) {

        filterRouteByTime(
            activeRoute.id
        );

    }

};


/* =========================================================
   HIDE INDIVIDUAL ROUTES
   ========================================================= */

const hideFisat = () => {

    document.querySelectorAll('.fit').forEach(div => {

        div.style.display = 'none';

    });

};


const hideAngamaly = () => {

    document.querySelectorAll('.ang').forEach(div => {

        div.style.display = 'none';

    });

};


const hideMookannor = () => {

    document.querySelectorAll('.mok').forEach(div => {

        div.style.display = 'none';

    });

};


const hideMookAngamaly = () => {

    document.querySelectorAll('.mokAng').forEach(div => {

        div.style.display = 'none';

    });

};


/* =========================================================
   HIDE ALL BUS CARDS
   ========================================================= */

const hideDiv = () => {

    document.querySelectorAll(".bus-list").forEach(div => {

        div.style.display = "none";

    });

};