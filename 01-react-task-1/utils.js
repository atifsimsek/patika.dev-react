import axios from "axios";

const getData = async (user_id) => {
  try {
    // İstekler yapılır dönen istekler ödevde belirtildiği gibi obje içerisinde dönülür.

    const { data: user } = await axios(
      `https://jsonplaceholder.typicode.com/users/${user_id}`
    );
    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    );

    return { user, posts };
  } catch (error) {
    // Eğer bir hata yakalanırsa bu blok çalışır geriye hata mesajı döndürülür veya hata ekrana basılabilir.

    return "Hata oluştu";
  }
};

export default getData;
