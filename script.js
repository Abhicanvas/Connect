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

const directM = () => { };


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
   COMMON CARD STYLE
   ========================================================= */

const setCardPosition = (busList) => {

    busList.classList.add('bus-list');

    busList.style.position = "relative";

};


/* =========================================================
   FISAT -> ANGAMALY
   ========================================================= */

const addBuses = () => {

    const buses = [

        {
            name: "ANNA MOL",

            times: [
                "6:28 am",
                "7:30 am",
                "9:28 am",
                "11:40 am",
                "2:03 pm",
                "3:20 pm",
                "5:22 pm"
            ],

            totime: [
                "6:58 am",
                "8:00 am",
                "9:58 am",
                "12:10 pm",
                "2:33 pm",
                "3:50 pm",
                "5:52 pm"
            ],

            special: false
        },


        {
            name: "Pandipilly",

            times: [
                "3:58 pm"
            ],

            totime: [
                "4:28 pm"
            ],

            special: true
        },


        {
            name: "FISAT ARCH",

            times: [
                "4:44 pm"
            ],

            totime: [
                "5:14 pm"
            ],

            special: true
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


            setCardPosition(busList);


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

                    <h6 class="bus-time">
                        ${ti}
                    </h6>

                    <h5 class="bus-place"
                        style="margin:0;">
                        FISAT
                    </h5>

                </div>


                <div class="to">

                    <h6 class="bus-time">
                        ${bus.totime[index]}
                    </h6>

                    <h5 class="bus-place">
                        Angamaly
                    </h5>

                </div>




                <div class="time">

                    <p>${bus.name}</p>

                    ${bus.special
                    ? `
                          
                        `
                    : ''
                }

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


            setCardPosition(busList);


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

                    <h6 class="bus-time"
                        style="margin:0;">
                        ${ti}
                    </h6>

                    <h5 class="bus-place"
                        style="margin:0;">
                        Angamaly
                    </h5>

                </div>


                <div class="to">

                    <h6 class="bus-time"
                        style="margin:0;">
                        ${bus.totime[index]}
                    </h6>

                    <h5 class="bus-place"
                        style="margin:0;">
                        FISAT
                    </h5>

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

        "5:40 am",
        "6:00 am",
        "6:35 am",
        "6:45 am",
        "7:02 am",
        "7:21 am",
        "7:37 am",
        "7:50 am",
        "8:00 am",
        "8:08 am",
        "8:13 am",
        "8:25 am",
        "8:35 am",
        "8:50 am",
        "9:08 am",
        "9:28 am",
        "9:47 am",
        "10:00 am",
        "10:05 am",
        "10:20 am",
        "10:25 am",
        "10:40 am",
        "10:55 am",
        "11:10 am",
        "11:18 am",
        "11:45 am",
        "12:00 pm",
        "12:15 pm",
        "12:30 pm",
        "12:45 pm",
        "1:00 pm",
        "1:10 pm",
        "1:28 pm",
        "1:45 pm",
        "2:07 pm",
        "2:25 pm",
        "2:30 pm",
        "2:50 pm",
        "3:05 pm",
        "3:25 pm",
        "3:45 pm",
        "4:05 pm",
        "4:20 pm",
        "4:35 pm",
        "4:52 pm",
        "5:10 pm",
        "5:20 pm",
        "5:42 pm",
        "6:00 pm",
        "6:13 pm",
        "6:20 pm",
        "6:30 pm"

    ];


    /*
       ARRIVAL TIMES ARE APPROXIMATE.

       Average travel time used:
       +32 minutes

       This is based on the usual
       30–35 minute journey.
    */

    const totime = [

        "6:12 am",
        "6:32 am",
        "7:07 am",
        "7:17 am",
        "7:34 am",
        "7:53 am",
        "8:09 am",
        "8:22 am",
        "8:32 am",
        "8:40 am",
        "8:45 am",
        "8:57 am",
        "9:07 am",
        "9:22 am",
        "9:40 am",
        "10:00 am",
        "10:19 am",
        "10:32 am",
        "10:37 am",
        "10:52 am",
        "10:57 am",
        "11:12 am",
        "11:27 am",
        "11:42 am",
        "11:50 am",
        "12:17 pm",
        "12:32 pm",
        "12:47 pm",
        "1:02 pm",
        "1:17 pm",
        "1:32 pm",
        "1:42 pm",
        "2:00 pm",
        "2:17 pm",
        "2:39 pm",
        "2:57 pm",
        "3:02 pm",
        "3:22 pm",
        "3:37 pm",
        "3:57 pm",
        "4:17 pm",
        "4:37 pm",
        "4:52 pm",
        "5:07 pm",
        "5:24 pm",
        "5:42 pm",
        "5:52 pm",
        "6:14 pm",
        "6:32 pm",
        "6:45 pm",
        "6:52 pm",
        "7:02 pm"

    ];


    const busContainer =
        document.getElementById("MokAng");


    if (!busContainer) {
        return;
    }


    times.forEach((ti, index) => {

        const busList =
            document.createElement('div');


        setCardPosition(busList);


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

                <h6 class="bus-time"
                    style="margin:0;">
                    ${ti}
                </h6>

                <h5 class="bus-place"
                    style="margin:0;">
                    Mookkannoor
                </h5>

            </div>


            <div class="to">

                <h6 class="bus-time"
                    style="margin:0;">
                    ${totime[index]}
                </h6>

                <h5 class="bus-place"
                    style="margin:0;">
                    Angamaly
                </h5>

            </div>


           

        `;


        busContainer.appendChild(busList);

    });

};
//  <button onclick='window.location.href="https://maps.app.goo.gl/y6qQhxeokHwmD8Wq8"'>
//                 Stop Direction >>
//             </button>
/* =========================================================
   ANGAMALY -> MOOKKANOOR
   ========================================================= */

const toMookannor = () => {

    /*
       THE PREVIOUS ARRIVAL TIMES ARE NOW USED
       AS DEPARTURE TIMES.

       APPROXIMATE ARRIVAL = DEPARTURE + 30 MINUTES.
    */

    const time = [

        "10:25 am",
        "10:42 am",
        "10:53 am",
        "11:12 am",
        "11:32 am",
        "11:57 am",
        "12:12 pm",
        "12:29 pm",
        "12:47 pm",
        "12:57 pm",
        "1:18 pm",
        "1:32 pm",
        "1:47 pm",
        "2:02 pm",
        "2:20 pm",
        "2:32 pm",
        "2:52 pm",
        "3:12 pm",
        "3:20 pm",
        "3:35 pm",
        "3:49 pm",
        "4:00 pm",
        "4:20 pm",
        "4:32 pm",
        "4:47 pm",
        "4:55 pm",
        "5:15 pm",
        "5:20 pm",
        "5:34 pm",
        "5:44 pm",
        "6:00 pm",
        "6:08 pm",
        "6:20 pm",
        "6:32 pm",
        "6:47 pm",
        "6:51 pm",
        "7:02 pm",
        "7:15 pm",
        "7:35 pm",
        "8:05 pm",
        "8:35 pm"

    ];


    // Estimated arrival = departure + approximately 30 minutes

    const totime = [

        "10:55 am",
        "11:12 am",
        "11:23 am",
        "11:42 am",
        "12:02 pm",
        "12:27 pm",
        "12:42 pm",
        "12:59 pm",
        "1:17 pm",
        "1:27 pm",
        "1:48 pm",
        "2:02 pm",
        "2:17 pm",
        "2:32 pm",
        "2:50 pm",
        "3:02 pm",
        "3:22 pm",
        "3:42 pm",
        "3:50 pm",
        "4:05 pm",
        "4:19 pm",
        "4:30 pm",
        "4:50 pm",
        "5:02 pm",
        "5:17 pm",
        "5:25 pm",
        "5:45 pm",
        "5:50 pm",
        "6:04 pm",
        "6:14 pm",
        "6:30 pm",
        "6:38 pm",
        "6:50 pm",
        "7:02 pm",
        "7:17 pm",
        "7:21 pm",
        "7:32 pm",
        "7:45 pm",
        "8:05 pm",
        "8:35 pm",
        "9:05 pm"

    ];


    const busContainer =
        document.getElementById('Mok');


    if (!busContainer) {
        return;
    }


    time.forEach((ti, index) => {

        const busList =
            document.createElement('div');


        setCardPosition(busList);


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

                <h6 class="bus-time"
                    style="margin:0;">
                    ${ti}
                </h6>

                <h5 class="bus-place"
                    style="margin:0;">
                    Angamaly
                </h5>

            </div>


            <div class="to">

                <h6 class="bus-time"
                    style="margin:0;">
                    ${totime[index]}
                </h6>

                <h5 class="bus-place"
                    style="margin:0;">
                    Mookkannoor
                </h5>

            </div>


           

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
   ========================================================= */

const filterRouteByTime = (containerId) => {

    const input = getTime();

    const def =
        document.getElementById('default');

    const container =
        document.getElementById(containerId);


    if (!container) {
        return;
    }


    const busLists =
        Array.from(
            container.querySelectorAll('.bus-list')
        );


    /* =====================================================
       SORT ALL BUSES BY DEPARTURE TIME
       ===================================================== */

    busLists.sort((a, b) => {

        const timeA =
            a.querySelector('.from h6');

        const timeB =
            b.querySelector('.from h6');


        if (!timeA || !timeB) {
            return 0;
        }


        const minutesA =
            timeToMinutes(
                timeA.textContent.trim()
            );


        const minutesB =
            timeToMinutes(
                timeB.textContent.trim()
            );


        return minutesA - minutesB;

    });


    busLists.forEach(bus => {

        container.appendChild(bus);

    });


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
       CONVERT INPUT TIME
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
       SEARCH WINDOW
       ===================================================== */

    const hourStart =
        inputHour * 60;


    const endTime =
        inputTotalMinutes + 60;


    let found = false;


    /* =====================================================
       FILTER BUSES
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


        if (
            busTotalMinutes >= hourStart &&
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
                "<h1>There are no buses available within the selected time range</h1>";

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