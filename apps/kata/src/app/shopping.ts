export class Shopping {
    private _price=0;
    private discount=[1,0.95,0.9,0.8,0.75];
    buy(books: number[]) {
        let __price = 0;
        let num=0
        let no_discount_num=0
        books.forEach(function (book) {
            
            if(book>0){
                num=num+1; 
                no_discount_num += book-1;
            }                       
        });               
        this._price=100*num*this.discount[num-1]+100*no_discount_num;
    }

    get price() {
        return this._price;
    }
}
