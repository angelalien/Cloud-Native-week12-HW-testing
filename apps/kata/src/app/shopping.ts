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
        if(nums.length>1 && nums[0]>nums[1] && (nums[0]-nums[1])%2==0){
            let temp_price=0;
            nums[0]-=1;
            nums[1]+=1;
            for (let i = 0; i < nums.length; i++) {
                temp_price+=100*nums[i]*this.discount[nums[i]-1]
            }
            this._price=Math.min(this._price,temp_price);
        }
    }

    get price() {
        return this._price;
    }
}
