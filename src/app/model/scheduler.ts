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
      // const tp = 0;
      const tme = 0;
      let sumDuration = 0;

      let i = 0,
        j = 0;
      const timeCommingArray = new Array<number>();
      const scheduledArray = new Array<ProccessNameSpace.Proccess>();

      const myClonedArray = Object.assign([], this.proccesses);

      myClonedArray.forEach(proccess => {
        timeCommingArray.push(proccess.timeComing);
        sumDuration += proccess.duration;
      });
      // console.log('total duration sum: ' + sumDuration);
      while (i < sumDuration) {
        console.log('PC ' + i);
        myClonedArray.forEach(proccess => {
          // tslint:disable-next-line:triple-equals
          if (i == myClonedArray[myClonedArray.indexOf(proccess)].timeComing) {
            console.log(
              'Processo ' +
              myClonedArray[myClonedArray.indexOf(proccess)].pid +
              ' Entrou em ' +
              i
            );
            const p = new ProccessNameSpace.Proccess();
            let d1 = 0,
              d2 = 0;
            if (proccess.scheduleArray) {
              console.log(proccess.scheduleArray);
            }
            if (proccess.events) {
              for (
                j = 0;
                j < proccess.scheduleArray.length;
                j++
              ) {
                // tslint:disable-next-line:triple-equals
                if (proccess.scheduleArray[j] == 0) {
                  d1++;
                  // tslint:disable-next-line:triple-equals
                  if (proccess.scheduleArray[j + 1] == 1 || j == proccess.scheduleArray.length - 1) {
                    const newProccess = new ProccessNameSpace.Proccess();
                    newProccess.pid = proccess.pid;
                    newProccess.timeBeginRun = i - d1;
                    newProccess.timeEndRun = i + d1;
                    newProccess.duration = d1;
                    newProccess.color = proccess.color;
                    newProccess.timeComing = proccess.timeComing;
                    scheduledArray.push(newProccess);
                    d1 = 0;
                  }
                }
                // tslint:disable-next-line:triple-equals
                if (proccess.scheduleArray[j] == 1) {
                  d2++;
                  // tslint:disable-next-line:triple-equals
                  if (proccess.scheduleArray[j + 1] == 0 || j == proccess.scheduleArray.length - 1) {
                    const newProccess = new ProccessNameSpace.Proccess();
                    newProccess.pid = 100;
                    newProccess.timeBeginRun = i - d2;
                    newProccess.timeEndRun = i + d2;
                    newProccess.duration = d2;
                    scheduledArray.push(newProccess);
                    d2 = 0;
                  }
                }
              }
            } else {
              scheduledArray.push(proccess);
            }
          }
        });
        i++;
      }
      return { tf: tf, tme: tme, schedule: scheduledArray };
    }

    sjf() {
      console.log('SJF');
      let tf = 0;
      const tme = 0;

      // console.log(this.proccesses);
      const myClonedArray = Object.assign([], this.proccesses);
      const sortedProccess: ProccessNameSpace.Proccess[] = myClonedArray.sort(
        (n1, n2) => {
          if (n1.duration > n2.duration) {
            return 1;
          }
          if (n1.duration < n2.duration) {
            return -1;
          }
          // tslint:disable-next-line:triple-equals
          if (n1.duration == n2.duration) {
            if (n1.timeComing > n2.timeComing) {
              return 1;
            }
            if (n1.timeComing < n2.timeComing) {
              return -1;
            }
          }
          return 0;
        }
      );
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

      const sortedProccess: ProccessNameSpace.Proccess[] = myClonedArray.sort(
        (n1, n2) => {
          if (n1.priority > n2.priority) {
            return 1;
          }
          if (n1.priority < n2.priority) {
            return -1;
          }
          // tslint:disable-next-line:triple-equals
          if (n1.priority == n2.priority) {
            if (n1.timeComing > n2.timeComing) {
              return 1;
            }
            if (n1.timeComing < n2.timeComing) {
              return -1;
            }
          }
          return 0;
        }
      );

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
        sortedProccess.forEach(proccess => { });
      }
      // console.log(sortedProccess);
      return { tf: tf, tme: tme, schedule: sortedProccess };
    }
  }
}
