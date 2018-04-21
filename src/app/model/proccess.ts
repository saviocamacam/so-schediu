class Proccess {
    pid: number;
    priority: number;
    state: {running, ready, blocked};
    timeComing: Date;
    timeBeginRun: Date;
    timeCPU: Date;


    constructor(priority) {
        this.timeComing = new Date();
        this.state = this.state.ready;
        this.priority = priority;
    }

}


