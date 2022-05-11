import { Body } from "./Parts/Body";
import { Footer } from "./Parts/Footer";
import { Header } from "./Parts/Header";
import { Page } from "./page";

export class PageBuilder {
    private _pageHeader: Header | null;
    private _pageBody: Body | null;
    private _pageFooter: Footer | null;

    public setHeader(header: Header) {
        this._pageHeader = header;
        return this;
    }

    public setBody(body: Body) {
        this._pageBody = body;
        return this;
    }

    public setFooter(footer: Footer) {
        this._pageFooter = footer;
        return this;
    }

    public build(): Page {
        return new Page({
            header: this._pageHeader,
            body: this._pageBody,
            footer: this._pageFooter
        })
    }
}
