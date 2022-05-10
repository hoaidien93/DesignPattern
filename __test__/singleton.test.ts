import { Singleton } from "../Structural/Singleton"
import { describe, expect, test } from '@jest/globals'

describe('Singleton', () => {
    const instance_1 = Singleton.getInstance();
    const instance_2 = Singleton.getInstance();

    instance_1.increaseCount();
    instance_2.increaseCount();
    test('Equal to get variable', () => {
        expect(instance_1.getCount()).toBe(2);
        expect(instance_2.getCount()).toBe(2);
    });

    test('Deep equal', () => {
        expect(instance_2).toBe(instance_2);
    });
});