import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";
import { search } from "../js/elasticSearch";

// // in Memory Storage Fake/Mock
// let items: Items = {
//     1: {
//         id: 1,
//         name: "first item",
//         adress: {
//             street: "Berlin Street",
//             number: "1",
//             postCode: 10115,
//             location: {
//                 lon: 52.520008,
//                 lat: 13.404954,
//             },
//         },
//         city: "Berlin",
//         description: "this is where im from",
//         image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//         contact: {
//             phone: "030 123456789",
//             email: "abc@123.com",
//             website: "berlin@berlin.de",
//             fax: ""
//         }
//     },
//     2: {
//         id: 2,
//         name: "Second item",
//         adress: {
//             street: "Warschauer Street",
//             number: "2",
//             postCode: 10115,
//             location: {
//                 lon: 52.520008,
//                 lat: 13.404954,
//             },
//         },
//         city: "Berlin",
//         description: "And i will never leave",
//         image: "https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//         contact: {
//             phone: "030 987654321",
//             email: "def@123.com",
//             website: "berlin2@berlin2.de",
//             fax: ""
//         }
//     },
//     3: {
//         id: 3,
//         name: "third item",
//         adress: {
//             street: "Tor Street",
//             number: "3",
//             postCode: 10115,
//             location: {
//                 lon: 52.520008,
//                 lat: 13.404954,
//             },
//         },
//         city: "Berlin",
//         description: "Boom Boom Chakalaka",
//         image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//         contact: {
//             phone: "030 987654321",
//             email: "xyz@123.com",
//             website: "berlin3@berlin3.de",
//             fax: ""
//         }
//     }
// }

export const findAll = async (): Promise<Item[]> => {
    let searchString = "löwe*"

    const itemList = await search(searchString);
    
    return itemList;
}

// export const find = async (id: number): Promise<Item> => items[id];

// export const create = async (newItem: BaseItem): Promise<Item> => {
//     const id = 4;

//     items[id] = {
//         id,
//         ...newItem,
//     };

//     return items[id];
// };

// export const update = async (id: number, itemUpdate: BaseItem): Promise<Item | null> => {
//     const item = await find(id);

//     if (!item) {
//         return null;
//     }

//     items[id] = { id, ...itemUpdate };

//     return items[id];
// };

// export const remove = async (id: number): Promise<null | void> => {
//     const item = await find(id);
  
//     if (!item) {
//       return null;
//     }
  
//     delete items[id];
//   };