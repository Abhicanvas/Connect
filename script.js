var currentHour
window.onload = () => {
    var currentTime = new Date();  // Get the current date and time
     currentHour = currentTime.getHours();
    const busLists = document.querySelectorAll('.Buses');
    busLists.forEach((busList) => {
        busList.style.display = "none"; 
    });
    const def=document.getElementById('default');
    def.style.display='none';
    const mookkannurSection = document.querySelector('.default');
    mookkannurSection.style.display = 'none';
};
 const directM=()=>
 {

 }
    const getTime=() =>
    { 
        const inputValue = document.getElementById("input-time").value;
        return inputValue;
    }
    const getapm=(hour) =>
    {
        if(hour>=12)
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
            "9:10 am", "12:45 pm", "3:50 pm","6:55 pm"
        ];
        const totime=[
            "9:40 am", "1:15 pm", "4:20 pm", "7:25 pm"
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
                  <button onclick= 'window.location.href="https://maps.app.goo.gl/y6qQhxeokHwmD8Wq8"'>Show Direction >></button>
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
              '7:47 am', '8:50 am',
              '10:45 am', '4:43 pm'
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
                      <button onclick='window.location.href="https://maps.app.goo.gl/y6qQhxeokHwmD8Wq8"'>Show Direction >></button>
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
                      <button onclick='window.location.href="https://maps.app.goo.gl/FeXjDmxGGYVxCbri6"'>Show Direction >></button>
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
                      <h5>Mookkannoor</h5>
                      <h6>${ti}</h6>
                  </div>
                  <div class="to">
                      <h5>Angamally</h5>
                      <h6>${toTime}</h6> <!-- Display the corresponding time -->
                  </div>
                  <button onclick='window.location.href="https://maps.app.goo.gl/27DhF2VcKtfUa6cF6"'>Show Direction >></button>
                  <div class="bus-name">
                      <h5>Bus :</h5>
                  </div>
                      <div class="time">
                        <p>${busname}</p>
                      </div>
              `;
              
              busContainer.appendChild(busList);
              busContainer.appendChild(busList);
              const mookkannurSection = document.querySelector('.default');
              mookkannurSection.style.display = 'block';
          });
    }
    let addfisat=false;
    let addangamaly=false;
    let addmookanoor=false;
    const addFisat=()=>
    {
        if(addfisat==false)
        {
            addAnn1();
            addStmary();
            addfisat=true;
        }
        hideTime();
        hideAngamaly();
        hideMookannor();
    }
    const hideFisat=()=>
    {
        let hide=document.querySelectorAll('.fit')
        hide.forEach((divs)=>
        {
            divs.style.display='none';
        });
    }
    const hideAngamaly=()=>
    {
        let hide=document.querySelectorAll('.ang')
        hide.forEach((divs)=>
        {
            divs.style.display='none';
        });
    }
    const hideMookannor=()=>
    {
        let hide=document.querySelectorAll('.mok')
        hide.forEach((divs)=>
        {
            divs.style.display='none';
        });
    }
    const Mookannoor=()=>
    {
        if(addmookanoor==false)
        {
            toMookannor();
            addmookanoor=true;
        }
        hideTime();
        hideFisat();
        hideAngamaly();
    }
    const addAngamaly=()=>
    {
        
        if(addangamaly==false)
        {
            addAve();
            addPandipally();
            addAnn();
            addMookanoor(); 
            addangamaly=true;
        }
        hideTime();
        hideFisat();
        hideMookannor();
    }
    const addAve=()=>
    {
        const time = [
            "7:00 am",
            "8:20 am",
            "9:55 am",
            "10:25 am",
            "1:50 pm",
            "4:45 pm",
            "5:35 pm",
            "5:50 pm"
          ];
          const totime=  [
            '7:35 am', '8:55 am',
            '10:30 am', '11:00 am',
            '2:25 pm', '5:20 pm',
            '6:10 pm', '6:25 pm'
          ];
          const busContainer = document.getElementById('Ann');
    
          time.forEach((ti, index) => {
              const toTime = totime[index]; 
              const busList = document.createElement('div');
              busList.classList.add('bus-list');
              
              busList.innerHTML = `
                  <img src="img/Frame 35058.png" alt="">
                  <div class="from">
                      <h5>FISAT AVE</h5>
                      <h6>${ti}</h6>
                  </div>
                  <div class="to">
                      <h5>Angamally</h5>
                      <h6>${toTime}</h6> <!-- Display the corresponding time -->
                  </div>
                  <button onclick='window.open("https://maps.app.goo.gl/aHfCB312w5FR7GzU9", "_blank")'>Show Direction >></button>
              `;
              
              busContainer.appendChild(busList);
          }); 
    }
    const toMookannor=()=>
    {
        const time=[ "6:35 am", "7:12 am", "7:18 am", "7:29 am", "7:48 am", "8:07 am", "8:11 am",   "8:27 am", "8:47 am", "8:55 am", "9:00 am", "9:22 am", "9:38 am", "9:52 am",   "10:07 am", "10:23 am", "10:42 am", "10:53 am", "11:12 am", "11:32 am",   "11:57 am", "12:13 pm", "12:29 pm", "12:57 pm", "1:19 pm", "1:32 pm",   "1:47 pm", "2:00 pm", "2:20 pm", "2:30 pm", "2:50 pm", "3:10 pm", "3:20 pm",   "3:30 pm", "4:00 pm", "16:20", "4:30 pm", "4:47 pm", "4:54 pm", "5:15 pm",   "5:20 pm", "5:34 pm", "5:40 pm", "6:00 pm", "6:05 pm", "6:20 pm", "6:32 pm",   "6:43 pm", "7:13 pm", "7:32 pm", "8:00 pm", "8:25 pm"];
        const totime=[ '07:05 am', '07:42 am', '07:48 am', '07:59 am', '08:18 am', '08:37 am', '08:41 am', '08:57 am',  '09:17 am', '09:25 am', '09:30 am', '09:52 am', '10:08 am', '10:22 am', '10:37 am', '10:53 am',  '11:12 am', '11:23 am', '11:42 am', '12:02 pm', '12:27 pm', '12:43 pm', '12:59 pm', '01:27 pm',  '01:49 pm', '02:02 pm', '02:17 pm', '02:30 pm', '02:50 pm', '03:00 pm', '03:20 pm', '03:40 pm',  '03:50 pm', '04:00 pm', '04:30 pm', '16:50', '05:00 pm', '05:17 pm', '05:24 pm', '05:45 pm',  '05:50 pm', '06:04 pm', '06:10 pm', '06:30 pm', '06:35 pm', '06:50 pm', '07:02 pm', '07:13 pm',  '07:43 pm', '08:02 pm', '08:30 pm', '08:55 pm'];
        const busContainer = document.getElementById('Mok');
    
          time.forEach((ti, index) => {
              const toTime = totime[index]; 
              const busList = document.createElement('div');
              busList.classList.add('bus-list');
              
              busList.innerHTML = `
                  <img src="img/Frame 35058.png" alt="">
                  <div class="from">
                      <h5>Angamally</h5>
                      <h6>${ti}</h6>
                  </div>
                  <div class="to">
                      <h5>Mookanoor</h5>
                      <h6>${toTime}</h6> <!-- Display the corresponding time -->
                  </div>
                  <button onclick= 'window.open("https://maps.app.goo.gl/p52B8maKgvCrw4ZF7","blank")'>Show Direction >></button>
              `;
              
              busContainer.appendChild(busList);
          }); 
    }
    const addPandipally=()=>
    {
       const time= [
            '7:15 am', '8:30 am',
            '9:10 am', '10:00 am',
            '2:20 pm', '3:35 pm',
            '6:45 pm'
          ];
         const totime=  [
            '7:50 am', '9:05 am',
            '9:45 am', '10:35 am',
            '2:55 pm', '4:10 pm',
            '7:20 pm'
          ];
          const busContainer = document.getElementById('Ann');
    
          time.forEach((ti, index) => {
              const toTime = totime[index]; 
              const busList = document.createElement('div');
              busList.classList.add('bus-list');
              
              busList.innerHTML = `
                  <img src="img/Frame 35058.png" alt="">
                  <div class="from">
                      <h5>Pandipally</h5>
                      <h6>${ti}</h6>
                  </div>
                  <div class="to">
                      <h5>Angamally</h5>
                      <h6>${toTime}</h6> <!-- Display the corresponding time -->
                  </div>
                  <button onclick= 'window.open("https://maps.app.goo.gl/p52B8maKgvCrw4ZF7","blank")'>Show Direction >></button>
              `;
              
              busContainer.appendChild(busList);
          }); 
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
        const def=document.getElementById('default');
        def.style.display='block';
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
                let firstLetter;
                if(hour>9)
                {
                     firstLetter = timeText.substring(0,2);
                    console.log(firstLetter);
                }
                else
                {
                     firstLetter = timeText.charAt(0);  // Get the first letter of time (hour)
                }
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
                    def.style.display='block';
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

        
        
        
