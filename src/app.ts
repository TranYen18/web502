export{};
type Product ={
    id: number,
    name: string,
    price:number
}
type Product2 = {
    id: number,
    name: string,
    status : boolean
}

type Mergetype = Product | Product2;
const a:number =10;
const b:number =20;

const myName: string = "Tran thi yen";
const myAge: number =20;
const myStatus: boolean = true;
const myObj:Product= { id: 1, name:"Yen", price:20 };
const arrNumber: number[]=[1,2,3,4];
const arrString : string[] =["a","b","c",];
const arrObj:Mergetype []= [
    {id:1,name:"san pham a", price:20},
    {id:1,name:"san pham a", status:true}
];

function sum(numA:number, numB:number){
    return numA + numB;

}
console.log(sum(10,20))