const stopwatchContainer = document.querySelector("#stopwatch")

const btnAddStopwatch = document.querySelector("#addStopwatch")
const btnStartAll = document.querySelector("#btnStartAll")
const btnStopAll = document.querySelector("#btnStopAll")
const stopwatchs = [];

const convertTime = (milisecond) => {
    let ms = Math.floor(milisecond % 100);
    let m = Math.floor((milisecond / 100) / 60);
    let s = Math.floor((milisecond / 100) % 60);

    if (ms < 10) ms = "0" + ms
    if (s < 10) s = "0" + s
    if (m < 10) m = "0" + m

    return m + ":" + s + ":" + ms
}
 

btnAddStopwatch.addEventListener("click", () => {
    const stopwatch = new Stopwatch()
    stopwatchs.push(stopwatch);
    stopwatchContainer.appendChild(stopwatch.container)
})

btnStartAll.addEventListener("click", () => {
    stopwatchs.forEach(stopwatch =>{
        stopwatch.handleStart();
    })
})
btnStopAll.addEventListener("click", () => {
    stopwatchs.forEach(stopwatch =>{
        stopwatch.handleStop();
    })
})

class Stopwatch {
    count = 0;
    interval = null;

    container;
    txtTime;
    btnStart;
    btnPause;
    btnStop;

    constructor() {
        this.container = document.createElement("div")

        this.txtTime = document.createElement("span")
        this.txtTime.innerHTML = "00:00:00"

        this.btnStart = document.createElement("button")
        this.btnStart.innerHTML = "Start"
        this.btnStart.addEventListener("click", this.handleStart)

        this.btnPause = document.createElement("button")
        this.btnPause.innerHTML = "Pause"
        this.btnPause.addEventListener("click", this.handlePause)
        
        this.btnStop = document.createElement("button")
        this.btnStop.innerHTML = "Stop"
        this.btnStop.addEventListener("click", this.handleStop)

        this.container.appendChild(this.txtTime)
        this.container.appendChild(this.btnStart)
        this.container.appendChild(this.btnPause)
        this.container.appendChild(this.btnStop)
    }

    handleStart = () => {
        if(!this.isStarted){
        this.interval = setInterval(() => {
            this.count++;
            this.txtTime.innerHTML = convertTime(this.count)
        }, 10);
        this.isStarted = true;
    }else{
        alert("started!")
        return;
    }
    }

    handlePause = () => {
        clearInterval(this.interval)
        this.isStarted = false;
    }
    handleStop = () => {
        clearInterval(this.interval)
        this.count=0;
        this.txtTime.innerHTML = "00:00:00"
        this.isStarted = false; 
    }
    }
