## Patika React Exercise-1

-  Bu çalışmada **"async"** bir fonksiyon tanımlayıp default olarak dışarıya aktarıyoruz.
-  Fonksiyon **Number** tipinde bir id parametresi alıyor.
-  Bu fonksiyon  [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1) - [https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=1) bu iki adrese istek atıp veriler getiriyor.
- Bu verileri **axios** kütüphanesi ile çağırıyoruz.
- Çağırdığımız verileri obje olarak birleştirip geri döndürüyoruz.
- İşlemleri tamamladığımızda kod çıktısı aşağıdaki gibi oluyor.

<hr/>

- In this work, we define an 'async' function and export it as the default.
- The function takes an 'id' parameter of the 'Number' type.
- This function sends requests to these two addresses: https://jsonplaceholder.typicode.com/users/1 - https://jsonplaceholder.typicode.com/posts?userId=1 and fetches the data.
- We use the 'axios' library to retrieve the data we fetched.
- We merge the retrieved data into an object and return it.
- Once the operations are completed, the output of the code is as follows.


```
{
  user: {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: [Object]
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  posts: [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\n' +
        'suscipit recusandae consequuntur expedita et cum\n' +
        'reprehenderit molestiae ut ut quas totam\n' +
        'nostrum rerum est autem sunt rem eveniet architecto'
    }
  ]
}
```