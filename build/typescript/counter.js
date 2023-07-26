//Counter class containing methods that can be called.
export class Counter {
    constructor() {
        this.count = 0;
    }
    GetCount() {
        return this.count;
    }
    IncrementCounterByOne() {
        this.count++;
    }
    ResetCounter() {
        this.count = 0;
    }
}
