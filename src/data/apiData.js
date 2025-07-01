export const apis = [
{
      id: 1,
      name: "The Dog API",
      description: "Random dog images and breed information",
      category: "animals",
      endpoint: "https://dog.ceo/api/breeds/image/random",
      method: "GET",
      sampleResponse: {
        "message": "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
        "status": "success"
      },
      documentation: "https://dog.ceo/dog-api/",
      rating: 4.8
    },
    {
      id: 5,
      name: "Cat Facts",
      description: "Random cat facts to brighten your day",
      category: "animals",
      endpoint: "https://catfact.ninja/fact",
      method: "GET",
      sampleResponse: {
        "fact": "Cats make about 100 different sounds. Dogs make only about 10.",
        "length": 62
      },
      documentation: "https://catfact.ninja/",
      rating: 4.4
    },
    {
      id: 7,
      name: "HTTP Cats",
      description: "Cat images for every HTTP status code",
      category: "animals",
      endpoint: "https://http.cat/200",
      method: "GET",
      sampleResponse: "Image of a cat representing HTTP 200 status",
      documentation: "https://http.cat/",
      rating: 4.7
    },
    {
      id: 8,
      name: "Shibe API",
      description: "Random Shiba Inu pictures, because why not?",
      category: "animals",
      endpoint: "https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true",
      method: "GET",
      sampleResponse: [
        "https://cdn.shibe.online/shibes/89c87a01-8b63-4f73-9e80-38c3a0b30473.jpg"
      ],
      documentation: "https://shibe.online/",
      rating: 4.6
    },
    {
      id: 9,
      name: "Random Fox",
      description: "Curated fox images with unique IDs",
      category: "animals",
      endpoint: "https://randomfox.ca/floof/",
      method: "GET",
      sampleResponse: {
        "image": "https://randomfox.ca/images/2.jpg",
        "link": "https://randomfox.ca/?i=2"
      },
      documentation: "https://randomfox.ca/",
      rating: 4.5
    },
        {
      id: 10,
      name: "ISS Location",
      description: "Real-time location of the International Space Station",
      category: "science",
      endpoint: "http://api.open-notify.org/iss-now.json",
      method: "GET",
      sampleResponse: {
        "timestamp": 1640995200,
        "iss_position": {
          "latitude": "-25.9952",
          "longitude": "143.4389"
        }
      },
      documentation: "http://open-notify.org/",
      rating: 4.9
    },
    {
      id: 11,
      name: "People in Space",
      description: "How many people are currently in space right now",
      category: "science",
      endpoint: "http://api.open-notify.org/astros.json",
      method: "GET",
      sampleResponse: {
        "number": 7,
        "people": [
          {"name": "Sergey Prokopyev", "craft": "ISS"}
        ]
      },
      documentation: "http://open-notify.org/",
      rating: 4.8
    },
    {
      id: 12,
      name: "Sunrise Sunset",
      description: "Sunrise and sunset times for any location",
      category: "science",
      endpoint: "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&formatted=0",
      method: "GET",
      sampleResponse: {
        "sunrise": "2023-01-01T06:20:00+00:00",
        "sunset": "2023-01-01T17:43:00+00:00"
      },
      documentation: "https://sunrise-sunset.org/api",
      rating: 4.6
    },
        {
      id: 13,
      name: "QR Server",
      description: "Generate QR codes for any text or URL",
      category: "tools",
      endpoint: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Hello%20World",
      method: "GET",
      sampleResponse: "QR Code Image (PNG format)",
      documentation: "https://goqr.me/api/",
      rating: 4.7
    },
    {
      id: 14,
      name: "Lorem Picsum",
      description: "Beautiful placeholder images with specific dimensions",
      category: "tools",
      endpoint: "https://picsum.photos/300/200",
      method: "GET",
      sampleResponse: "Random 300x200 placeholder image",
      documentation: "https://picsum.photos/",
      rating: 4.8
    },
    {
      id: 15,
      name: "IP Geolocation",
      description: "Get location information from any IP address",
      category: "tools",
      endpoint: "https://ipapi.co/8.8.8.8/json/",
      method: "GET",
      sampleResponse: {
        "ip": "8.8.8.8",
        "city": "Mountain View",
        "country": "US",
        "org": "Google LLC"
      },
      documentation: "https://ipapi.co/",
      rating: 4.5
    },
    {
      id: 16,
      name: "UUID Generator",
      description: "Generate unique identifiers in various formats",
      category: "tools",
      endpoint: "https://www.uuidtools.com/api/generate/v4",
      method: "GET",
      sampleResponse: [
        "550e8400-e29b-41d4-a716-446655440000"
      ],
      documentation: "https://www.uuidtools.com/",
      rating: 4.4
    },
        {
      id: 4,
      name: "AnimeChan Quotes",
      description: "Random anime quotes from various series",
      category: "fun",
      endpoint: "https://animechan.xyz/api/random",
      method: "GET",
      sampleResponse: {
        "anime": "One Piece",
        "character": "Monkey D. Luffy",
        "quote": "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean... is the Pirate King!"
      },
      documentation: "https://animechan.xyz/",
      rating: 4.6
    },
    {
      id: 6,
      name: "JokeAPI",
      description: "Programming and general jokes API",
      category: "fun",
      endpoint: "https://v2.jokeapi.dev/joke/Programming?type=single",
      method: "GET",
      sampleResponse: {
        "category": "Programming",
        "type": "single",
        "joke": "There are only 10 types of people in this world: those who understand binary and those who don't."
      },
      documentation: "https://jokeapi.dev/",
      rating: 4.3
    },
    {
      id: 17,
      name: "Chuck Norris Facts",
      description: "Random Chuck Norris jokes and facts",
      category: "fun",
      endpoint: "https://api.chucknorris.io/jokes/random",
      method: "GET",
      sampleResponse: {
        "value": "Chuck Norris can divide by zero.",
        "url": "https://api.chucknorris.io/jokes/abc123"
      },
      documentation: "https://api.chucknorris.io/",
      rating: 4.2
    },
    {
      id: 18,
      name: "Random User",
      description: "Generate random user profiles with photos",
      category: "fun",
      endpoint: "https://randomuser.me/api/",
      method: "GET",
      sampleResponse: {
        "results": [{
          "name": {"first": "John", "last": "Doe"},
          "email": "john.doe@example.com"
        }]
      },
      documentation: "https://randomuser.me/",
      rating: 4.7
    },
    {
      id: 19,
      name: "Kanye West Quotes",
      description: "Random quotes from Kanye West",
      category: "fun",
      endpoint: "https://api.kanye.rest/",
      method: "GET",
      sampleResponse: {
        "quote": "Believe in your flyness...conquer your shyness."
      },
      documentation: "https://kanye.rest/",
      rating: 4.1
    },
    {
      id: 20,
      name: "Dad Jokes",
      description: "Random dad jokes that will make you groan",
      category: "fun",
      endpoint: "https://icanhazdadjoke.com/",
      method: "GET",
      sampleResponse: {
        "joke": "Why don't scientists trust atoms? Because they make up everything."
      },
      documentation: "https://icanhazdadjoke.com/api",
      rating: 4.4
    },
        {
      id: 2,
      name: "Open-Meteo Weather",
      description: "Free weather forecast API with no API key required",
      category: "data",
      endpoint: "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true",
      method: "GET",
      sampleResponse: {
        "current_weather": {
          "temperature": 15.3,
          "windspeed": 25.8,
          "weathercode": 3
        }
      },
      documentation: "https://open-meteo.com/",
      rating: 4.9
    },
    {
      id: 3,
      name: "Public Holidays API",
      description: "Get public holidays for any country and year",
      category: "data",
      endpoint: "https://date.nager.at/api/v3/PublicHolidays/2024/US",
      method: "GET",
      sampleResponse: [
        {
          "date": "2024-01-01",
          "localName": "New Year's Day",
          "name": "New Year's Day"
        }
      ],
      documentation: "https://date.nager.at/",
      rating: 4.5
    },
    {
      id: 21,
      name: "COVID-19 Data",
      description: "Global COVID-19 statistics and data",
      category: "data",
      endpoint: "https://disease.sh/v3/covid-19/all",
      method: "GET",
      sampleResponse: {
        "cases": 123456789,
        "deaths": 1234567,
        "recovered": 122000000
      },
      documentation: "https://disease.sh/",
      rating: 4.6
    },
    {
      id: 22,
      name: "Country Info",
      description: "Detailed information about any country",
      category: "data",
      endpoint: "https://restcountries.com/v3.1/name/japan",
      method: "GET",
      sampleResponse: [{
        "name": {"common": "Japan"},
        "capital": ["Tokyo"],
        "population": 125836021
      }],
      documentation: "https://restcountries.com/",
      rating: 4.8
    },
    {
      id: 23,
      name: "Universities",
      description: "Search for universities by country and name",
      category: "data",
      endpoint: "http://universities.hipolabs.com/search?country=United+States&name=Stanford",
      method: "GET",
      sampleResponse: [{
        "name": "Stanford University",
        "country": "United States",
        "web_pages": ["http://www.stanford.edu/"]
      }],
      documentation: "https://github.com/hipo/university-domains-list",
      rating: 4.4
    },
    {
      id: 24,
      name: "Gender Prediction",
      description: "Predict gender based on first name",
      category: "data",
      endpoint: "https://api.genderize.io?name=john",
      method: "GET",
      sampleResponse: {
        "name": "john",
        "gender": "male",
        "probability": 0.99
      },
      documentation: "https://genderize.io/",
      rating: 4.3
    },
    {
      id: 25,
      name: "Age Prediction",
      description: "Predict age based on first name",
      category: "data",
      endpoint: "https://api.agify.io?name=michael",
      method: "GET",
      sampleResponse: {
        "name": "michael",
        "age": 45,
        "count": 233482
      },
      documentation: "https://agify.io/",
      rating: 4.2
    },
        {
      id: 26,
      name: "CoinGecko",
      description: "Cryptocurrency prices and market data",
      category: "finance",
      endpoint: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
      method: "GET",
      sampleResponse: {
        "bitcoin": {
          "usd": 45000
        }
      },
      documentation: "https://www.coingecko.com/en/api",
      rating: 4.7
    },
    {
      id: 27,
      name: "Exchange Rates",
      description: "Live currency exchange rates",
      category: "finance",
      endpoint: "https://api.exchangerate-api.com/v4/latest/USD",
      method: "GET",
      sampleResponse: {
        "base": "USD",
        "rates": {
          "EUR": 0.85,
          "GBP": 0.73
        }
      },
      documentation: "https://exchangerate-api.com/",
      rating: 4.5
    },
        {
      id: 28,
      name: "Quotable",
      description: "Random inspirational quotes with authors",
      category: "quotes",
      endpoint: "https://api.quotable.io/random",
      method: "GET",
      sampleResponse: {
        "content": "The only impossible journey is the one you never begin.",
        "author": "Tony Robbins"
      },
      documentation: "https://github.com/lukePeavey/quotable",
      rating: 4.6
    },
    {
      id: 29,
      name: "Breaking Bad Quotes",
      description: "Random quotes from Breaking Bad TV series",
      category: "quotes",
      endpoint: "https://api.breakingbadquotes.xyz/v1/quotes",
      method: "GET",
      sampleResponse: [{
        "quote": "I am not in danger, Skyler. I am the danger!",
        "author": "Walter White"
      }],
      documentation: "https://breakingbadquotes.xyz/",
      rating: 4.3
    },
        {
      id: 30,
      name: "Deck of Cards",
      description: "Draw cards from a shuffled deck API",
      category: "games",
      endpoint: "https://deckofcardsapi.com/api/deck/new/draw/?count=2",
      method: "GET",
      sampleResponse: {
        "success": true,
        "cards": [{
          "code": "AS",
          "value": "ACE",
          "suit": "SPADES"
        }]
      },
      documentation: "https://deckofcardsapi.com/",
      rating: 4.8
    },
  {
    id: 31,
    name: "RandomDuck",
    description: "API for fetching random duck images.",
    category: "animals",
    endpoint: "https://random-d.uk/api/v2/random",
    method: "GET",
    sampleResponse: { "url": "https://random-d.uk/api/159.jpg", "message": "Made by @aden#4162" },
    documentation: "https://random-d.uk/api",
    rating: 4.6
  },
  {
    id: 32,
    name: "Public APIs",
    description: "An API that lists other public APIs.",
    category: "data",
    endpoint: "https://api.publicapis.org/random",
    method: "GET",
    sampleResponse: { "count": 1, "entries": [{ "API": "Cat Facts", "Description": "Daily cat facts", "Link": "https://alexwohlbruck.github.io/cat-facts/" }] },
    documentation: "https://api.publicapis.org/",
    rating: 4.8
  },
  {
    id: 33,
    name: "Dictionary API",
    description: "Free English dictionary API with phonetics and audio.",
    category: "data",
    endpoint: "https://api.dictionaryapi.dev/api/v2/entries/en/hello",
    method: "GET",
    sampleResponse: [{ "word": "hello", "phonetic": "/həˈloʊ/", "meanings": [{ "partOfSpeech": "exclamation" }] }],
    documentation: "https://dictionaryapi.dev/",
    rating: 4.7
  },
  {
    id: 34,
    name: "The Bored API",
    description: "Find something to do when you're bored.",
    category: "fun",
    endpoint: "https://www.boredapi.com/api/activity",
    method: "GET",
    sampleResponse: { "activity": "Learn a new programming language", "type": "education", "participants": 1 },
    documentation: "https://www.boredapi.com/",
    rating: 4.9
  },
  {
    id: 35,
    name: "PokéAPI",
    description: "The RESTful Pokémon API. Get data for any Pokémon.",
    category: "fun",
    endpoint: "https://pokeapi.co/api/v2/pokemon/ditto",
    method: "GET",
    sampleResponse: { "name": "ditto", "height": 3, "weight": 40, "sprites": { "front_default": "..." } },
    documentation: "https://pokeapi.co/",
    rating: 4.9
  },
  {
    id: 36,
    name: "Open Trivia DB",
    description: "Free to use, user-contributed trivia question database.",
    category: "fun",
    endpoint: "https://opentdb.com/api.php?amount=1&category=18",
    method: "GET",
    sampleResponse: { "response_code": 0, "results": [{ "category": "Science: Computers", "question": "What does 'CPU' stand for?" }] },
    documentation: "https://opentdb.com/api_config.php",
    rating: 4.6
  },
    {
    id: 37,
    name: "is.gd URL Shortener",
    description: "A free and fast URL shortener API.",
    category: "tools",
    endpoint: "https://is.gd/create.php?format=json&url=www.google.com",
    method: "GET",
    sampleResponse: { "shorturl": "https://is.gd/R7Y319" },
    documentation: "https://is.gd/api_info.php",
    rating: 4.5
  },
    {
    id: 38,
    name: "TheMealDB",
    description: "An open, crowd-sourced database of Recipes from around the world.",
    category: "food",
    endpoint: "https://www.themealdb.com/api/json/v1/1/random.php",
    method: "GET",
    sampleResponse: { "meals": [{ "idMeal": "52945", "strMeal": "Kung Pao Chicken" }] },
    documentation: "https://www.themealdb.com/api.php",
    rating: 4.8
  },
  {
    id: 39,
    name: "TheCocktailDB",
    description: "An open, crowd-sourced database of drinks and cocktails.",
    category: "food",
    endpoint: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    method: "GET",
    sampleResponse: { "drinks": [{ "idDrink": "11007", "strDrink": "Margarita" }] },
    documentation: "https://www.thecocktaildb.com/api.php",
    rating: 4.8
  },
  {
    id: 40,
    name: "PoetryDB",
    description: "Search for poems by title, author, or lines.",
    category: "books",
    endpoint: "https://poetrydb.org/random",
    method: "GET",
    sampleResponse: [{ "title": "A-Walking", "author": "William Barnes", "lines": ["The primrwose in the sheäde do blow..."] }],
    documentation: "https://poetrydb.org/index.html",
    rating: 4.6
  },
  {
    id: 41,
    name: "Gutendex",
    description: "A free API for the Project Gutenberg ebook library.",
    category: "books",
    endpoint: "https://gutendex.com/books/?search=moby%20dick",
    method: "GET",
    sampleResponse: { "count": 1, "results": [{"title": "Moby Dick; Or, The Whale", "authors": [{"name": "Melville, Herman"}] }] },
    documentation: "https://gutendex.com/",
    rating: 4.7
  },
  {
    id: 42,
    name: "Wikipedia Summary",
    description: "Get a short summary of any Wikipedia article.",
    category: "data",
    endpoint: "https://en.wikipedia.org/api/rest_v1/page/summary/React_(JavaScript_library)",
    method: "GET",
    sampleResponse: { "title": "React (JavaScript library)", "extract": "React is a free and open-source front-end JavaScript library..." },
    documentation: "https://en.wikipedia.org/api/rest_v1/",
    rating: 4.8
  },
  {
    id: 43,
    name: "JSONPlaceholder",
    description: "Fake REST API for testing and prototyping. A classic for a reason!",
    category: "tools",
    endpoint: "https://jsonplaceholder.typicode.com/posts/1",
    method: "GET",
    sampleResponse: { "userId": 1, "id": 1, "title": "sunt aut facere...", "body": "quia et suscipit..." },
    documentation: "https://jsonplaceholder.typicode.com/",
    rating: 4.9
  },
  {
    id: 44,
    name: "Have I Been Pwned?",
    description: "Check if a password has been exposed in a data breach.",
    category: "tools",
    endpoint: "https://api.pwnedpasswords.com/range/21BD1",
    method: "GET",
    sampleResponse: "0018A45C4D1DEF81644B54AB7F969B88D65:1\n003056221762B8D2423A73A6B2975B08A44:1",
    documentation: "https://haveibeenpwned.com/API/v3#PwnedPasswords",
    rating: 4.8
  },
  {
    id: 45,
    name: "Color Palette Generator",
    description: "Generate color palettes from a single seed color.",
    category: "tools",
    endpoint: "https://www.thecolorapi.com/scheme?hex=24A0ED&format=json&mode=monochrome",
    method: "GET",
    sampleResponse: { "colors": [{"hex": {"value": "#24A0ED"}}, {"hex": {"value": "#1D80BD"}}] },
    documentation: "https://www.thecolorapi.com/docs",
    rating: 4.8
  },
  {
    id: 46,
    name: "USGS Earthquake Catalog",
    description: "Real-time data on global earthquakes.",
    category: "science",
    endpoint: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",
    method: "GET",
    sampleResponse: { "features": [{"properties": {"mag": 1.29, "place": "10km NE of Aguanga, CA"}}] },
    documentation: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
    rating: 4.9
  },
  {
    id: 47,
    name: "Open Library Search",
    description: "Search for books by title, author, or subject.",
    category: "books",
    endpoint: "https://openlibrary.org/search.json?q=the+lord+of+the+rings",
    method: "GET",
    sampleResponse: { "docs": [{"title": "The Lord of the Rings", "author_name": ["J. R. R. Tolkien"]}] },
    documentation: "https://openlibrary.org/developers/api",
    rating: 4.8
  },
  {
    id: 48,
    name: "TVmaze Show Search",
    description: "Search for TV shows and get detailed information.",
    category: "fun",
    endpoint: "https://api.tvmaze.com/singlesearch/shows?q=dark",
    method: "GET",
    sampleResponse: { "id": 17861, "name": "Dark", "genres": ["Drama", "Crime", "Supernatural"], "status": "Ended" },
    documentation: "https://www.tvmaze.com/api",
    rating: 4.9
  },
  {
    id: 49,
    name: "The Metropolitan Museum of Art",
    description: "Access data on artworks in The Met collection.",
    category: "data",
    endpoint: "https://collectionapi.metmuseum.org/public/collection/v1/objects/436535",
    method: "GET",
    sampleResponse: { "objectID": 436535, "primaryImage": "...", "title": "Wheat Field with Cypresses", "artistDisplayName": "Vincent van Gogh" },
    documentation: "https://metmuseum.github.io/",
    rating: 4.9
  },
  {
    id: 50,
    name: "World Bank Indicators",
    description: "Access global development data (e.g., GDP, population).",
    category: "data",
    endpoint: "https://api.worldbank.org/v2/country/in/indicator/SP.POP.TOTL?format=json",
    method: "GET",
    sampleResponse: [ {"page": 1}, [{"country": {"id": "IN", "value": "India"}, "date": "2023", "value": 1428627663}] ],
    documentation: "https://datahelpdesk.worldbank.org/knowledgebase/topics/125589",
    rating: 4.7
  },
{
  id: 51,
  name: "Google Books API",
  description: "Search and access millions of books from Google's collection",
  category: "books",
  endpoint: "https://www.googleapis.com/books/v1/volumes?q=javascript",
  method: "GET",
  sampleResponse: {
    "items": [{
      "volumeInfo": {
        "title": "JavaScript: The Good Parts",
        "authors": ["Douglas Crockford"],
        "publishedDate": "2008"
      }
    }]
  },
  documentation: "https://developers.google.com/books/docs/v1/using",
  rating: 4.8
},

{
  id: 52,
  name: "NY Times Books API",
  description: "New York Times Best Sellers lists and book reviews",
  category: "books",
  endpoint: "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=DEMO_KEY",
  method: "GET",
  sampleResponse: {
    "results": {
      "books": [{
        "title": "THE SEVEN MOONS OF MAALI ALMEIDA",
        "author": "Shehan Karunatilaka",
        "rank": 1
      }]
    }
  },
  documentation: "https://developer.nytimes.com/docs/books-product/1/overview",
  rating: 4.7
},

{
  id: 53,
  name: "Open Library Covers",
  description: "Book cover images from Open Library collection",
  category: "books",
  endpoint: "https://covers.openlibrary.org/b/isbn/9780140328721-M.jpg",
  method: "GET",
  sampleResponse: "Book cover image (JPEG format)",
  documentation: "https://openlibrary.org/dev/docs/api/covers",
  rating: 4.6
},

{
  id: 54,
  name: "Quotable Authors",
  description: "Search quotes by specific authors and topics",
  category: "books",
  endpoint: "https://api.quotable.io/quotes?author=shakespeare&limit=1",
  method: "GET",
  sampleResponse: {
    "results": [{
      "content": "To be, or not to be, that is the question",
      "author": "William Shakespeare",
      "tags": ["famous-quotes"]
    }]
  },
  documentation: "https://github.com/lukePeavey/quotable",
  rating: 4.7
},

{
  id: 55,
  name: "Librivox Audiobooks",
  description: "Free public domain audiobooks catalog",
  category: "books",
  endpoint: "https://librivox.org/api/feed/audiobooks/?title=alice%20in%20wonderland&format=json",
  method: "GET",
  sampleResponse: {
    "books": [{
      "title": "Alice's Adventures in Wonderland",
      "authors": [{"first_name": "Lewis", "last_name": "Carroll"}],
      "language": "English"
    }]
  },
  documentation: "https://librivox.org/pages/public-domain-librivox-recordings/",
  rating: 4.5
},

{
  id: 56,
  name: "Bible API",
  description: "Access Bible verses and chapters in multiple translations",
  category: "books",
  endpoint: "https://bible-api.com/john%203:16",
  method: "GET",
  sampleResponse: {
    "reference": "John 3:16",
    "text": "For God so loved the world...",
    "translation_name": "World English Bible"
  },
  documentation: "https://bible-api.com/",
  rating: 4.6
},
{
  id: 57,
  name: "Proverbs API",
  description: "Random proverbs and sayings from around the world",
  category: "books",
  endpoint: "https://api.proverbs.dev/",
  method: "GET",
  sampleResponse: {
    "proverb": "A journey of a thousand miles begins with a single step",
    "origin": "Chinese",
    "language": "English"
  },
  documentation: "https://proverbs.dev/",
  rating: 4.4
},
{
  id: 58,
  name: "Comic Book Database",
  description: "Search for comic books and graphic novels",
  category: "books",
  endpoint: "https://comicvine.gamespot.com/api/search/?api_key=DEMO&format=json&query=batman&resources=volume",
  method: "GET",
  sampleResponse: {
    "results": [{
      "name": "Batman",
      "publisher": {"name": "DC Comics"},
      "start_year": "1940"
    }]
  },
  documentation: "https://comicvine.gamespot.com/api/documentation",
  rating: 4.5
},

{
  id: 59,
  name: "Shakespeare API",
  description: "Complete works of Shakespeare with search functionality",
  category: "books",
  endpoint: "https://poetrydb.org/author/William%20Shakespeare",
  method: "GET",
  sampleResponse: [{
    "title": "Sonnet 18",
    "author": "William Shakespeare",
    "lines": ["Shall I compare thee to a summer's day?"]
  }],
  documentation: "https://poetrydb.org/index.html",
  rating: 4.8
},

{
  id: 60,
  name: "Bookshelf API",
  description: "Random book recommendations and reading lists",
  category: "books",
  endpoint: "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=DEMO_KEY",
  method: "GET",
  sampleResponse: {
    "results": [{
      "list_name": "Combined Print and E-Book Fiction",
      "display_name": "Combined Print & E-Book Fiction",
      "newest_published_date": "2023-01-01"
    }]
  },
  documentation: "https://developer.nytimes.com/docs/books-product/1/overview",
  rating: 4.6
},

{
  id: 61,
  name: "Manuscript API",
  description: "Historical manuscripts and ancient texts database",
  category: "books",
  endpoint: "https://api.bl.uk/metadata/tei/ark:/81055/vdc_100000000825.0x000001/manifest.json",
  method: "GET",
  sampleResponse: {
    "label": "Beowulf Manuscript",
    "description": "Anglo-Saxon epic poem manuscript",
    "attribution": "British Library"
  },
  documentation: "https://bl.iro.bl.uk/",
  rating: 4.3
},

{
  id: 62,
  name: "Classic Literature API",
  description: "Curated collection of classic literature excerpts",
  category: "books",
  endpoint: "https://poetrydb.org/random/1",
  method: "GET",
  sampleResponse: [{
    "title": "The Road Not Taken",
    "author": "Robert Frost",
    "lines": ["Two roads diverged in a yellow wood"]
  }],
  documentation: "https://poetrydb.org/index.html",
  rating: 4.7
},

{
  id: 63,
  name: "Book Genre API",
  description: "Classify books by genre and get genre-specific recommendations",
  category: "books",
  endpoint: "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=DEMO_KEY",
  method: "GET",
  sampleResponse: {
    "results": {
      "lists": [{
        "list_name": "Young Adult Hardcover",
        "books": [{"title": "The Atlas Six", "author": "Olivie Blake"}]
      }]
    }
  },
  documentation: "https://developer.nytimes.com/docs/books-product/1/overview",
  rating: 4.5
},

{
  id: 64,
  name: "Literary Quotes API",
  description: "Famous quotes from literature with book references",
  category: "books",
  endpoint: "https://api.quotable.io/quotes?tags=literature&limit=1",
  method: "GET",
  sampleResponse: {
    "results": [{
      "content": "It is a truth universally acknowledged...",
      "author": "Jane Austen",
      "tags": ["literature", "classic"]
    }]
  },
  documentation: "https://github.com/lukePeavey/quotable",
  rating: 4.6
},

{
  id: 65,
  name: "Reading List Generator",
  description: "Generate personalized reading lists based on genres",
  category: "books",
  endpoint: "https://gutendex.com/books/?topic=adventure&format=json",
  method: "GET",
  sampleResponse: {
    "results": [{
      "title": "Treasure Island",
      "authors": [{"name": "Stevenson, Robert Louis"}],
      "subjects": ["Adventure stories"]
    }]
  },
  documentation: "https://gutendex.com/",
  rating: 4.4
},
{
  id: 66,
  name: "Random Elephant API",
  description: "Random elephant images and facts",
  category: "animals",
  endpoint: "https://elephant-api.herokuapp.com/elephants/random",
  method: "GET",
  sampleResponse: {
    "image": "https://example.com/elephant.jpg",
    "name": "African Bush Elephant",
    "species": "Loxodonta africana"
  },
  documentation: "https://elephant-api.herokuapp.com/",
  rating: 4.5
},

{
  id: 67,
  name: "Bunny API",
  description: "Random bunny images to brighten your day",
  category: "animals",
  endpoint: "https://api.bunnies.io/v2/loop/random/?media=gif,png",
  method: "GET",
  sampleResponse: {
    "id": "112016013657",
    "media": {"gif": "https://cdn.bunnies.io/112016013657.gif"},
    "source": "https://bunnies.io"
  },
  documentation: "https://bunnies.io/",
  rating: 4.6
},

{
  id: 68,
  name: "Random Bird API",
  description: "Beautiful bird images with species information",
  category: "animals",
  endpoint: "https://some-random-api.ml/img/birb",
  method: "GET",
  sampleResponse: {
    "link": "https://i.some-random-api.ml/NQglYA5l8N.jpg"
  },
  documentation: "https://some-random-api.ml/docs",
  rating: 4.4
},

{
  id: 69,
  name: "TheCatAPI Images",
  description: "High-quality cat images with breeds and voting",
  category: "animals",
  endpoint: "https://api.thecatapi.com/v1/images/search",
  method: "GET",
  sampleResponse: [{
    "id": "0XYvRd7oD",
    "url": "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
    "width": 1204,
    "height": 1445
  }],
  documentation: "https://docs.thecatapi.com/",
  rating: 4.8
},

{
  id: 70,
  name: "Axolotl API",
  description: "Adorable axolotl images and facts",
  category: "animals",
  endpoint: "https://axoltlapi.herokuapp.com/",
  method: "GET",
  sampleResponse: {
    "url": "https://axoltlapi.herokuapp.com/axolotl1.png",
    "file": "axolotl1.png"
  },
  documentation: "https://github.com/theaxolotlapi/axolotlapi.herokuapp.com",
  rating: 4.3
},

{
  id: 71,
  name: "Zoo Animal API",
  description: "Information about zoo animals worldwide",
  category: "animals",
  endpoint: "https://zoo-animal-api.herokuapp.com/animals/rand",
  method: "GET",
  sampleResponse: {
    "name": "Lion",
    "latin_name": "Panthera leo",
    "animal_type": "Mammal",
    "habitat": "Savanna"
  },
  documentation: "https://zoo-animal-api.herokuapp.com/",
  rating: 4.4
},

{
  id: 72,
  name: "Bee Facts API",
  description: "Fascinating facts about bees and beekeeping",
  category: "animals",
  endpoint: "https://bee-facts-api.herokuapp.com/bee-facts/random",
  method: "GET",
  sampleResponse: {
    "fact": "A single bee colony can produce 30-60 pounds of honey per year",
    "id": 42
  },
  documentation: "https://bee-facts-api.herokuapp.com/",
  rating: 4.2
},

{
  id: 73,
  name: "Random Bear API",
  description: "Bear images and species information",
  category: "animals",
  endpoint: "https://placebear.com/200/300",
  method: "GET",
  sampleResponse: "Bear image (200x300 pixels)",
  documentation: "https://placebear.com/",
  rating: 4.1
},

{
  id: 74,
  name: "Marine Life API",
  description: "Ocean creatures and marine biology facts",
  category: "animals",
  endpoint: "https://www.fishwatch.gov/api/species",
  method: "GET",
  sampleResponse: [{
    "Species Name": "Atlantic Cod",
    "Scientific Name": "Gadus morhua",
    "Habitat": "Cold waters of the North Atlantic"
  }],
  documentation: "https://www.fishwatch.gov/developers",
  rating: 4.7
},

{
  id: 75,
  name: "Insect Facts API",
  description: "Educational facts about insects and bugs",
  category: "animals",
  endpoint: "https://insect-facts-api.herokuapp.com/random",
  method: "GET",
  sampleResponse: {
    "fact": "Butterflies taste with their feet",
    "insect": "Butterfly",
    "category": "behavior"
  },
  documentation: "https://insect-facts-api.herokuapp.com/",
  rating: 4.3
},
{
  id: 76,
  name: "Air Quality API",
  description: "Real-time air quality data worldwide",
  category: "science",
  endpoint: "https://api.waqi.info/feed/beijing/?token=demo",
  method: "GET",
  sampleResponse: {
    "data": {
      "aqi": 153,
      "city": {"name": "Beijing"},
      "dominentpol": "pm25"
    }
  },
  documentation: "https://aqicn.org/api/",
  rating: 4.8
},

{
  id: 77,
  name: "Moon Phase API",
  description: "Current moon phase and lunar calendar",
  category: "science",
  endpoint: "https://api.farmsense.net/v1/moonphases/?d=1663177200",
  method: "GET",
  sampleResponse: [{
    "Error": 0,
    "Phase": "Waning Gibbous",
    "Illumination": 0.86
  }],
  documentation: "https://www.farmsense.net/api/astro-widgets/",
  rating: 4.6
},

{
  id: 78,
  name: "Solar System API",
  description: "Planets, moons, and solar system data",
  category: "science",
  endpoint: "https://api.le-systeme-solaire.net/rest/bodies/",
  method: "GET",
  sampleResponse: {
    "bodies": [{
      "id": "terre",
      "name": "Earth",
      "mass": {"massValue": 5.97237, "massExponent": 24}
    }]
  },
  documentation: "https://api.le-systeme-solaire.net/",
  rating: 4.9
},

{
  id: 79,
  name: "Chemical Elements API",
  description: "Periodic table elements with properties",
  category: "science",
  endpoint: "https://neelpatel05.pythonanywhere.com/element/atomicnumber?atomicnumber=1",
  method: "GET",
  sampleResponse: {
    "name": "Hydrogen",
    "symbol": "H",
    "atomicNumber": 1,
    "atomicMass": "1.008"
  },
  documentation: "https://github.com/neelpatel05/periodic-table-api",
  rating: 4.7
},

{
  id: 80,
  name: "Math Facts API",
  description: "Interesting mathematical facts and trivia",
  category: "science",
  endpoint: "http://numbersapi.com/42",
  method: "GET",
  sampleResponse: "42 is the answer to the Ultimate Question of Life, the Universe, and Everything",
  documentation: "http://numbersapi.com/",
  rating: 4.5
},

{
  id: 81,
  name: "Random Science Facts",
  description: "Fascinating science facts from various fields",
  category: "science",
  endpoint: "https://uselessfacts.jsph.pl/random.json?language=en",
  method: "GET",
  sampleResponse: {
    "id": "9b5c1c70-1fb8-4afc-ba5b-7115d5980fd9",
    "text": "Bananas are berries, but strawberries aren't.",
    "source": "djtech.net",
    "language": "en"
  },
  documentation: "https://uselessfacts.jsph.pl/",
  rating: 4.4
},

{
  id: 82,
  name: "Periodic Table API",
  description: "Complete periodic table with element details",
  category: "science",
  endpoint: "https://periodic-table-elements-info.herokuapp.com/element/atomic-number/1",
  method: "GET",
  sampleResponse: {
    "name": "Hydrogen",
    "symbol": "H",
    "atomicNumber": 1,
    "period": 1,
    "group": 1
  },
  documentation: "https://github.com/andrejewski/periodic-table",
  rating: 4.8
},

{
  id: 83,
  name: "SpaceX API",
  description: "SpaceX launches, rockets, and mission data",
  category: "science",
  endpoint: "https://api.spacexdata.com/v4/launches/latest",
  method: "GET",
  sampleResponse: {
    "name": "Starlink-15 (v1.0)",
    "date_utc": "2021-05-26T18:59:37.000Z",
    "success": true
  },
  documentation: "https://docs.spacexdata.com/",
  rating: 4.9
},

{
  id: 84,
  name: "Mars Weather API",
  description: "Weather conditions on Mars from NASA",
  category: "science",
  endpoint: "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0",
  method: "GET",
  sampleResponse: {
    "sol_keys": ["801"],
    "801": {
      "AT": {"av": -60.1, "ct": 299, "mn": -95.2, "mx": -16.9}
    }
  },
  documentation: "https://api.nasa.gov/",
  rating: 4.8
},

{
  id: 85,
  name: "Geology Facts API",
  description: "Earth science and geological information",
  category: "science",
  endpoint: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson",
  method: "GET",
  sampleResponse: {
    "features": [{
      "properties": {
        "mag": 6.1,
        "place": "74 km NNE of Darfield, New Zealand",
        "type": "earthquake"
      }
    }]
  },
  documentation: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",
  rating: 4.7
},
{
  id: 86,
  name: "Random Meme API",
  description: "Fresh memes from popular subreddits",
  category: "fun",
  endpoint: "https://meme-api.herokuapp.com/gimme",
  method: "GET",
  sampleResponse: {
    "postLink": "https://redd.it/9tsc7w",
    "subreddit": "dankmemes",
    "title": "Stephan Karl deserves better",
    "url": "https://i.redd.it/example.jpg"
  },
  documentation: "https://github.com/D3vd/Meme_Api",
  rating: 4.6
},

{
  id: 87,
  name: "Official Joke API",
  description: "Clean jokes in various categories",
  category: "fun",
  endpoint: "https://official-joke-api.appspot.com/random_joke",
  method: "GET",
  sampleResponse: {
    "type": "general",
    "setup": "Why don't scientists trust atoms?",
    "punchline": "Because they make up everything!",
    "id": 1
  },
  documentation: "https://github.com/15Dkatz/official_joke_api",
  rating: 4.5
},

{
  id: 88,
  name: "The Movie DB API",
  description: "Movie database with ratings and details",
  category: "fun",
  endpoint: "https://api.themoviedb.org/3/movie/popular?api_key=DEMO_KEY",
  method: "GET",
  sampleResponse: {
    "results": [{
      "title": "Avatar: The Way of Water",
      "overview": "Set more than a decade after...",
      "release_date": "2022-12-16"
    }]
  },
  documentation: "https://developers.themoviedb.org/3/getting-started/introduction",
  rating: 4.9
},

{
  id: 89,
  name: "Music Facts API",
  description: "Interesting facts about music and musicians",
  category: "fun",
  endpoint: "https://music-facts-api.herokuapp.com/random",
  method: "GET",
  sampleResponse: {
    "fact": "Beethoven continued composing even after he became deaf",
    "category": "classical",
    "artist": "Ludwig van Beethoven"
  },
  documentation: "https://music-facts-api.herokuapp.com/",
  rating: 4.3
},

{
  id: 90,
  name: "Game of Thrones Quotes",
  description: "Memorable quotes from Game of Thrones",
  category: "fun",
  endpoint: "https://api.gameofthronesquotes.xyz/v1/random",
  method: "GET",
  sampleResponse: {
    "sentence": "Winter is coming.",
    "character": {
      "name": "Eddard Stark",
      "house": {"name": "House Stark"}
    }
  },
  documentation: "https://gameofthronesquotes.xyz/",
  rating: 4.7
},

{
  id: 91,
  name: "Marvel API",
  description: "Marvel comics characters and stories",
  category: "fun",
  endpoint: "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=DEMO&hash=DEMO",
  method: "GET",
  sampleResponse: {
    "data": {
      "results": [{
        "name": "Spider-Man",
        "description": "Bitten by a radioactive spider..."
      }]
    }
  },
  documentation: "https://developer.marvel.com/docs",
  rating: 4.8
},

{
  id: 92,
  name: "Rick and Morty API",
  description: "Characters and episodes from Rick and Morty",
  category: "fun",
  endpoint: "https://rickandmortyapi.com/api/character/1",
  method: "GET",
  sampleResponse: {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male"
  },
  documentation: "https://rickandmortyapi.com/documentation",
  rating: 4.9
},

{
  id: 93,
  name: "Star Wars API",
  description: "Star Wars universe data - characters, planets, ships",
  category: "fun",
  endpoint: "https://swapi.dev/api/people/1/",
  method: "GET",
  sampleResponse: {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond"
  },
  documentation: "https://swapi.dev/documentation",
  rating: 4.9
},

{
  id: 94,
  name: "Disney API",
  description: "Disney characters and movie information",
  category: "fun",
  endpoint: "https://api.disneyapi.dev/character",
  method: "GET",
  sampleResponse: {
    "data": [{
      "name": "Mickey Mouse",
      "films": ["Fantasia", "Mickey's Once Upon a Christmas"],
      "shortFilms": ["Steamboat Willie"]
    }]
  },
  documentation: "https://disneyapi.dev/docs",
  rating: 4.6
},

{
  id: 95,
  name: "Activity Suggestions API",
  description: "Random activity suggestions to cure boredom",
  category: "fun",
  endpoint: "https://www.boredapi.com/api/activity?type=recreational",
  method: "GET",
  sampleResponse: {
    "activity": "Go stargazing",
    "type": "recreational",
    "participants": 1,
    "price": 0
  },
  documentation: "https://www.boredapi.com/documentation",
  rating: 4.8
},
{
  id: 96,
  name: "Coffee API",
  description: "Coffee varieties, brewing methods, and facts",
  category: "food",
  endpoint: "https://coffee.alexflipnote.dev/random.json",
  method: "GET",
  sampleResponse: {
    "file": "https://coffee.alexflipnote.dev/BxVkOaGTi8s_coffee.jpg"
  },
  documentation: "https://coffee.alexflipnote.dev/",
  rating: 4.4
},

{
  id: 97,
  name: "Open Beer Database",
  description: "Beer database with brewery information",
  category: "food",
  endpoint: "https://api.openbrewerydb.org/breweries/random",
  method: "GET",
  sampleResponse: [{
    "id": "madtree-brewing-cincinnati",
    "name": "MadTree Brewing",
    "brewery_type": "micro",
    "city": "Cincinnati"
  }],
  documentation: "https://www.openbrewerydb.org/documentation",
  rating: 4.7
},

{
  id: 98,
  name: "Wine Database API",
  description: "Wine information, ratings, and pairings",
  category: "food",
  endpoint: "https://api.sampleapis.com/wines/reds",
  method: "GET",
  sampleResponse: [{
    "winery": "Maselva",
    "wine": "Emporda 2009",
    "rating": {"average": "4.6", "reviews": "155 reviews"}
  }],
  documentation: "https://sampleapis.com/api-list/wines",
  rating: 4.5
},

{
  id: 99,
  name: "Pizza Toppings API",
  description: "Pizza toppings and random pizza combinations",
  category: "food",
  endpoint: "https://pizza-and-desserts.herokuapp.com/pizzas",
  method: "GET",
  sampleResponse: [{
    "id": 1,
    "name": "Margherita",
    "toppings": ["tomato sauce", "mozzarella", "basil"],
    "img": "https://example.com/margherita.jpg"
  }],
  documentation: "https://pizza-and-desserts.herokuapp.com/",
  rating: 4.3
},

{
  id: 100,
  name: "Recipe Puppy API",
  description: "Recipe search with ingredients",
  category: "food",
  endpoint: "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3",
  method: "GET",
  sampleResponse: {
    "title": "Recipe Puppy",
    "results": [{
      "title": "Veggie Omelet",
      "href": "http://allrecipes.com/Recipe/Veggie-Omelet/Detail.aspx",
      "ingredients": "onions, garlic, eggs"
    }]
  },
  documentation: "http://www.recipepuppy.com/about/api/",
  rating: 4.2
},

{
  id: 101,
  name: "Food Facts API",
  description: "Nutritional facts and food trivia",
  category: "food",
  endpoint: "https://foodish-api.herokuapp.com/api/",
  method: "GET",
  sampleResponse: {
    "image": "https://foodish-api.herokuapp.com/images/burger/burger5.jpg"
  },
  documentation: "https://github.com/surhud004/Foodish#readme",
  rating: 4.4
},

{
  id: 102,
  name: "Random Cake API",
  description: "Cake recipes and beautiful cake images",
  category: "food",
  endpoint: "https://cake-api.herokuapp.com/cakes/random",
  method: "GET",
  sampleResponse: {
    "id": 1,
    "title": "Chocolate Cake",
    "difficulty": "Easy",
    "image": "https://example.com/chocolate-cake.jpg"
  },
  documentation: "https://cake-api.herokuapp.com/",
  rating: 4.1
},

{
  id: 103,
  name: "Tea Database API",
  description: "Tea varieties, origins, and brewing information",
  category: "food",
  endpoint: "https://tea-api-vic-lo.herokuapp.com/tea",
  method: "GET",
  sampleResponse: [{
    "_id": "5fa3fd5e3d1d8e001700dd6d",
    "name": "Green Tea",
    "image": "https://upload.wikimedia.org/wiki/Green_tea.jpg",
    "description": "Green tea is a type of tea..."
  }],
  documentation: "https://tea-api-vic-lo.herokuapp.com/",
  rating: 4.3
},

{
  id: 104,
  name: "Spices API",
  description: "Spice database with origins and uses",
  category: "food",
  endpoint: "https://spices-api.herokuapp.com/spices",
  method: "GET",
  sampleResponse: [{
    "id": 1,
    "name": "Cinnamon",
    "description": "Sweet and warm spice",
    "origin": "Sri Lanka"
  }],
  documentation: "https://spices-api.herokuapp.com/",
  rating: 4.2
},

{
  id: 105,
  name: "Nutrition Facts API",
  description: "Nutritional information for foods",
  category: "food",
  endpoint: "https://api.edamam.com/api/nutrition-data?app_id=DEMO&app_key=DEMO&ingr=1%20large%20apple",
  method: "GET",
  sampleResponse: {
    "calories": 95,
    "totalWeight": 182.0,
    "dietLabels": ["LOW_SODIUM"],
    "healthLabels": ["VEGAN", "VEGETARIAN"]
  },
  documentation: "https://developer.edamam.com/edamam-nutrition-api",
  rating: 4.8
},
{
  id: 106,
  name: "Country Flags API",
  description: "Country flags in various formats and sizes",
  category: "geography",
  endpoint: "https://flagsapi.com/US/flat/64.png",
  method: "GET",
  sampleResponse: "Flag image (PNG format)",
  documentation: "https://flagsapi.com/",
  rating: 4.7
},

{
  id: 107,
  name: "World Time API",
  description: "Time zones and current time worldwide",
  category: "geography",
  endpoint: "http://worldtimeapi.org/api/timezone/Europe/London",
  method: "GET",
  sampleResponse: {
    "timezone": "Europe/London",
    "datetime": "2023-01-01T12:00:00.000000+00:00",
    "utc_offset": "+00:00"
  },
  documentation: "http://worldtimeapi.org/",
  rating: 4.8
},

{
  id: 108,
  name: "Postcode API",
  description: "UK postcode lookup with geographic data",
  category: "geography",
  endpoint: "https://api.postcodes.io/postcodes/m32%209jg",
  method: "GET",
  sampleResponse: {
    "result": {
      "postcode": "M32 9JG",
      "quality": 1,
      "eastings": 379988,
      "northings": 396749,
      "country": "England",
      "nhs_ha": "North West"
    }
  },
  documentation: "https://postcodes.io/docs",
  rating: 4.6
},

{
  id: 109,
  name: "City Data API",
  description: "City information including population and coordinates",
  category: "geography",
  endpoint: "https://api.api-ninjas.com/v1/city?name=Seattle",
  method: "GET",
  sampleResponse: [{
    "name": "Seattle",
    "country": "US",
    "population": 753675,
    "is_capital": false,
    "latitude": 47.6038321,
    "longitude": -122.3300624
  }],
  documentation: "https://api.api-ninjas.com/api/city",
  rating: 4.5
},
{
  id: 110,
  name: "Language Detection API",
  description: "Detect language of text automatically",
  category: "geography",
  endpoint: "https://ws.detectlanguage.com/0.2/detect?q=hello%20world",
  method: "GET",
  sampleResponse: {
    "data": {
      "detections": [{
        "language": "en",
        "isReliable": false,
        "confidence": 0.43
      }]
    }
  },
  documentation: "https://detectlanguage.com/documentation",
  rating: 4.4
},
{
  id: 111,
  name: "Currency Symbols API",
  description: "Currency codes, symbols, and exchange rates",
  category: "geography",
  endpoint: "https://api.fixer.io/latest?access_key=DEMO_KEY",
  method: "GET",
  sampleResponse: {
    "success": true,
    "timestamp": 1519296206,
    "base": "EUR",
    "date": "2021-03-17",
    "rates": {"USD": 1.196745, "GBP": 0.859121}
  },
  documentation: "https://fixer.io/documentation",
  rating: 4.7
},
{
  id: 112,
  name: "Airport Codes API",
  description: "Airport information and IATA codes",
  category: "geography",
  endpoint: "https://airport-info.p.rapidapi.com/airport?iata=JFK",
  method: "GET",
  sampleResponse: {
    "name": "John F Kennedy Intl",
    "iata": "JFK",
    "icao": "KJFK",
    "city": "New York",
    "country": "United States"
  },
  documentation: "https://rapidapi.com/cometari/api/airport-info/",
  rating: 4.6
},
{
  id: 113,
  name: "Landmark Photos API",
  description: "Photos of famous landmarks worldwide",
  category: "geography",
  endpoint: "https://landmark-images-api.herokuapp.com/landmark/random",
  method: "GET",
  sampleResponse: {
    "name": "Eiffel Tower",
    "country": "France",
    "city": "Paris",
    "image_url": "https://example.com/eiffel-tower.jpg"
  },
  documentation: "https://landmark-images-api.herokuapp.com/",
  rating: 4.3
},

{
  id: 114,
  name: "Capital Cities API",
  description: "Capital cities and country information",
  category: "geography",
  endpoint: "https://restcountries.com/v3.1/capital/paris",
  method: "GET",
  sampleResponse: [{
    "name": {"common": "France"},
    "capital": ["Paris"],
    "region": "Europe",
    "population": 65273511
  }],
  documentation: "https://restcountries.com/",
  rating: 4.8
},

{
  id: 115,
  name: "World Clock API",
  description: "Current time in cities around the world",
  category: "geography",
  endpoint: "http://worldclockapi.com/api/json/est/now",
  method: "GET",
  sampleResponse: {
    "$id": "1",
    "currentDateTime": "2019-10-16T13:42-04:00",
    "utcOffset": "-04:00:00",
    "isDayLightSavingsTime": true,
    "dayOfTheWeek": "Wednesday",
    "timeZoneName": "Eastern Standard Time"
  },
  documentation: "http://worldclockapi.com/",
  rating: 4.5
},
{
  id: 116,
  name: "HTTP Status Dogs",
  description: "Dog images for HTTP status codes",
  category: "tools",
  endpoint: "https://httpstatusdogs.com/img/200.jpg",
  method: "GET",
  sampleResponse: "Dog image representing HTTP 200 status",
  documentation: "https://httpstatusdogs.com/",
  rating: 4.6
},

{
  id: 117,
  name: "Programming Quotes API",
  description: "Inspirational quotes for developers",
  category: "tools",
  endpoint: "https://programming-quotes-api.herokuapp.com/quotes/random",
  method: "GET",
  sampleResponse: {
    "_id": "5d91b45d9980192a317c8b12",
    "en": "Programs must be written for people to read, and only incidentally for machines to execute.",
    "author": "Harold Abelson",
    "id": "5d91b45d9980192a317c8b12"
  },
  documentation: "https://github.com/skolakoda/programming-quotes-api",
  rating: 4.7
},
{
  id: 118,
  name: "GitHub Zen API",
  description: "Get inspirational GitHub zen messages",
  category: "tools",
  endpoint: "https://api.github.com/zen",
  method: "GET",
  sampleResponse: "Non-blocking is better than blocking.",
  documentation: "https://docs.github.com/en/rest/meta#get-the-zen-of-github",
  rating: 4.5
},
{
  id: 119,
  name: "Developer Excuses API",
  description: "Random developer excuses for when things go wrong",
  category: "tools",
  endpoint: "https://developerexcuses.com/",
  method: "GET",
  sampleResponse: {
    "excuse": "It works on my machine"
  },
  documentation: "https://developerexcuses.com/",
  rating: 4.3
},
{
  id: 120,
  name: "Lorem Picsum API",
  description: "Placeholder images with customizable dimensions",
  category: "tools",
  endpoint: "https://picsum.photos/200/300",
  method: "GET",
  sampleResponse: "Binary image data",
  documentation: "https://picsum.photos/",
  rating: 4.8
},
{
  id: 121,
  name: "QR Server API",
  description: "Generate QR codes for any text or URL",
  category: "tools",
  endpoint: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Hello%20World",
  method: "GET",
  sampleResponse: "Binary QR code image",
  documentation: "https://goqr.me/api/",
  rating: 4.6
},
{
  id: 122,
  name: "Barcode Generator API",
  description: "Generate various types of barcodes",
  category: "tools",
  endpoint: "https://barcodeapi.org/api/128/HelloWorld",
  method: "GET",
  sampleResponse: "Binary barcode image",
  documentation: "https://barcodeapi.org/",
  rating: 4.4
},
{
  id: 123,
  name: "Random Password API",
  description: "Generate secure random passwords",
  category: "tools",
  endpoint: "https://api.api-ninjas.com/v1/passwordgenerator?length=12",
  method: "GET",
  sampleResponse: {
    "password": "Kf8#mP2nX9qR"
  },
  documentation: "https://api.api-ninjas.com/api/passwordgenerator",
  rating: 4.5
},
{
  id: 124,
  name: "Hash Generator API",
  description: "Generate MD5, SHA1, SHA256 hashes",
  category: "tools",
  endpoint: "https://api.hashify.net/hash/md5/hex?value=Hello%20World",
  method: "GET",
  sampleResponse: {
    "Digest": "b10a8db164e0754105b7a99be72e3fe5"
  },
  documentation: "https://hashify.net/",
  rating: 4.3
},
{
  id: 125,
  name: "Random Data API",
  description: "Generate random user data, addresses, and more",
  category: "tools",
  endpoint: "https://randomuser.me/api/",
  method: "GET",
  sampleResponse: {
    "results": [{
      "name": {"first": "John", "last": "Doe"},
      "email": "john.doe@example.com",
      "phone": "(555) 123-4567"
    }]
  },
  documentation: "https://randomuser.me/documentation",
  rating: 4.7
},
{
  id: 126,
  name: "Exercise Database API",
  description: "Comprehensive database of exercises with instructions",
  category: "health",
  endpoint: "https://api.api-ninjas.com/v1/exercises?muscle=biceps",
  method: "GET",
  sampleResponse: [{
    "name": "Bicep Curls",
    "type": "strength",
    "muscle": "biceps",
    "equipment": "dumbbell",
    "difficulty": "beginner",
    "instructions": "Stand with feet shoulder-width apart..."
  }],
  documentation: "https://api.api-ninjas.com/api/exercises",
  rating: 4.6
},
{
  id: 127,
  name: "Meditation Quotes API",
  description: "Peaceful and mindful quotes for meditation",
  category: "health",
  endpoint: "https://zenquotes.io/api/random",
  method: "GET",
  sampleResponse: [{
    "q": "Peace comes from within. Do not seek it without.",
    "a": "Buddha",
    "h": "<blockquote>&ldquo;Peace comes from within. Do not seek it without.&rdquo; &mdash; <footer>Buddha</footer></blockquote>"
  }],
  documentation: "https://zenquotes.io/",
  rating: 4.5
},
{
  id: 128,
  name: "Fitness Facts API",
  description: "Interesting fitness and health facts",
  category: "health",
  endpoint: "https://api.api-ninjas.com/v1/facts?limit=1",
  method: "GET",
  sampleResponse: [{
    "fact": "Regular exercise can increase your lifespan by up to 7 years."
  }],
  documentation: "https://api.api-ninjas.com/api/facts",
  rating: 4.4
},
{
  id: 129,
  name: "Nutrition API",
  description: "Get nutritional information for foods",
  category: "health",
  endpoint: "https://api.api-ninjas.com/v1/nutrition?query=apple",
  method: "GET",
  sampleResponse: [{
    "name": "apple",
    "calories": 52,
    "serving_size_g": 100,
    "fat_total_g": 0.2,
    "protein_g": 0.3,
    "carbohydrates_total_g": 14
  }],
  documentation: "https://api.api-ninjas.com/api/nutrition",
  rating: 4.7
},
{
  id: 130,
  name: "BMI Calculator API",
  description: "Calculate Body Mass Index",
  category: "health",
  endpoint: "https://api.api-ninjas.com/v1/bmi?weight=70&height=1.75",
  method: "GET",
  sampleResponse: {
    "bmi": 22.9,
    "category": "Normal weight"
  },
  documentation: "https://api.api-ninjas.com/api/bmi",
  rating: 4.3
},
{
  id: 131,
  name: "Water Intake API",
  description: "Calculate recommended daily water intake",
  category: "health",
  endpoint: "https://api.api-ninjas.com/v1/waterintake?age=30&weight=70&activity_level=moderate",
  method: "GET",
  sampleResponse: {
    "water_intake_liters": 2.5
  },
  documentation: "https://api.api-ninjas.com/api/waterintake",
  rating: 4.2
},
{
  id: 132,
  name: "Sleep Facts API",
  description: "Educational facts about sleep and rest",
  category: "health",
  endpoint: "https://api.api-ninjas.com/v1/facts?category=sleep",
  method: "GET",
  sampleResponse: [{
    "fact": "The average person spends about 26 years of their life sleeping."
  }],
  documentation: "https://api.api-ninjas.com/api/facts",
  rating: 4.4
},
{
  id: 133,
  name: "Mental Health Quotes API",
  description: "Supportive quotes for mental wellness",
  category: "health",
  endpoint: "https://type.fit/api/quotes",
  method: "GET",
  sampleResponse: [{
    "text": "The greatest revolution of our generation is the discovery that human beings, by changing the inner attitudes of their minds, can change the outer aspects of their lives.",
    "author": "William James"
  }],
  documentation: "https://type.fit/",
  rating: 4.5
},
{
  id: 134,
  name: "Yoga Poses API",
  description: "Database of yoga poses with instructions",
  category: "health",
  endpoint: "https://yoga-api-nzy4.onrender.com/v1/poses",
  method: "GET",
  sampleResponse: [{
    "id": 1,
    "english_name": "Mountain Pose",
    "sanskrit_name_adapted": "Tadasana",
    "pose_description": "Stand tall with feet hip-width apart...",
    "pose_benefits": "Improves posture, strengthens thighs..."
  }],
  documentation: "https://yoga-api-nzy4.onrender.com/",
  rating: 4.6
},
{
  id: 135,
  name: "Habit Tracker API",
  description: "Track and manage daily habits",
  category: "health",
  endpoint: "https://api.habitica.com/api/v3/user",
  method: "GET",
  sampleResponse: {
    "success": true,
    "data": {
      "habits": [],
      "dailys": [],
      "todos": []
    }
  },
  documentation: "https://habitica.com/apidoc/",
  rating: 4.4
},
{
  id: 136,
  name: "Alpha Vantage Stock API",
  description: "Real-time and historical stock market data",
  category: "finance",
  endpoint: "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=demo",
  method: "GET",
  sampleResponse: {
    "Global Quote": {
      "01. symbol": "AAPL",
      "05. price": "150.00",
      "09. change": "+2.50",
      "10. change percent": "+1.69%"
    }
  },
  documentation: "https://www.alphavantage.co/documentation/",
  rating: 4.7
},
{
  id: 137,
  name: "CoinGecko API",
  description: "Cryptocurrency prices and market data",
  category: "finance",
  endpoint: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
  method: "GET",
  sampleResponse: {
    "bitcoin": {
      "usd": 45000
    }
  },
  documentation: "https://www.coingecko.com/en/api",
  rating: 4.8
},
{
  id: 138,
  name: "Economic Indicators API",
  description: "Access to economic data and indicators",
  category: "finance",
  endpoint: "https://api.stlouisfed.org/fred/series/observations?series_id=GDP&api_key=demo",
  method: "GET",
  sampleResponse: {
    "observations": [{
      "date": "2023-01-01",
      "value": "25000.0"
    }]
  },
  documentation: "https://fred.stlouisfed.org/docs/api/",
  rating: 4.6
},
{
  id: 139,
  name: "Company Logo API",
  description: "Get company logos by domain name",
  category: "business",
  endpoint: "https://logo.clearbit.com/google.com",
  method: "GET",
  sampleResponse: "Binary image data",
  documentation: "https://clearbit.com/logo",
  rating: 4.5
},
{
  id: 140,
  name: "Business Name Generator API",
  description: "Generate creative business names",
  category: "business",
  endpoint: "https://api.api-ninjas.com/v1/company?name=tech",
  method: "GET",
  sampleResponse: [{
    "name": "TechFlow Innovations"
  }],
  documentation: "https://api.api-ninjas.com/api/company",
  rating: 4.3
},
{
  id: 141,
  name: "Invoice Generator API",
  description: "Generate professional invoices",
  category: "business",
  endpoint: "https://invoice-generator.com/",
  method: "POST",
  sampleResponse: {
    "url": "https://invoice-generator.com/your_invoice.pdf"
  },
  documentation: "https://github.com/Invoiced/invoice-generator-api",
  rating: 4.4
},
{
  id: 142,
  name: "QR Payment Generator",
  description: "Generate QR codes for payments",
  category: "finance",
  endpoint: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PAY:USD:100",
  method: "GET",
  sampleResponse: "Binary QR code image",
  documentation: "https://goqr.me/api/",
  rating: 4.2
},
{
  id: 143,
  name: "Tax Calculator API",
  description: "Calculate tax amounts for different regions",
  category: "finance",
  endpoint: "https://api.api-ninjas.com/v1/taxes?income=50000&state=CA",
  method: "GET",
  sampleResponse: {
    "state": "CA",
    "total_tax": 12500,
    "federal_tax": 8000,
    "state_tax": 4500
  },
  documentation: "https://api.api-ninjas.com/api/taxes",
  rating: 4.3
},
{
  id: 144,
  name: "Interest Calculator API",
  description: "Calculate compound and simple interest",
  category: "finance",
  endpoint: "https://api.api-ninjas.com/v1/interestcalculator?principal=1000&rate=5&time=2",
  method: "GET",
  sampleResponse: {
    "total_amount": 1102.50,
    "total_interest": 102.50
  },
  documentation: "https://api.api-ninjas.com/api/interestcalculator",
  rating: 4.1
},
{
  id: 145,
  name: "Expense Categories API",
  description: "Categorize expenses automatically",
  category: "finance",
  endpoint: "https://api.api-ninjas.com/v1/categories?expense=groceries",
  method: "GET",
  sampleResponse: {
    "category": "Food & Dining",
    "subcategory": "Groceries"
  },
  documentation: "https://api.api-ninjas.com/api/categories",
  rating: 4.0
},
{
  id: 146,
  name: "Math Problem Generator",
  description: "Generate math problems of various difficulties",
  category: "education",
  endpoint: "https://api.api-ninjas.com/v1/mathproblem?difficulty=easy",
  method: "GET",
  sampleResponse: {
    "problem": "What is 15 + 23?",
    "answer": 38,
    "difficulty": "easy"
  },
  documentation: "https://api.api-ninjas.com/api/mathproblem",
  rating: 4.5
},
{
  id: 147,
  name: "Language Learning API",
  description: "Common phrases and vocabulary in different languages",
  category: "education",
  endpoint: "https://api.mymemory.translated.net/get?q=hello&langpair=en|es",
  method: "GET",
  sampleResponse: {
    "responseData": {
      "translatedText": "hola"
    }
  },
  documentation: "https://mymemory.translated.net/doc/spec.php",
  rating: 4.4
},
{
  id: 148,
  name: "Historical Events API",
  description: "Facts about historical events by date",
  category: "education",
  endpoint: "https://api.api-ninjas.com/v1/historicalevents?year=1969",
  method: "GET",
  sampleResponse: [{
    "year": "1969",
    "event": "Apollo 11 lands on the moon"
  }],
  documentation: "https://api.api-ninjas.com/api/historicalevents",
  rating: 4.6
},
{
  id: 149,
  name: "Science Quiz API",
  description: "Science trivia questions and answers",
  category: "education",
  endpoint: "https://opentdb.com/api.php?amount=1&category=17",
  method: "GET",
  sampleResponse: {
    "results": [{
      "question": "What is the chemical symbol for gold?",
      "correct_answer": "Au",
      "incorrect_answers": ["Go", "Gd", "Ag"]
    }]
  },
  documentation: "https://opentdb.com/api_config.php",
  rating: 4.7
},
{
  id: 150,
  name: "Random Wikipedia API",
  description: "Get random Wikipedia articles",
  category: "education",
  endpoint: "https://en.wikipedia.org/api/rest_v1/page/random/summary",
  method: "GET",
  sampleResponse: {
    "title": "Solar System",
    "extract": "The Solar System is the gravitationally bound system...",
    "content_urls": {
      "desktop": {
        "page": "https://en.wikipedia.org/wiki/Solar_System"
      }
    }
  },
  documentation: "https://www.mediawiki.org/wiki/API:Main_page",
  rating: 4.8
},
{
  id: 151,
  name: "Etymology API",
  description: "Word origins and etymology information",
  category: "education",
  endpoint: "https://api.etymonline.com/word/computer",
  method: "GET",
  sampleResponse: {
    "word": "computer",
    "origin": "1640s, 'one who calculates,' agent noun from compute...",
    "first_known_use": "1640"
  },
  documentation: "https://www.etymonline.com/",
  rating: 4.3
},
{
  id: 152,
  name: "LibreTranslate API",
  description: "Free and open source translation API",
  category: "education",
  endpoint: "https://libretranslate.de/translate",
  method: "POST",
  sampleResponse: {
    "translatedText": "Hola mundo"
  },
  documentation: "https://libretranslate.com/docs/",
  rating: 4.5
},
{
  id: 153,
  name: "Academic Papers API",
  description: "Search academic papers and research",
  category: "education",
  endpoint: "https://api.crossref.org/works?query=artificial+intelligence",
  method: "GET",
  sampleResponse: {
    "message": {
      "items": [{
        "title": ["Artificial Intelligence: A Modern Approach"],
        "author": [{"given": "Stuart", "family": "Russell"}]
      }]
    }
  },
  documentation: "https://github.com/CrossRef/rest-api-doc",
  rating: 4.6
},
{
  id: 154,
  name: "Study Tips API",
  description: "Educational study tips and techniques",
  category: "education",
  endpoint: "https://api.quotegarden.com/api/v3/quotes?category=education",
  method: "GET",
  sampleResponse: {
    "data": [{
      "quoteText": "Education is the most powerful weapon which you can use to change the world.",
      "quoteAuthor": "Nelson Mandela"
    }]
  },
  documentation: "https://quotegarden.com/api/",
  rating: 4.2
},
{
  id: 155,
  name: "Flash Cards API",
  description: "Create and manage digital flash cards",
  category: "education",
  endpoint: "https://api.quizlet.com/2.0/sets",
  method: "GET",
  sampleResponse: {
    "sets": [{
      "title": "Spanish Vocabulary",
      "term_count": 50,
      "lang_terms": "en",
      "lang_definitions": "es"
    }]
  },
  documentation: "https://quizlet.com/api/2.0/docs/",
  rating: 4.4
},
{
  id: 156,
  name: "Color Name API",
  description: "Get names for hex color codes",
  category: "arts",
  endpoint: "https://www.thecolorapi.com/id?hex=FF5733",
  method: "GET",
  sampleResponse: {
    "hex": {"value": "#FF5733"},
    "name": {"value": "Orange Red"},
    "rgb": {"r": 255, "g": 87, "b": 51}
  },
  documentation: "https://www.thecolorapi.com/docs",
  rating: 4.7
},
{
  id: 157,
  name: "Art Generator API",
  description: "Generate random art prompts and ideas",
  category: "arts",
  endpoint: "https://api.api-ninjas.com/v1/artprompt",
  method: "GET",
  sampleResponse: {
    "prompt": "A surreal landscape with floating islands at sunset"
  },
  documentation: "https://api.api-ninjas.com/api/artprompt",
  rating: 4.5
},
{
  id: 158,
  name: "Metropolitan Museum API",
  description: "Access to Met Museum's collection",
  category: "arts",
  endpoint: "https://collectionapi.metmuseum.org/public/collection/v1/objects/45734",
  method: "GET",
  sampleResponse: {
    "objectID": 45734,
    "title": "The Starry Night",
    "artistDisplayName": "Vincent van Gogh",
    "medium": "Oil on canvas",
    "objectDate": "1889"
  },
  documentation: "https://metmuseum.github.io/",
  rating: 4.8
},
{
  id: 159,
  name: "Classical Music API",
  description: "Information about classical composers and pieces",
  category: "arts",
  endpoint: "https://api.openopus.org/composer/list/pop.json",
  method: "GET",
  sampleResponse: {
    "composers": [{
      "id": "87",
      "name": "Ludwig van Beethoven",
      "birth": "1770-12-17",
      "death": "1827-03-26"
    }]
  },
  documentation: "https://openopus.org/api.html",
  rating: 4.6
},
{
  id: 160,
  name: "Poetry Generator API",
  description: "Generate random poems and verses",
  category: "arts",
  endpoint: "https://poetrydb.org/random",
  method: "GET",
  sampleResponse: [{
    "title": "The Road Not Taken",
    "author": "Robert Frost",
    "lines": ["Two roads diverged in a yellow wood..."],
    "linecount": "20"
  }],
  documentation: "https://poetrydb.org/index.html",
  rating: 4.5
},
{
  id: 161,
  name: "Famous Paintings API",
  description: "Database of famous paintings and artists",
  category: "arts",
  endpoint: "https://api.artic.edu/api/v1/artworks/search?q=monet",
  method: "GET",
  sampleResponse: {
    "data": [{
      "id": 16568,
      "title": "Water Lilies",
      "artist_display": "Claude Monet",
      "date_display": "1906"
    }]
  },
  documentation: "https://api.artic.edu/docs/",
  rating: 4.7
},
{
  id: 162,
  name: "Architecture Styles API",
  description: "Information about architectural styles and periods",
  category: "arts",
  endpoint: "https://api.api-ninjas.com/v1/architecture?style=gothic",
  method: "GET",
  sampleResponse: {
    "style": "Gothic",
    "period": "12th-16th century",
    "characteristics": ["Pointed arches", "Flying buttresses", "Large windows"]
  },
  documentation: "https://api.api-ninjas.com/api/architecture",
  rating: 4.3
},
{
  id: 163,
  name: "Cultural Events API",
  description: "Information about cultural events and festivals",
  category: "arts",
  endpoint: "https://api.culturalcalendar.com/events?city=paris",
  method: "GET",
  sampleResponse: {
    "events": [{
      "name": "Louvre Night Tour",
      "date": "2024-07-15",
      "venue": "Louvre Museum",
      "category": "Museum"
    }]
  },
  documentation: "https://culturalcalendar.com/api/",
  rating: 4.4
},
{
  id: 164,
  name: "Art Movements API",
  description: "Information about art movements and their characteristics",
  category: "arts",
  endpoint: "https://api.artmovements.com/movement/impressionism",
  method: "GET",
  sampleResponse: {
    "name": "Impressionism",
    "period": "1860s-1880s",
    "description": "A movement characterized by loose brushwork and light...",
    "key_artists": ["Claude Monet", "Pierre-Auguste Renoir"]
  },
  documentation: "https://artmovements.com/api/",
  rating: 4.5
},
{
  id: 165,
  name: "Design Inspiration API",
  description: "Get design inspiration and color palettes",
  category: "arts",
  endpoint: "https://api.dribbble.com/v2/shots",
  method: "GET",
  sampleResponse: {
    "shots": [{
      "id": 12345,
      "title": "Modern Website Design",
      "images": {
        "normal": "https://cdn.dribbble.com/shot.png"
      },
      "tags": ["web", "modern", "clean"]
    }]
  },
  documentation: "https://developer.dribbble.com/v2/",
  rating: 4.6
},
{
  id: 166,
  name: "Deezer Search",
  description: "Search for tracks, artists, and albums on the Deezer platform.",
  category: "music",
  endpoint: "https://api.deezer.com/search?q=daft_punk",
  method: "GET",
  sampleResponse: {
    "data": [{
      "id": 3135556,
      "title": "Harder, Better, Faster, Stronger",
      "artist": { "name": "Daft Punk" }
    }]
  },
  documentation: "https://developers.deezer.com/api",
  rating: 4.8
},
{
  id: 167,
  name: "MusicBrainz Search",
  description: "Open music encyclopedia that collects music metadata and makes it available to the public.",
  category: "music",
  endpoint: "https://musicbrainz.org/ws/2/artist/?query=nirvana&fmt=json",
  method: "GET",
  sampleResponse: {
    "artists": [{
      "id": "5b11f4ce-a62d-471e-81fc-a69a8278c7da",
      "name": "Nirvana",
      "country": "US",
      "disambiguation": "90s US grunge band"
    }]
  },
  documentation: "https://musicbrainz.org/doc/MusicBrainz_API",
  rating: 4.9
},
{
  id: 168,
  name: "Song Lyrics",
  description: "A simple and easy-to-use API to retrieve the lyrics of a song.",
  category: "music",
  endpoint: "https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime",
  method: "GET",
  sampleResponse: {
    "lyrics": "\r\nTurn your magic on, to me she'd say\r\nEverything you want's a dream away..."
  },
  documentation: "https://lyrics.ovh/",
  rating: 4.6
},
{
  id: 169,
  name: "Open Opus (Classical)",
  description: "A database of classical music, composers, and works.",
  category: "music",
  endpoint: "https://api.openopus.org/composer/list/pop.json",
  method: "GET",
  sampleResponse: {
    "composers": [{
      "id": "87",
      "name": "Ludwig van Beethoven",
      "complete_name": "Ludwig van Beethoven"
    }]
  },
  documentation: "https://openopus.org/api.html",
  rating: 4.7
},
{
  id: 170,
  name: "TheAudioDB Artist Info",
  description: "Music information and artwork. (Uses a free test API key).",
  category: "music",
  endpoint: "https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay",
  method: "GET",
  sampleResponse: {
    "artists": [{
      "strArtist": "Coldplay",
      "strGenre": "Alternative Rock",
      "strBiographyEN": "Coldplay are a British rock band formed in London in 1996."
    }]
  },
  documentation: "https://www.theaudiodb.com/api_guide.php",
  rating: 4.5
},
{
  id: 171,
  name: "NYT Fiction Bestsellers",
  description: "Get the current New York Times Paperback Fiction bestseller list.",
  category: "books",
  endpoint: "https://api.nytimes.com/svc/books/v3/lists/current/paperback-mass-market-fiction.json?api-key=your_demo_api_key",
  method: "GET",
  sampleResponse: {
    "results": {
      "list_name": "Mass Market Paperback Fiction",
      "books": [{
        "rank": 1,
        "title": "A GENTLEMAN IN MOSCOW",
        "author": "Amor Towles"
      }]
    }
  },
  documentation: "https://developer.nytimes.com/docs/books-product/1/overview",
  rating: 4.8
},
{
  id: 172,
  name: "Open Library (Fiction)",
  description: "Search for fiction books and authors from the Open Library.",
  category: "books",
  endpoint: "https://openlibrary.org/subjects/science_fiction.json?limit=5",
  method: "GET",
  sampleResponse: {
    "key": "/subjects/science_fiction",
    "name": "Science fiction",
    "works": [{
      "key": "/works/OL45804W",
      "title": "Dune",
      "authors": [{ "name": "Frank Herbert" }]
    }]
  },
  documentation: "https://openlibrary.org/developers/api",
  rating: 4.9
},
{
  id: 173,
  name: "Faker API (Books)",
  description: "Generate fake book data for testing and placeholders.",
  category: "books",
  endpoint: "https://fakerapi.it/api/v1/books?_quantity=1",
  method: "GET",
  sampleResponse: {
    "status": "OK",
    "code": 200,
    "data": [{
      "title": "The Lord of the Rings",
      "author": "J. R. R. Tolkien",
      "genre": "Fantasy",
      "description": "The future of civilization rests in the fate of the One Ring..."
    }]
  },
  documentation: "https://fakerapi.it/en",
  rating: 4.5
},
];