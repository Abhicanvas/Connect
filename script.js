var currentHour
window.onload = () => {
    var currentTime = new Date();  // Get the current date and time
     currentHour = currentTime.getHours();
    const busLists = document.querySelectorAll('.bus-list');
    busLists.forEach((busList) => {
        busList.style.display = "none"; 
    });
    addAnn();
    addMookanoor();
    hideTime();
};
    const getTime=() =>
    { 
        const inputValue = document.getElementById("input-time").value;
        return inputValue;
    }
    const getapm=(hour) =>
    {
        if(hour>12)
            {
                return 'pm';
            }
        else
        {
            return 'am';
        }
    }
    const addStmary=()=>
    {
        const times = [
            "9:10 am", "12:45 pm", "3:50 pm","7:00 pm"
        ];
        const totime=[
            "9:40 am", "1:15 pm", "4:20 pm", "7:30 pm"
        ];
        
          const busContainer = document.getElementById('St');

          times.forEach((ti, index) => {
              const toTime = totime[index]; 
              const busList = document.createElement('div');
              busList.classList.add('bus-list');
              
              busList.innerHTML = `
                  <img src="img/Frame 35058.png" alt="">
                  <div class="from">
                      <h5>Angamaly</h5>
                      <h6>${ti}</h6>
                  </div>
                  <div class="to">
                      <h5>Fisat Ave</h5>
                      <h6>${toTime}</h6> <!-- Display the corresponding time -->
                  </div>
                  <button>Show Direction >></button>
                  <div class="bus-name">
                      <h5>Bus :</h5>
                  </div>
                      <div class="time">
                        <p>ST MARYS</p>
                      </div>
              `;
              
              busContainer.appendChild(busList);
          });
    }
    const addAnn1=()=>
        {
            const times = [
                "7:12 am", 
                "8:15 am", 
                "10:10 am", 
                "4:08 pm", 
            ];
            const totime=[
                "6:58 am",
                "8:02 am",
                "10:02 am",
                "12:10 pm",
                "2:35 pm",
                "5:50 pm"
            ];
            
              const busContainer = document.getElementById('Ann1');
    
              times.forEach((ti, index) => {
                  const toTime = totime[index]; 
                  const busList = document.createElement('div');
                  busList.classList.add('bus-list');
                  
                  busList.innerHTML = `
                      <img src="img/Frame 35058.png" alt="">
                      <div class="from">
                          <h5>Angamaly</h5>
                          <h6>${ti}</h6>
                      </div>
                      <div class="to">
                          <h5>FISAT</h5>
                          <h6>${toTime}</h6> <!-- Display the corresponding time -->
                      </div>
                      <button>Show Direction >></button>
                      <div class="bus-name">
                          <h5>Bus :</h5>
                      </div>
                          <div class="time">
                            <p>ANNA MOL</p>
                          </div>
                  `;
                  
                  busContainer.appendChild(busList);
              });
        }
    const addAnn=()=>
        {
            const times = [
                "6:28 am", 
                "7:32 am", 
                "9:32 am", 
                "11:40 am", 
                "2:05 pm", 
                "5:20 pm"
            ];
            const totime=[
                "6:58 am",
                "8:02 am",
                "10:02 am",
                "12:10 pm",
                "2:35 pm",
                "5:50 pm"
            ];
            
              const busContainer = document.getElementById('Ann');
    
              times.forEach((ti, index) => {
                  const toTime = totime[index]; 
                  const busList = document.createElement('div');
                  busList.classList.add('bus-list');
                  
                  busList.innerHTML = `
                      <img src="img/Frame 35058.png" alt="">
                      <div class="from">
                          <h5>FISAT</h5>
                          <h6>${ti}</h6>
                      </div>
                      <div class="to">
                          <h5>Angamally</h5>
                          <h6>${toTime}</h6> <!-- Display the corresponding time -->
                      </div>
                      <button>Show Direction >></button>
                      <div class="bus-name">
                          <h5>Bus :</h5>
                      </div>
                          <div class="time">
                            <p>ANNA MOL</p>
                          </div>
                  `;
                  
                  busContainer.appendChild(busList);
              });
        }
    const addMookanoor=() =>{
        const times = [
            "5:45 am", "6:25 am", "6:45 am", "7:02 am", "7:18 am",
            "7:37 am", "7:50 am", "8:00 am", "8:08 am", "8:22 am",
            "8:35 am", "8:41 am", "8:52 am", "9:10 am", "9:27 am",
            "9:48 am", "10:00 am", "10:17 am", "10:21 am", "10:40 am",
            "10:55 am", "11:10 am", "11:35 am", "12:00 PM", "12:15 PM",
            "12:30 pm", "12:40 pm", "1:00 pm", "1:10 pm", "1:30 pm",
            "1:44 pm", "2:02 pm", "2:25 pm", "2:30 pm", "2:45 pm",
            "3:05 pm", "3:20 pm", "3:45 pm", "4:00 pm", "4:15 pm",
            "4:35 pm", "4:53 pm", "5:10 pm", "5:20 pm", "5:40 pm",
            "6:00 pm", "6:15 pm", "6:30 pm", "6:40 pm", "6:50 pm",
            "7:00: pm", "7:15: pm", "7:30: pm"
        ];
        const totime=[
            "6:15 am", "6:55 am", "7:15 am", "7:32 am", "7:48 am",
            "8:07 am", "8:20 am", "8:30 am", "8:38 am", "8:52 am",
            "9:05 am", "9:11 am", "9:22 am", "9:40 am", "9:57 am",
            "10:18 am", "10:30 am", "10:47 am", "10:51 am", "11:10 am",
            "11:25 am", "11:40 am", "12:05 pm", "12:30 pm", "12:45 pm",
            "1:00 pm", "1:10 pm", "1:30 pm", "1:40 pm", "2:00 pm",
            "2:14 pm", "2:32 pm", "2:55 pm", "3:00 pm", "3:15 pm",
            "3:35 pm", "3:50 pm", "4:15 pm", "4:30 pm", "4:45 pm",
            "5:05 pm", "5:23 pm", "5:40 pm", "5:50 pm", "6:10 pm",
            "6:30 pm", "6:45 pm", "7:00 pm", "7:10 pm", "7:20 pm",
            "7:30 pm", "7:45 pm", "8:00 pm"
        ];
        const busNames = [
            "ST.SAVIERS",
            "MATHA SUPER",
            "CHERUPUSHPAM",
            "MATHA EXPRESS",
            "MATHA DELUXE",
            "ST.MARYS",
            "BROTHERS",
            "KSRTC",
            "SLEEHA",
            "WHEEL KING",
            "MATHA EXPRESS",
            "DIVINE DELUXE",
            "HERO DELUXE",
            "MARY MATHA",
            "CHERUPUSHPAM",
            "ST.MARYS",
            "SLEEHA",
            "HILL KING",
            "MATHA EXPRESS",
            "MATHA DELUXE",
            "MATHA SUPER",
            "JESUS",
            "BROTHERS",
            "FRIENDS",
            "HERO DELUXE",
            "MATHA EXPRESS",
            "MARY MATHA",
            "SLEEHA",
            "ST.MARYS",
            "HILL KING",
            "ST.MARYS",
            "CHERUPUSHPAM",
            "MATHA DELUXE",
            "ST.SAVIERS",
            "FRIENDS",
            "MARY MATHA",
            "JESUS",
            "BROTHERS",
            "HERO DELUXE",
            "MATHA EXPRESS",
            "HILL KING",
            "SLEEHA",
            "ST.MARYS",
            "HILL KING",
            "MATHA EXPRESS",
            "HILL KING",
            "SLEEHA",
            "FRIENDS",
            "CHERUPUSHPAM",
            "BROTHERS",
            "DIVINE DELUXE",
            "JESUS",
            "MATHA SUPER"
        ];
        
          const busContainer = document.getElementById('Mookkannur');

          times.forEach((ti, index) => {
              const toTime = totime[index]; 
              const busname=busNames[index];
              const busList = document.createElement('div');
              busList.classList.add('bus-list');
              
              busList.innerHTML = `
                  <img src="img/Frame 35058.png" alt="">
                  <div class="from">
                      <h5>Mookkannur</h5>
                      <h6>${ti}</h6>
                  </div>
                  <div class="to">
                      <h5>Angamally</h5>
                      <h6>${toTime}</h6> <!-- Display the corresponding time -->
                  </div>
                  <button>Show Direction >></button>
                  <div class="bus-name">
                      <h5>Bus :</h5>
                  </div>
                      <div class="time">
                        <p>${busname}</p>
                      </div>
              `;
              
              busContainer.appendChild(busList);
          });
    }
    const addFisat=()=>
    {
        addAnn1();
        addStmary();
        hideTime();
    }
    const hideTime = () => { 
       
        let time = getTime(); // Make sure getTime() returns a valid time string

        const date = new Date('1970-01-01T' + time + ':00'); // Create date object
        let hour = date.getHours(); // Get the hour from the time
        if(hour)
        {
            console.log("not working")
        }
        else
        {
            hour=currentHour;
        }
        const suf=getapm(hour);
        if(hour>12)
        {
            hour=hour-12;
        }
        
        console.log(suf);

        console.log("Hour: ", hour); // Debugging the hour
        const buses=document.querySelectorAll('.Buses');
        // Select corresponding bus-list divs
        buses.forEach((bus) => {
            bus.style.display = "none"; 
        });
        // Check if the number of fromTimeElements and busLists are equal
        // Hide all bus lists initially
        buses.forEach((bus, ind) => {
            // Select all from time h6 elements inside the current bus
            const fromTimeElements = bus.querySelectorAll('.from h6'); 
            // Select all bus-list elements inside the current bus
            const busLists = bus.querySelectorAll('.bus-list');
            if (fromTimeElements.length !== busLists.length) {
                console.error("Mismatch between fromTime elements and bus-list elements");
                return;
            }
            fromTimeElements.forEach((element, index) => {
                const timeText = element.textContent.trim();  // Get time text from h6
                const firstLetter = timeText.charAt(0);  // Get the first letter of time (hour)
                const ampm = timeText.slice(-2);  // Get the AM/PM suffix from the end of the string
        
                // Debugging to check what is being compared
                console.log(`Comparing firstLetter: ${firstLetter} with hour: ${hour} and AM/PM: ${ampm} with suffix: ${suf}`);
        
                // Show the matching bus-list and hide others
                if (firstLetter == hour.toString() && ampm === suf) {
                    console.log(`Showing bus list at index ${index}`); // Debugging
                    console.log(ind); // Debugging index of bus
                    buses[ind].style.display = "flex";  // Show the matching bus container
                    busLists[index].style.display = "grid";  // Show the specific bus-list div
                } else {
                    // Hide the bus if it doesn't match
                    busLists[index].style.display = "none"; 
                     // Hide non-matching bus-list divs
                }
            });
        });
        // Loop through each .from h6 and find the one that matches the current hour
        
    };

        function hideDiv() {
            // Get all elements with the class "myDiv"
            const divs = document.getElementsByClassName("bus-list");
            // Loop through the collection and set display to "none"
            for (let div of divs) {
                div.style.display = "none";
            }
        }

        
        
        
