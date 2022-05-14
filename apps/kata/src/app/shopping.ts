export class Shopping {
    private _price = 0;
    buy(book: number) {
        this._price += book*100;
    }

    get price() {
        return this._price;
    }
}
