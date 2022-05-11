export const BODY = "body";
export class Body{
    private _name: string = BODY;

    get name(): string{
        return this._name;
    }
}