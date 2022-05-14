export class Shopping {
    private _price=0;
    private discount=[1,0.95,0.9,0.8,0.75];
    buy(books: number[]) {
        let __price = 0;
        let num=0
        books.forEach(function (book) {
            __price += book*100;
            if(book>0){
                num=num+1; 
            }                       
        });               
        this._price=__price*this.discount[num-1];
    }

    get price() {
        return this._price;
    }
}
