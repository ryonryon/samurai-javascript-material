const fs = require('fs');

// function getDocumentData(filePath) {
//   fs.readFile(filePath, 'utf-8', function(err, data) {
//     if (err) console.error(`エラーが発生しました: ${err}`);
//     console.log(`データを取得しました。: ${data}`);
//   });
// }

// getDocumentData('./src/document.txt');

// function documentConnector() {
//   fs.readFile('./src/d1.txt', function(err, d1) {
//     fs.readFile('./src/d2.txt', function(err, d2) {
//       fs.readFile('./src/d3.txt', function(err, d3) {
//         fs.readFile('./src/d4.txt', function(err, d4) {
//           console.log(`${d1} ${d2} ${d3} ${d4}`);
//         });
//       });
//     });
//   });
// }

// documentConnector();

// function getFileData() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./src/d1.txt', 'utf-8', function(err, data) {
//       if (err) reject(err);
//       resolve(data);
//     });
//   });
// }

// getFileData().then(response => {
//   console.log(response);
// });

// function getFileDataPromise(filePath) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, 'utf-8', function(err, data) {
//       if (err) reject(err);

//       resolve(data);
//     });
//   });
// }

// function documentConnectorPromise() {
//   let d1, d2, d3, d4;

//   getFileDataPromise('./src/d1.txt')
//     .then(data1 => {
//       d1 = data1;
//       return getFileDataPromise('./src/d2.txt');
//     })
//     .then(data2 => {
//       d2 = data2;
//       return getFileDataPromise('./src/d3.txt');
//     })
//     .then(data3 => {
//       d3 = data3;
//       return getFileDataPromise('./src/d4.txt');
//     })
//     .then(data4 => {
//       d4 = data4;
//       console.log(`${d1} ${d2} ${d3} ${d4}`);
//     })
//     .catch(err => {
//       console.err(err);
//     });
// }

// documentConnectorPromise();

function getFileDataPromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', function(err, data) {
      if (err) reject(err);

      resolve(data);
    });
  });
}

async function documentConnectorAsnc() {
  try {
    const d1 = await getFileDataPromise('./src/d1.txt');
    const d2 = await getFileDataPromise('./src/d2.txt');
    const d3 = await getFileDataPromise('./src/d3.txt');
    const d4 = await getFileDataPromise('./src/d4.txt');
    console.log(`${d1} ${d2} ${d3} ${d4}`);
  } catch (err) {
    console.error(err);
  } finally {
    console.log('finished');
  }
}

documentConnectorAsnc();
