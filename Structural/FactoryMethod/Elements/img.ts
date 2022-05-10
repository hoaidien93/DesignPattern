import { IElement } from "../IElement";
export const IMAGE_ELEMENT = "img";
export class ImgElement implements IElement {
    private name: string = IMAGE_ELEMENT;
    getMe() {
        return this.name;
    }
}