import { ProccessNameSpace } from './proccess';

export namespace SchedulerNameSpace {
    export class Scheduler {

        proccesses: Array<ProccessNameSpace.Proccess>

        constructor(proccesses) {
            this.proccesses = proccesses;
        }

        fifo() {
            console.log("FIFO");
            console.log(this.proccesses);
        }
        
        sjf() {
            console.log("SJF");
            console.log(this.proccesses);
        }
        
        rr() {
            console.log("RR");
            console.log(this.proccesses);
        }
        
        prio() {
            console.log("PRIO");
            console.log(this.proccesses);
        }
    }
}