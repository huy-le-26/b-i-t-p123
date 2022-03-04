const stopwatchContainer = document.querySelector("#stopwatch")

const btnAddStopwatch = document.querySelector("#addStopwatch") 
// nút add
//  hàm đổi thời gian 
const convertSecondToTime = (seconds) => {
    let s = seconds % 60
    let m = Math.floor(seconds / 60)

    if (s < 10) s = "0" + s
    if (m < 10) m = "0" + m

    return m + ":" + s
}

btnAddStopwatch.addEventListener("click", () => {
    const stopwatch = new Stopwatch()
    stopwatchContainer.appendChild(stopwatch.container)
})
let isStart=true;

class Stopwatch {
    count = 0;
    interval = null;

    container;
    txtTime;
    btnStart;
    btnPause;
    constructor() {
        this.container = document.createElement("div")

        this.txtTime = document.createElement("span")
        this.txtTime.innerHTML = "00:00"

        this.btnStart = document.createElement("button")
        this.btnStart.innerHTML = "Start"
        this.btnStart.addEventListener("click", this.handleStart)

        this.btnPause = document.createElement("button")
        this.btnPause.innerHTML = "Pause"
        this.btnPause.addEventListener("click", this.handlePause)
        
        this.btnStop = document.createElement("button")
        this.btnStop.innerHTML = "Stop"
        this.btnStop.addEventListener("click", this.handlePause)

        this.container.appendChild(this.txtTime)
        this.container.appendChild(this.btnStart)
        this.container.appendChild(this.btnPause)
        this.container.appendChild(this.btnStop)

    }
// hàm chạy
    handleStart = () => {
       

        
        this.interval = setInterval(() => {
            // run code
            this.count++;
            this.txtTime.innerHTML = convertSecondToTime(this.count)
        }, 1000)
        this.isStart= true;
   
    }

    handlePause = () => {
        clearInterval(this.interval)
        this.isStart= false;

    }
    handlePause = () => {
        this.txtTime.innerHTML = "00:00"
        this.isStart= false;


    }
}
