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
            if(nums[i]==0){
                continue;
            }
            else{
                this._price+=100*nums[i]*this.discount[nums[i]-1];
            }            
        }
        
        if(nums.length>1){
            for (let i = 1; i < nums.length; i++) {
                if(nums[i-1]>nums[i] && (nums[i-1]-nums[i])%2==0){
                    let new_price=0;
                    nums[i-1]-=1;
                    nums[i]+=1;
                    for (let i = 0; i < nums.length; i++) {
                        new_price+=100*nums[i]*this.discount[nums[i]-1];
                    }
                    this._price=Math.min(this._price,new_price);
                    break;
                }
            }            
        }
    }

    get price() {
        return this._price;
    }
}
