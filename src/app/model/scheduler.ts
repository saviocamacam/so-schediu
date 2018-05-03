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
            const tf = 0;
            const tp = 0;
            const sliceIO = 2;
            let sumDuration = 0
            let sumIO = 0;
            let i = 0;

            const myClonedArray = Object.assign([], this.proccesses);

            myClonedArray.forEach(proccess => {
                sumDuration += proccess.duration;
                if(proccess.events) {
                    proccess.events.forEach(eventIO => {
                        sumIO += Number(eventIO);
                    });
                }
            });

            while(i < (sumDuration+sumIO)) {
                myClonedArray.forEach(proccess => {
                    
                });
            }
            
           
        }

        sjf() {
            console.log('SJF');
            let tf = 0;
            const tme = 0;

            // console.log(this.proccesses);
            const myClonedArray = Object.assign([], this.proccesses);
            const sortedProccess: ProccessNameSpace.Proccess[] = myClonedArray.sort((n1, n2) => {
                if (n1.duration > n2.duration) {
                    return 1;
                }
                if (n1.duration < n2.duration) {
                    return -1;
                }
                if (n1.duration === n2.duration) {
                    if (n1.timeComing > n2.timeComing) {
                        return 1;
                    }
                    if (n1.timeComing < n2.timeComing) {
                        return -1;
                    }
                }
                return 0;
            });
            // console.log(sortedProccess);
            sortedProccess.forEach(proccess => {
                tf = tf + proccess.duration;
                if (proccess.events) {
                    const io = proccess.events.length * this.ioSlice;
                    tf = tf + io;
                }
            });

            return { tf: tf, tme: tme, schedule: sortedProccess };
        }

        rr() {
            // console.log('RR');
            // console.log(this.proccesses);
        }

        prio() {
            console.log('PRIO');
            let tf = 0;
            const tme = 0;

            const myClonedArray = Object.assign([], this.proccesses);

            const sortedProccess: ProccessNameSpace.Proccess[] = myClonedArray.sort((n1, n2) => {
                if (n1.priority > n2.priority) {
                    return 1;
                }
                if (n1.priority < n2.priority) {
                    return -1;
                }
                if (n1.priority === n2.priority) {
                    if (n1.timeComing > n2.timeComing) {
                        return 1;
                    }
                    if (n1.timeComing < n2.timeComing) {
                        return -1;
                    }
                }
                return 0;
            });

            // do the thing
            sortedProccess.forEach(proccess => {
                tf = tf + proccess.duration;
                if (proccess.events) {
                    const io = proccess.events.length * this.ioSlice;
                    tf = tf + io;
                }
            });

            console.log(tf);
            let pc = 0;
            for (pc = 0; pc < tf; pc++) {
                sortedProccess.forEach(proccess => {

                });
            }
            // console.log(sortedProccess);
            return { tf: tf, tme: tme, schedule: sortedProccess };
        }
    }
}
