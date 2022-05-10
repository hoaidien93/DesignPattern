import { DivElement, DIV_ELEMENT } from "./Elements/div";
import { IMAGE_ELEMENT, ImgElement } from "./Elements/img";
import { SpanElement, SPAN_ELEMENT } from "./Elements/span";
import { IElement } from "./IElement";

export class ElementFactory{
    public static createInstance(type: string): IElement{
        switch(type){
            case DIV_ELEMENT:
                return new DivElement();
            case SPAN_ELEMENT:
                return new SpanElement();
            case IMAGE_ELEMENT:
                return new ImgElement();
            default:
                throw TypeError("Element not found");
        }
    }
}

let temp = ElementFactory.createInstance(DIV_ELEMENT);
console.log(temp.getMe());