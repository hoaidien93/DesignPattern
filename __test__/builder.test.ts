import { describe, expect, test, beforeEach } from '@jest/globals'
import { PageBuilder } from '../Structural/Builder';
import { Page } from '../Structural/Builder/page';
import { BODY, Body } from '../Structural/Builder/Parts/Body';
import { FOOTER, Footer } from '../Structural/Builder/Parts/Footer';
import { HEADER, Header } from '../Structural/Builder/Parts/Header';

let page: Page;
beforeEach(() => {
    page = new PageBuilder()
        .setHeader(new Header())
        .setBody(new Body())
        .setFooter(new Footer())
        .build();
})
describe('Builder', () => {
    test('Expect builder result type is page', () => {
        expect(page instanceof Page).toBe(true);
    });
    test('Expect builder result can get header', () => {
        expect(page.header.name).toBe(HEADER);
    });
    test('Expect builder result can get body', () => {
        expect(page.body.name).toBe(BODY);
    });
    test('Expect builder result can get footer', () => {
        expect(page.footer.name).toBe(FOOTER);
    });
});