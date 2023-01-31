var elasticsearch = require('elasticsearch');
//const mapping = require('../../elasticsearch/mapping.json');


const client = new elasticsearch.Client({
  node: process.env.ELASTIC_INDEX,
  //host: 'http://localhost:9200',
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
    console.log('What is the index',response);

  });
  console.log('After all did it Happen?',)
}

//Searching and printing the results
export const search = async(searchString: any) => {

  let resultList: never[] = [];

  const result = await client.search({
    index: process.env.ELASTIC_INDEX,
    type: '_doc',
    size: 10,
    from: 0,
    body: {
      query: {
        query_string: {
          query: searchString
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

// createIndex();
module.exports = { search }