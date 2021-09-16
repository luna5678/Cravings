const { Restaurant } = require('../models');

Restaurant.deleteMany({}, function(error, deletedRestaurants) {
  if (error) return console.log(error);

  Restaurant.insertMany(
    [
      {
        name: "Howlin' Ray's",
        image: "https://s3-media1.fl.yelpcdn.com/bphoto/YiQBbn9bTpDLMCufWigAug/o.jpg",
        categories: ["southern", "chicken", "sandwich"],
        location: {
          address: "727 N Broadway Ste 128",
          city: "Los Angeles",
          zipcode: 90012,
          country: "US",
          state: "CA"
        },
        phone: "2139358399",
        hours: ["Closed", 
          "Closed", 
          "10:00 AM - 7:00 PM", 
          "10:00 AM - 7:00 PM", 
          "10:00 AM - 7:00 PM", 
          "10:00 AM - 7:00 PM", 
          "10:00 AM - 7:00 PM"]
      },
      {
        name: "Wurstküche",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/0RlQlG4YjouG91jcm_aKkQ/o.jpg",
        categories: ["hotdog", "German", "gastropub"],
        location: {
          address: "800 E 3rd St",
          city: "Los Angeles",
          zipcode: 90013,
          country: "US",
          state: "CA",
        },
        phone: "2136874444",
        hours: ["11:30 AM - 10:00 PM", 
          "11:30 AM - 10:00 PM", 
          "11:30 AM - 10:00 PM", 
          "11:30 AM - 10:00 PM", 
          "11:30 AM - 10:00 PM", 
          "11:30 AM - 12:00 AM (Next day)", 
          "11:30 AM - 12:00 AM (Next day)"]
      },
      {
        name: "Slurpin' Ramen Bar - Los Angeles",
        image: "https://s3-media2.fl.yelpcdn.com/bphoto/axO_FH4VwDYcPQOuabFi6g/o.jpg",
        categories: ["ramen", "noodles", "Japanese"],
        location: {
          address: "3500 W 8th St",
          city: "Los Angeles",
          zipcode: 90005,
          country: "US",
          state: "CA",
        },
        phone: "2133888607",
        hours: ["11:30 AM - 1:00 AM (Next day)", 
          "11:30 AM - 1:00 AM (Next day)", 
          "11:30 AM - 1:00 AM (Next day)", 
          "11:30 AM - 1:00 AM (Next day)", 
          "11:30 AM - 1:00 AM (Next day)", 
          "11:30 AM - 1:00 AM (Next day)", 
          "11:30 AM - 1:00 AM (Next day)"]
      },
      {
        name: "Morrison Atwater Village",
        image: "https://s3-media2.fl.yelpcdn.com/bphoto/fNFdhU_I6Iw7J1jM5nVmAw/o.jpg",
        categories: ["gastropubs", "burgers", "salad"],
        location: {
          address: "3179 Los Feliz Blvd",
          city: "Los Angeles",
          zipcode: 90039,
          country: "US",
          state: "CA",
        },
        phone: "3236671839",
        hours: ["12:00 PM - 9:00 PM",
          "12:00 PM - 9:00 PM",
          "12:00 PM - 9:00 PM",
          "12:00 PM - 9:00 PM", 
          "12:00 PM - 10:00 PM", 
          "12:00 PM - 11:00 PM", 
          "12:00 PM - 11:00 PM"
          ]
      },
      {
        name: "Daikokuya Little Tokyo",
        image: "https://s3-media3.fl.yelpcdn.com/bphoto/GG71SxFbzBd9-SRMRtB1EQ/o.jpg",
        categories: ["ramen", "noodles", "Japanese"],
        location: {
          address: "327 E 1st St",
          city: "Los Angeles",
          zipcode: 90012,
          country: "US",
          state: "CA"
        },
        phone: "2136261680",
        hours: ["11:00 AM - 10:00 PM", 
        "11:00 AM - 10:00 PM", 
        "11:00 AM - 10:00 PM", 
        "11:00 AM - 10:00 PM", 
        "11:00 AM - 10:00 PM", 
        "11:00 AM - 10:00 PM", 
        "11:00 AM - 10:00 PM"]
      },
      {
        name: "Republique",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/8ZrTX6_QsCK1FGM-04hj4g/o.jpg",
        categories: ["French", "breakfast", "brunch", "cocktail bars"],
        location: {
          address: "624 S La Brea Ave",
          city: "Los Angeles",
          zipcode: 90036,
          country: "US",
          state: "CA",
        },
        phone: "3103626115",
        hours: ["8:00 AM - 2:00 PM & 5:30 PM - 10:00 PM", 
        "8:00 AM - 2:00 PM", 
        "8:00 AM - 2:00 PM", 
        "8:00 AM - 2:00 PM & 5:30 PM - 10:00 PM", 
        "8:00 AM - 2:00 PM & 5:30 PM - 10:00 PM", 
        "8:00 AM - 2:00 PM & 5:30 PM - 10:00 PM", 
        "8:00 AM - 2:00 PM & 5:30 PM - 10:00 PM"]
      },
      {
        name: "Bestia",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/zIofyPBM8Bqqoio3tQS6RQ/o.jpg",
        categories: ["Italian", "cocktail bars", "pizza"],
        location: {
          address: "2121 E 7th Pl",
          city: "Los Angeles",
          zipcode: 90021,
          country: "US",
          state: "CA",
        },
        phone: "2135145724",
        hours: ["5:00 PM - 11:00 PM", 
        "5:00 PM - 11:00 PM", 
        "5:00 PM - 11:00 PM", 
        "5:00 PM - 11:00 PM", 
        "5:00 PM - 11:00 PM", 
        "5:00 PM - 11:00 PM", 
        "5:00 PM - 11:00 PM"]
      },
      {
        name: "Kang Ho-dong Baekjeong",
        image: "https://s3-media1.fl.yelpcdn.com/bphoto/0LQSELQTy5LFG3xLUPbRpQ/o.jpg",
        categories: ["bbq", "barbeque", "Korean", "banchan"],
        location: {
          address: "3465 W 6th St Ste 20",
          city: "Los Angeles",
          zipcode: 90020,
          country: "US",
          state: "CA",
        },
        phone: "2133849678",
        hours: ["11:30 AM - 12:00 AM (Next day)", 
        "11:30 AM - 12:00 AM (Next day)", 
        "11:30 AM - 12:00 AM (Next day)", 
        "11:30 AM - 12:00 AM (Next day)", 
        "11:30 AM - 12:00 AM (Next day)", 
        "11:30 AM - 12:00 AM (Next day)", 
        "11:30 AM - 12:00 AM (Next day)"]
      },
      {
        name: "Langer's Delicatessen",
        image: "https://s3-media2.fl.yelpcdn.com/bphoto/hRHsvV05DPkSakuTrh4D5Q/o.jpg",
        categories: ["delis", "sandwiches", "pastrami"],
        location: {
          address: "704 S Alvarado St",
          city: "Los Angeles",
          zipcode: 90057,
          country: "US",
          state: "CA",
        },
        phone: "2134838050",
        hours: ["Closed", "8:00 AM - 4:00 PM", "8:00 AM - 4:00 PM", "8:00 AM - 4:00 PM", "8:00 AM - 4:00 PM", "8:00 AM - 4:00 PM", "8:00 AM - 4:00 PM"]
      },
      {
        name: "Perch",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/EuMBxqiXE6cOEFma6ie0Iw/o.jpg",
        categories: ["lounges", "French", "breakfast", "brunch"],
        location: {
          address: "448 S Hill St",
          city: "Los Angeles",
          zipcode: 90013,
          country: "US",
          state: "CA",
        },
        phone: "2138021770",
        hours: ["10:00 AM - 3:30 PM & 5:00 PM - 1:00 AM (Next day)", 
        "4:00 PM - 1:00 AM (Next day)", 
        "4:00 PM - 1:00 AM (Next day)", 
        "4:00 PM - 1:00 AM (Next day)", 
        "4:00 PM - 2:00 AM (Next day)", 
        "4:00 PM - 2:00 AM (Next day)", 
        "10:00 AM - 3:30 PM & 5:00 PM - 2:00 AM (Next day)"]
      },
      {
        name: "Blu Jam Café",
        image: "https://s3-media4.fl.yelpcdn.com/bphoto/XE1J0GjYpoTEKbjv0ayhWA/o.jpg",
        categories: ["American (New)", "breakfast", "brunch", "cafe"],
        location: {
          address: "7371 Melrose Ave",
          city: "Los Angeles",
          zipcode: 90046,
          country: "US",
          state: "CA",
        },
        phone: "3239519191",
        hours: ["9:00 AM - 2:00 PM", 
        "9:00 AM - 2:00 PM", 
        "9:00 AM - 2:00 PM", 
        "9:00 AM - 2:00 PM", 
        "9:00 AM - 2:00 PM", 
        "9:00 AM - 2:00 PM", 
        "9:00 AM - 2:00 PM"]
      },
      {
        name: "The Griddle Cafe",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/UVoISNekB_WCvznwiwbyoA/o.jpg",
        categories: ["breakfast", "brunch", "coffee", "tea", "cocktail bars"],
        location: {
          address: "1999 N Sycamore Ave",
          city: "Los Angeles",
          zipcode: 90068,
          country: "US",
          state: "CA",
        },
        phone: "3238740377",
        hours: ["8:00 AM - 2:00 PM", 
        "Closed", 
        "Closed", 
        "8:00 AM - 2:00 PM", 
        "8:00 AM - 2:00 PM", 
        "8:00 AM - 2:00 PM", 
        "8:00 AM - 2:00 PM"]
      },
      {
        name: "Marugame Monzo",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/T8FLt9X8nJAVuDq_-Pq2Hg/o.jpg",
        categories: ["Japanese", "noodles", "fusion"],
        location: {
          address: "329 E 1st St",
          city: "Los Angeles",
          zipcode: 90012,
          country: "US",
          state: "CA",
        },
        phone: "2133469762",
        hours: ["12:00 PM - 8:00 PM", 
        "12:00 PM - 8:00 PM", 
        "12:00 PM - 8:00 PM", 
        "12:00 PM - 8:00 PM", 
        "12:00 PM - 8:00 PM", 
        "12:00 PM - 9:00 PM", 
        "12:00 PM - 9:00 PM"]
      },
      {
        name: "SK Donuts & Croissant",
        image: "https://s3-media3.fl.yelpcdn.com/bphoto/KJMZ0eazBbMFmg9ode6uoA/o.jpg",
        categories: ["donuts", "bakeries", "vegan"],
        location: {
          address: "5850 W 3rd St",
          city: "Los Angeles",
          zipcode: 90036,
          country: "US",
          state: "CA",
        },
        phone: "3239352409",
        hours: ["5:30 AM - 10:00 PM", 
        "5:30 AM - 9:00 PM", 
        "5:30 AM - 9:00 PM", 
        "5:30 AM - 9:00 PM", 
        "5:30 AM - 9:00 PM", 
        "5:30 AM - 10:00 PM", 
        "5:30 AM - 10:00 PM"]
      },
      {
        name: "Hae Jang Chon Korean BBQ Restaurant",
        image: "https://s3-media2.fl.yelpcdn.com/bphoto/UE_ZY3fBqOaun7z-75Drbw/o.jpg",
        categories: ["Korean", "barbeque", "bbq"],
        location: {
          address: "3821 W 6th St",
          city: "Los Angeles",
          zipcode: 90020,
          country: "US",
          state: "CA",
        },
        phone: "2133898777",
        hours: ["Closed", 
        "11:00 AM - 11:00 PM", 
        "11:00 AM - 11:00 PM", 
        "11:00 AM - 11:00 PM", 
        "11:00 AM - 11:00 PM", 
        "11:00 AM - 11:00 PM", 
        "11:00 AM - 11:00 PM"]
      },
      {
        name: "Providence",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/CY1ZOfVg9fyWrKBcqOvhkw/o.jpg",
        categories: ["American", "seafood"],
        location: {
          address: "5955 Melrose Ave",
          city: "Los Angeles",
          zipcode: 90038,
          country: "US",
          state: "CA",
        },
        phone: "3234604170",
        hours: ["Closed", 
        "Closed", 
        "6:00 PM - 9:00 PM", 
        "6:00 PM - 9:00 PM", 
        "6:00 PM - 9:00 PM", 
        "6:00 PM - 9:00 PM", 
        "5:30 PM - 9:00 PM"]
      },
      {
        name: "Masa of Echo Park",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/N_9ysmCKaA44LBg0xdNchw/o.jpg",
        categories: ["vegan", "Chicago deep dish", "pizza"],
        location: {
          address: "1800 W Sunset Blvd",
          city: "Los Angeles",
          zipcode: 90026,
          country: "US",
          state: "CA",
        },
        phone: "2139891558",
        hours: ["11:00 AM - 10:00 PM", 
        "Closed", 
        "Closed", 
        "11:00 AM - 10:00 PM", 
        "11:00 AM - 10:00 PM", 
        "11:00 AM - 10:00 PM", 
        "11:00 AM - 10:00 PM"]
      },
      {
        name: "India's Restaurant",
        image: "https://s3-media2.fl.yelpcdn.com/bphoto/W6wouvpHpHpZR6Ma87Oycg/o.jpg",
        categories: ["Indian", "halal", "buffets"],
        location: {
          address: "4366 Fountain Ave",
          city: "Los Angeles",
          zipcode: 90029,
          country: "US",
          state: "CA",
        },
        phone: "3239129230",
        hours: ["11:00 AM - 1:00 AM (Next day)", 
        "11:00 AM - 1:00 AM (Next day)", 
        "11:00 AM - 1:00 AM (Next day)", 
        "11:00 AM - 1:00 AM (Next day)", 
        "11:00 AM - 1:00 AM (Next day)", 
        "11:00 AM - 1:00 AM (Next day)", 
        "11:00 AM - 1:00 AM (Next day)"]
      },
      {
        name: "Zinc Cafe & Market",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/ht1YCHqrpeQ_DxV5hX_KaQ/o.jpg",
        categories: ["vegetarian", "breakfast", "brunch", "cocktail bars"],
        location: {
          address: "580 Mateo St",
          city: "Los Angeles",
          zipcode: 90013,
          country: "US",
          state: "CA",
        },
        phone: "3238255381",
        hours: ["10:00 AM - 8:00 PM", 
        "10:00 AM - 8:00 PM", 
        "10:00 AM - 8:00 PM", 
        "10:00 AM - 8:00 PM", 
        "10:00 AM - 8:00 PM", 
        "10:00 AM - 8:00 PM", 
        "10:00 AM - 8:00 PM"]
      },
      {
        name: "Shekarchi Restaurant",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/c9kS6sBiJDJAnedtaiiI6A/o.jpg",
        categories: ["Persian", "Iranian", "Halal", "Mediterranean"],
        location: {
          address: "920 S Olive St",
          city: "Los Angeles",
          zipcode: 90015,
          country: "US",
          state: "CA",
        },
        phone: "2138928535",
        hours: ["Closed", 
        "11:00 AM - 7:30 PM", 
        "11:00 AM - 7:30 PM", 
        "11:00 AM - 7:30 PM", 
        "11:00 AM - 7:30 PM", 
        "11:00 AM - 7:30 PM", 
        "Closed"]
      },
    ],
  
  function(error, createdRestaurants) {
    if (error) {
      return console.log(error);
    }
    console.log("Restaurant seed has been planted!");
  }
  )
});