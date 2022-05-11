export const HEADER = "header";

export class Header{
    private _name: string = HEADER;

    get name(): string{
        return this._name;
    }
}