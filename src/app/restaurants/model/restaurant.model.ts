export class Restaurant {
    _id: number;
    name: string;
    cuisine: string;
    description: string;
    location: string;
    price: number;
    days: object;
    rating: number;

	constructor(obj? : any) {
        this._id = obj && obj._id || 0;   /* stavio sam 0 samo zato sto za prvi restoran kao id vraca null*/
        this.name = obj && obj.name || null;
        this.cuisine = obj && obj.cuisine || null;
        this.description = obj && obj.description || null;
        this.location = obj && obj.location || null;
        this.price = obj && obj.price || null;
        this.days = obj && obj.days || null;
        this.rating = obj && obj.rating || null;
	}


}








