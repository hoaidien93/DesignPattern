import { Header } from "./Parts/Header";
import { Body } from "./Parts/Body";
import { Footer } from "./Parts/Footer";

export class Page {
    private _header: Header;
    private _body: Body;
    private _footer: Footer;

    constructor({
        header, body, footer
    }: { header: Header, body: Body, footer: Footer }) {
        this._header = header;
        this._body = body;
        this._footer = footer;
    }

    get header(): Header {
        return this._header;
    }

    get body(): Body {
        return this._body;
    }

    get footer(): Footer {
        return this._footer;
    }
}