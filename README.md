## Ajax

### XMLHttpRequest とは

XMLHttpRequest はブラウザ上でサーバーと HTTP 通信を行うための API

### XMLHttpRequest の使い方

```
// オブジェクトの作成
const xhr = new XMLHttpRequest();

// 進捗の監視
xhr.onreadystatechange = function () {
    switch (xhr.readyState) {
        case 0:
            // 未初期化状態.
            console.log( 'uninitialized!' );
            break;

        case 1:
            // データ送信中.
            console.log( 'loading...' );
            break;

        case 2:
            // 応答待ち.
            console.log( 'loaded.' );
            break;

        case 3:
            // データ受信中.
            console.log( 'interactive... '+xhr.responseText.length+' bytes.' );
            break;

        case 4:
            // データ受信完了.
            if( xhr.status == 200 || xhr.status == 304 ) {
                var data = xhr.responseText; // responseXML もあり
                console.log( 'COMPLETE! :'+data );
            } else {
                console.log( 'Failed. HttpStatus: '+xhr.statusText );
            }
            break;
    }
}

// リクエストの作成
xhr.open("GET", "https://uinames.com/api/?amount=25");

// リクエストの送信
xhr.send();
```

### fetch API とは

XMLHttpRequest と同じで HTTP リクエストを発行する API。MLHttpRequest よりシンプルでモダンに記述が可能。実行可能なブラウザには制限があり。

### fetch API の使い方

```
// リクエストの送信
fetch("https://uinames.com/api/?amount=25")
.then((response) => {

    // リクエストが帰ってきた時の処理
    console.log(response)
}).catch((err) => {

    // リクエストがエラーになった時の処理
    console.log(err)
});


// GETメソッド以外の書き方
fetch(url, {
  method: "POST",
  body: data
})then((response) => {

    // リクエストが帰ってきた時の処理
    console.log(response)
}).catch((err) => {

    // リクエストがエラーになった時の処理
    console.log(err)
});

```

### axios.js とは

HTTP 通信を簡単に行うことができる Javascript ライブラリ。ブラウザだけでなく Node.js 上でも利用可能。

### axios.js の使い方

```
// requireを使う場合
const axios = require('axios');

// ES6形式の場合
import axios from 'axios';

axios.get("https://uinames.com/api/?amount=25")
.then((response) => {

    // リクエストが帰ってきた時の処理
    console.log(response)
}).catch((err) => {

    // リクエストがエラーになった時の処理
    console.log(err)
});


// GETメソッド以外の書き方
axios.post(url, data)
.then((response) => {

    // リクエストが帰ってきた時の処理
    console.log(response)
}).catch((err) => {

    // リクエストがエラーになった時の処理
    console.log(err)
});

```

### 使用 API

https://uinames.com/
