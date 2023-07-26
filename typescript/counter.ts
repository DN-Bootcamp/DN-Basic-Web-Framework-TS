//Counter class containing methods that can be called.
export class Counter{
    private count = 0;

    public GetCount(){
        return this.count;
    }

    public IncrementCounterByOne(){
        this.count ++;
    }

    public ResetCounter(){
        this.count = 0;
    }
}