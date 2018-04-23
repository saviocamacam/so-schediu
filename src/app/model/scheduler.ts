import { ProccessNameSpace } from './proccess';

export namespace SchedulerNameSpace {
    export class Scheduler {

        private proccesses: Array<ProccessNameSpace.Proccess>;
        private timeSlice = 5;
        private ioSlice = 3;

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
                proccess.events.find((element) => {
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
            const tf = 0;
            const tme = 0;

            // console.log(this.proccesses);
            const sortedProccess: ProccessNameSpace.Proccess[] = this.proccesses.sort((n1, n2) => {
                if (n1.duration > n2.duration) {
                    return 1;
                }
                if (n1.duration < n2.duration) {
                    return -1;
                }
                return 0;
            });
            console.log(sortedProccess);
            return { tf: tf, tme: tme };
        }

        rr() {
            // console.log('RR');
            // console.log(this.proccesses);
        }

        prio() {
            // console.log('PRIO');
            const tf = 0;
            const tme = 0;

            const sortedProccess: ProccessNameSpace.Proccess[] = this.proccesses.sort((n1, n2) => {
                if (n1.priority > n2.priority) {
                    return 1;
                }
                if (n1.priority < n2.priority) {
                    return -1;
                }
                return 0;
            });

            console.log(sortedProccess);
            return { tf: tf, tme: tme };
        }
    }
}
