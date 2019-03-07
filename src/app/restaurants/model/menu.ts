export class Menu {

    _id: number;
    restaurants: number;
    items: object[];
	constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.restaurants = obj && obj.restaurants || null;
        this.items = obj && obj.items || null;
	}

}