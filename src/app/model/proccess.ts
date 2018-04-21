export namespace ProccessNameSpace {

    enum state {
        running = 1,
        ready,
        blocked
    }

    export class Proccess {
        private _pid: number;
        private _duration: number;
        private _priority: number;
        private _state: state;
        private _timeComing: number;
        private _events: Array<any>;
        private _timeBeginRun: Date;
        private _timeCPU: Date;

        constructor() {
            this._events = null;
            this._state = state.ready;
        }

        get pid() {
            return this._pid;
        }
        set pid(pid: number) {
            this._pid = pid;
        }

        get duration() {
            return this._duration;
        }
        set duration(duration: number) {
            this._duration = duration;
        }

        get priority() {
            return this._priority;
        }

        set priority(priority: number) {
            this._priority = priority;
        }

        get timeComing() {
            return this.timeComing;
        }

        set timeComing(timeComing: number) {
            this._timeComing = timeComing;
        }

        get events() {
            return this._events;
        }

        set events(events: Array<any>) {
            this._events = <Array<number>>events;
        }

        get state() {
            return this._state;
        }

        set state(option) {
            this._state = option;
        }

        get timeBeginRun() {
            return this.timeBeginRun;
        }

        set timeBeginRun(timeBeginRun) {
            this._timeBeginRun = timeBeginRun;
        }

        get timeCPU() {
            return this._timeCPU;
        }

        set timeCPU(timeCPU) {
            this._timeCPU = timeCPU;
        }

    }
}
