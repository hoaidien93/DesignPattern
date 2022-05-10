export class Singleton {
    private counter: number;
    private static instance: Singleton;
    private constructor() {
        this.counter = 0;
    }

    public static getInstance() {
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public increaseCount(): void {
        this.counter++;
    }

    public getCount(): number {
        return this.counter;
    }
}