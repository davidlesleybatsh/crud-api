var elasticsearch = require('elasticsearch');
const mapping = require('../../elasticsearch/mapping.json');


const client = new elasticsearch.Client({
  node: 'http://localhost:9200',
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
function createIndex(){
  client.indices.create({ 
    index: "NAME_OF_INDEX"
  }).then((response) => {
    console.log('What is the index', createIndexResult);

  });
  console.log('After all did it Happen?', )
}

//Searching and printing the results
async function search() {

  const result = await client.search({
    index: 'NAME_OF_INDEX',
    type: '_doc',
    // body?: {
    //   query: {
    //     query_string: {
    //       query: "STRING TO SEARCH WITH"
    //     }
    //   }
    // }
    // results array [{0},{1}]
  }).then((result) => console.log('what did i find', result?.hits?.hits))
  return result?.hits?.hits;
}
// search();
// createIndex();
