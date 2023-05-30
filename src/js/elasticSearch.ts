import { error } from "console";

var elasticsearch = require('elasticsearch');
//const mapping = require('../../elasticsearch/mapping.json');


const client = new elasticsearch.Client({
  node: process.env.ELASTIC_INDEX,
  host: process.env.ELASTIC_HOST,
  // httpAuth: {
  //   username: 'elastic',
  //   password: '**************'
  // }
})

// 
// TODO: mirgate index, mapping, settings and data

// if (!err) {
//   client.indices.putMapping({
//     index: 'NAME_OF_INDEX',
//     type: "document | _docw",
//     body: {
//       properties: {
//         nickName: { type: "string" },
//         birthDate: { type: "string" },
//         state: { type: "string" },
//         adminState: { type: "string" },
//         account: {
//           type: "nested",
//           properties: {
//             id: { type: "string" },
//             type: { type: "string" },
//             password: { type: "string" }
//           }
//         }
//       }
//     }
//   }, (err, resp, respcode) => {
//     res.json(200, resp);
//   });
// }


//Indexing the above object
function createIndex() {
  client.indices.create({
    index: process.env.ELASTIC_INDEX
  }).then((response: any) => {
    console.log('The new Index is created ',response.status);

  });
}

export const searchAll = async () => {
  let resultList: never[] = [];

  const result = await client.search({
    index: process.env.ELASTIC_INDEX,
    size: 10,
    from: 0,
    body: {
      query: {
        query_string: {
          query: '*'
        }
      }
    }
    // results array [{0},{1}]
  }).then((result: { hits: { hits: [] }; }) => {
    console.log('what did i find', result?.hits?.hits)
    resultList = result?.hits?.hits
  })

  return resultList;
}

//Searching and printing the results
export const search = async(searchInput: any) => {

  let resultList: never[] = [];

  const result = await client.search({
    index: process.env.ELASTIC_INDEX,
    type: '_doc',
    size: 10,
    from: 0,
    body: {
      query: {
        query_string: {
          query: searchInput
        }
      }
    }
    // results array [{0},{1}]
  }).then((result: { hits: { hits: [] }; }) => {
    console.log('what did i find', result?.hits?.hits)
    resultList = result?.hits?.hits
  })

  return resultList;
}

// Searching and printing the results
export const searchById = async(id: number): Promise<Object> => {

  let body: any[] = [];

  return client.get({
      index: process.env.ELASTIC_INDEX,
      id: id
  })
  .then((response: any) => {
    body = {...response._source};
    return body;
  })
  .catch((error: any) => {
    console.log(999, error);
});
}
// createIndex();
