import { ProccessNameSpace } from './proccess';

export namespace SchedulerNameSpace {
    export class Scheduler {

        proccesses: Array<ProccessNameSpace.Proccess>;

        constructor(proccesses) {
            this.proccesses = proccesses;
        }

        fifo() {
            console.log('FIFO');
            console.log(this.proccesses);
            let time = 0;
            let j = 0;
            this.proccesses.forEach(proccess => {
                proccess.timeBeginRun = time;
                console.log('executa');
                proccess.events.find( (element) => {
                    if (Number(element) === proccess.duration) {
                        console.log('ger i/o');
                        for (let i = 0; i < 2; i++) {
                            console.log(i); // ger i/o duration (example)
                        }
                        j++;
                        console.log('ger i/o : ', (typeof Number(element)), element);
                        return element;
                    }
                });
                time++;
                proccess.duration += + (time + j);
            });
        }

        sjf() {
            console.log('SJF');
            console.log(this.proccesses);
        }

        rr() {
            console.log('RR');
            console.log(this.proccesses);
        }

        prio() {
            console.log('sPRIO');
            console.log(this.proccesses);
        }
    }
}
