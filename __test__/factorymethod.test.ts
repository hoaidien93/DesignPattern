import { describe, expect, test } from '@jest/globals'
import { ElementFactory } from '../Structural/FactoryMethod';
import { DIV_ELEMENT } from '../Structural/FactoryMethod/Elements/div';
import { IMAGE_ELEMENT } from '../Structural/FactoryMethod/Elements/img';
import { SPAN_ELEMENT } from '../Structural/FactoryMethod/Elements/span';

describe('Factory Method', () => {

    const div = ElementFactory.createInstance(DIV_ELEMENT)
    const span = ElementFactory.createInstance(SPAN_ELEMENT);
    const img = ElementFactory.createInstance(IMAGE_ELEMENT);
    test('Equal to get type', () => {
        expect(div.getMe()).toBe(DIV_ELEMENT);
        expect(span.getMe()).toBe(SPAN_ELEMENT);
        expect(img.getMe()).toBe(IMAGE_ELEMENT);
    });

    test('Get instance with wrong type', () => {
        expect(() => ElementFactory.createInstance("wrong_type")).toThrow(TypeError);
    });
});