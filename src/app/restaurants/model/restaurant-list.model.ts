import { Restaurant } from './restaurant.model';


export class RestaurantList {
    results: Restaurant[];
    count: number;

	constructor(obj?: any) {
        this.results = obj && obj.results.map(restaurant => new Restaurant(restaurant)) || null;
        this.count = obj && obj.count || 0;
	}
}