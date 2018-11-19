export class Product {
  id: string; //TODO: make id
  name: string; //TODO: generate name from product ids on create?
  compatibleTo: string[]; //TODO: make Id[]
  addCompatibility: (id: string) => void;
  likes: number;
  dislikes: number;
  countAverage: () => number;

  constructor(id: string, name: string) {
    this.id = id; //TODO:get from productList products.length
    this.name = name;
    this.compatibleTo = [];
    this.addCompatibility = (id) => {
      this.compatibleTo.push(id) //TODO: check if exists
    }
    this.likes = 0;
    this.dislikes = 0;
    this.countAverage = () => {
      return Math.max(this.likes, this.dislikes) //TODO: return flag with max number for likes(max), dislikes(max) or mixed(average/2)
    }
  }
}
