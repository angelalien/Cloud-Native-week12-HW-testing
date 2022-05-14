export class Shopping {
    private _price=0;
    private discount=[1,0.95,0.9,0.8,0.75];
    buy(books: number[]) {
        let nums=[0];        
        books.forEach(function (book) {
            for (let i = 0; i < book; i++) {
                if(nums[i]==null){
                    nums.push(1);
                }
                else{
                    nums[i]+=1;
                }
            }                      
        });  
        for (let i = 0; i < nums.length; i++) {
            this._price+=100*nums[i]*this.discount[nums[i]-1]
        } 
    }

    get price() {
        return this._price;
    }
}
