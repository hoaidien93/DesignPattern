import { IElement } from "../IElement";
export const DIV_ELEMENT = "div";

export class DivElement implements IElement {
    private name: string = DIV_ELEMENT;
    getMe() {
        return this.name;
    }
}