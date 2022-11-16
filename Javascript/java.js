const users = [];
users[0] = {
    name: "Monica",
    gender: "Female",
    age: "17",
    email: "moni@dingdong.com",
    favoritColor: "Yelow, Pink, White, Purple",
    isHavePet: "Yes",
    education: [
        {
            name: "SD 01",
            city: "Jakarta,",
            graduate: "2016",
        },
        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: "2019",
        },
        {
            name: "SMA 03",
            city: "Tangerang",
        },
    ],
    favoritRestaurant: ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi",]
}
users[1] = {
    name: "Wendy",
    gender: "Male",
    age: "23",
    email: "wendy@dingdong.com",
    favoritColor: "Blue, Black, Grey",
    isHavePet: "No",
    education: [
        {
            name: "SD 01",
            city: "Jakarta,",
            graduate: "2010",
        },
        {
            name: "SMP 03",
            city: "Bogor",
            graduate: "2013",
        },
        {
            name: "SMA 01",
            city: "Surbaya",
            graduate: "2016"
        },
        {
            name: "Universitas Maju",
            city: "Tangerang",

        },
    ],
    favoritRestaurant: ["Tempura", "Bento", "Sushi", "Pancake", "Katsu", "Geprek", "Pancake", "Eggy",]
};
console.log("Nama : " + users[1].name);
console.log("SMA : " + users[1].education[2].name);
console.log("Kota : " + users[1].education[2].city);
console.log("Makanan Favorit : " + users[1].favoritRestaurant[4])