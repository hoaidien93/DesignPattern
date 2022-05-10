import { IElement } from "../IElement";
export const SPAN_ELEMENT = "span";
export class SpanElement implements IElement {
    private name: string = SPAN_ELEMENT;
    getMe() {
        return this.name;
    }
}