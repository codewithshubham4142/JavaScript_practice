let jsonobj = {
    name:"shubham",
    channel:"code with harry",
    friend:"abc",
    food:"xyz"
}
// console.log(jsonobj);
// convert json to string
let newjson = JSON.stringify(jsonobj);
// console.log(newjson);


 newjson = newjson.replace('shubham','patil');
// console.log(newjson);

// convert string to object
 let newvar =JSON.parse(newjson);
// console.log(newvar);





 const data={
    "results": [
    {
    "gender": "male",
    "name": {
    "title": "Mr",
    "first": "Parv",
    "last": "Saldanha"
    },
    "location": {
    "street": {
    "number": 1835,
    "name": "Sitabuldi Main Rd"
    },
    "city": "Giridih",
    "state": "Odisha",
    "country": "India",
    "postcode": 28784,
    "coordinates": {
    "latitude": "4.9170",
    "longitude": "-140.1440"
    },
    "timezone": {
    "offset": "-10:00",
    "description": "Hawaii"
    }
    },
    "email": "parv.saldanha@example.com",
    "login": {
    "uuid": "bc12e5b3-9d59-40b5-968b-dcf0901f41ad",
    "username": "orangepanda855",
    "password": "heidi",
    "salt": "MZwJdTth",
    "md5": "bb47bfe5c10c9e8761a587abf84b819e",
    "sha1": "09de009b92be7bfdd1db3cc1ac0fd82581a43cd1",
    "sha256": "41a9a7e7626b9236fdc2bdfdf44ffc4a5b5a6c16af70d2421b98a4e6c3dd6047"
    },
    "dob": {
    "date": "1988-09-20T11:00:32.403Z",
    "age": 35
    },
    "registered": {
    "date": "2021-05-29T14:53:34.830Z",
    "age": 2
    },
    "phone": "8009206894",
    "cell": "9971565224",
    "id": {
    "name": "UIDAI",
    "value": "267856427185"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/1.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/1.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/1.jpg"
    },
    "nat": "IN"
    }
    ],
    "info": {
    "seed": "2a2d6847e50ca4b6",
    "results": 1,
    "page": 1,
    "version": "1.4"
    }
    };

    const {results}=data;

    // console.log(data['results'][2]);



console.log(data.results[0].gender); 
console.log(data.results[0].name.first);
// console.log(data.info.seed); 

// Retrieving values using square bracket notation
// console.log(data['results'][0]['gender']); // Output: male
// console.log(data['results'][0]['name']['first']); // Output: Parv
// console.log(data['info']['seed']); 



