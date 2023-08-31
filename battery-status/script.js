const chargeLevel = document.getElementsByClassName("charge-level");
const charge = document.getElementById("charge");
const chargingTimeRef = document.getElementsByClassName("battery-info");
const chargingLevel = document.getElementsByClassName("charing-message")

document.getElementsByClassName("check-status", onclick = () => {
    if (!navigator.getBattery) {
        alert("The Browser Dose Not Support The Battery Api")
    }

    navigator.getBattery().then((battery) => {
        function updateAllBatteryInfo() {
            updateChargingInfo();
            updateLevelInfo();
        }
        updateAllBatteryInfo();
        //When the charging status changes
        battery.addEventListener("chargingchange", () => {
            updateAllBatteryInfo();
        });
        //When the Battery Levvel Changes
        battery.addEventListener("levelchange", () => {
            updateAllBatteryInfo();
        });
        function updateChargingInfo() {
            if (battery.charging) {
                charge.classList.add("active");
                chargingTimeRef[0].innerText = "";
                if (`${parseInt(battery.level * 100)}%` === "100%") {
                    chargingLevel[0].innerText = "It seems Your battery is full  please, plugg out your Charger"
                    chargingLevel[0].style.backgroundColor = "rgba(0, 128, 0, 0.292)";

                }
            } else {
                charge.classList.remove("active");
                //Display time left to discharge only when it is a integer value i.e not infinity
                if (parseInt(battery.dischargingTime)) {
                    let hr = parseInt(battery.dischargingTime / 3600);
                    let min = parseInt(battery.dischargingTime / 60 - hr * 60);
                    chargingTimeRef[0].innerText = `${hr}hr ${min}mins remaining`;
                }
                if ((battery.level * 100) < 21) {
                    chargingLevel[0].style.backgroundColor = "rgba(255, 0, 0, 0.361)"
                    chargingLevel[0].innerText = "It seems Your battery percentage is very low please, plugged in your Charger"
                    charge.style.backgroundColor = "red"
                } else if ((battery.level * 100) < 51) {
                    chargingLevel[0].style.backgroundColor = "rgba(0, 128, 0, 0)";
                    chargingLevel[0].innerText = ""
                    charge.style.backgroundColor = "red"
                } else if ((battery.level * 100) < 100) {
                    chargingLevel[0].style.backgroundColor = "rgba(0, 128, 0, 0)";
                    chargingLevel[0].innerText = ""
                    charge.style.backgroundColor = "green"
                }
            }
        }
        //Updating battery level
        function updateLevelInfo() {
            let batteryLevel = `${parseInt(battery.level * 100)}%`;
            charge.style.width = batteryLevel - '2.5px';

            chargeLevel[0].textContent = batteryLevel;
        }
    })
})




