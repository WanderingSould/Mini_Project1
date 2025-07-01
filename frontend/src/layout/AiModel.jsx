// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const config = {
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.5-pro-preview-05-06';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel image URL, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image URL, Geo Coordinates, ticket Pricing, Time to travel each of the location for 3 days with each day plan with best time to visit in JSON format.`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Defining the Core Elements**

I've pinpointed the key aspects: Las Vegas, 3 days, a couple, and a budget-conscious approach. This groundwork forms the foundation for my itinerary design. I'm focusing on crafting a memorable experience without extravagant spending.


**Mapping Out Requirements**

I've identified the key parameters, which include the location, duration, audience, and budget, all within the JSON output format. I'm prioritizing cost-effective options, such as off-Strip hotels and free or low-cost activities. The goal is to craft a well-structured JSON response with comprehensive details for the itinerary. The challenge is to create a delightful experience on a budget.


**Refining Itinerary Options**

I'm now zeroing in on specific hotel options, prioritizing cost-effectiveness and accessibility. I've narrowed down a few viable choices and am gathering preliminary data for each, focusing on pricing, general location, and basic amenities. Next, I'll flesh out day-by-day activity suggestions, balancing well-known attractions with budget-friendly alternatives that would appeal to a couple. I'm aiming to offer several choices within each day to customize the itinerary to fit a couple's specific preferences.


**Prioritizing & Structuring**

I'm now focusing on arranging the itinerary logically. The priority is presenting information concisely within the JSON format. I'm streamlining hotel data and developing a detailed day-by-day plan with clear place descriptions, considering time and cost factors. The aim is a comprehensive, organized response that directly addresses the prompt's requirements.


**Developing the Framework**

I've crafted a comprehensive framework for the itinerary, solidifying the hotel options and day-by-day plan. Emphasis is on cost-effective hotels and free attractions. I'm focusing on crafting concise, informative descriptions. My priority now is ensuring the JSON output format and data structure are accurate.


**Organizing Data & Content**

I'm now arranging the gathered data into a structured JSON format. I'm focusing on "hotelOptions" and an "itinerary" section, ensuring all the required details are included. The key is now ensuring each itinerary item has a clear description, location details, and estimate of time required. I'm prioritizing accuracy and clarity.


**Developing the Framework**

I've refined the hotel options and itinerary details, with an emphasis on cost-effective choices that are suitable for a couple seeking a budget-friendly experience. I'm focusing now on the final formatting and ensuring clear, concise descriptions. The goal is to deliver a comprehensive, structured JSON output.


**Finalizing JSON Structure**

I'm now fully immersed in the final formatting, ensuring the JSON output is flawless. I'm double-checking bracket placement, commas, and data types, striving for complete accuracy. The JSON structure is clear, and the data is well-organized. My focus is now on ensuring it meets all requirements and that it is easily usable by the expert.


**Organizing the Information**

I'm now arranging the data in a structured JSON format, ensuring all requested fields are populated. I'm focusing on providing concise descriptions and accurate location details for each hotel and activity. The goal is to present a well-organized and easily understandable itinerary.


`,
        },
        {
          text: `\`\`\`json
{
  "tripName": "Las Vegas on a Budget for Couples",
  "duration": "3 Days",
  "travelerType": "Couple",
  "budget": "Cheap",
  "hotelOptions": [
    {
      "hotelName": "Ellis Island Hotel Casino & Brewery",
      "hotelAddress": "4178 Koval Ln, Las Vegas, NV 89109, USA",
      "price": "$50 - $150 per night (varies greatly by season and day of week)",
      "hotelImageURL": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/e3/96/54/ellis-island-hotel.jpg?w=1200&h=-1&s=1",
      "geoCoordinates": {
        "latitude": 36.1142,
        "longitude": -115.1648
      },
      "rating": "4.0/5 (TripAdvisor)",
      "description": "Known for its great value, on-site brewery, popular karaoke, and affordable dining options. It's a short walk or ride to the Strip."
    },
    {
      "hotelName": "The LINQ Hotel + Experience",
      "hotelAddress": "3535 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
      "price": "$60 - $180 per night (can be pricier, but good deals often available, especially mid-week)",
      "hotelImageURL": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e5/31/c7/the-linq-hotel-experience.jpg?w=1200&h=-1&s=1",
      "geoCoordinates": {
        "latitude": 36.1178,
        "longitude": -115.1709
      },
      "rating": "4.0/5 (TripAdvisor)",
      "description": "Centrally located on the Strip with modern rooms. Home to the High Roller Observation Wheel and LINQ Promenade with many dining and entertainment options. Look for promotional rates."
    },
    {
      "hotelName": "Excalibur Hotel & Casino",
      "hotelAddress": "3850 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
      "price": "$40 - $160 per night (one of the more consistently budget-friendly Strip hotels)",
      "hotelImageURL": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/01/73/6c/excalibur-hotel-casino.jpg?w=1200&h=-1&s=1",
      "geoCoordinates": {
        "latitude": 36.0986,
        "longitude": -115.1756
      },
      "rating": "3.5/5 (TripAdvisor)",
      "description": "A castle-themed hotel on the south end of the Strip. Offers basic, affordable rooms, a large casino, and family-friendly entertainment. Connected by tram to Luxor and Mandalay Bay."
    },
    {
      "hotelName": "Downtown Grand Hotel & Casino",
      "hotelAddress": "206 N 3rd St, Las Vegas, NV 89101, USA",
      "price": "$55 - $170 per night (good value for Downtown)",
      "hotelImageURL": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7b/c5/1c/exterior.jpg?w=1200&h=-1&s=1",
      "geoCoordinates": {
        "latitude": 36.1707,
        "longitude": -115.1414
      },
      "rating": "4.0/5 (TripAdvisor)",
      "description": "Located in Downtown Las Vegas, a short walk from Fremont Street Experience. Offers modern rooms, a rooftop pool (Citrus Grand Pool Deck), and good dining options. Generally more affordable than Strip hotels."
    }
  ],
  "itinerary": {
    "day1": {
      "theme": "Strip Arrival & South/Central Exploration",
      "bestTimeToVisitOverall": "Late afternoon to evening for cooler temperatures and lights.",
      "activities": [
        {
          "placeName": "Welcome to Fabulous Las Vegas Sign",
          "placeDetails": "Iconic photo opportunity. There's usually a line, but it moves quickly. Free parking available.",
          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Las_Vegas_Sign.jpg/1280px-Las_Vegas_Sign.jpg",
          "geoCoordinates": {
            "latitude": 36.0820,
            "longitude": -115.1728
          },
          "ticketPricing": "Free",
          "timeToTravelFromPrevious": "N/A (Start of day or travel from airport/hotel)",
          "estimatedDuration": "30-45 minutes (including wait and photos)",
          "bestTimeToVisit": "Morning to avoid crowds and heat, or dusk for nice lighting."
        },
        {
          "placeName": "Explore South Strip Hotels & Window Shopping",
          "placeDetails": "Walk through themed hotels like Luxor (pyramid, sphinx), Excalibur (castle), New York-New York (mini NYC skyline). Enjoy the architecture and atmosphere. Grab a cheap lunch at a food court (e.g., Excalibur or MGM Grand).",
          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/New_York_New_York_Hotel_and_Casino_%28Las_Vegas%29.jpg/1280px-New_York_New_York_Hotel_and_Casino_%28Las_Vegas%29.jpg",
          "geoCoordinates": {
            "latitude": 36.0997,
            "longitude": -115.1745
          },
          "ticketPricing": "Free (unless you shop or dine)",
          "timeToTravelFromPrevious": "15-20 minutes walk/bus from Vegas Sign, or direct from hotel",
          "estimatedDuration": "2-3 hours",
          "bestTimeToVisit": "Anytime, but afternoons can be busy."
        },
        {
          "placeName": "Bellagio Conservatory & Botanical Gardens",
          "placeDetails": "Stunning indoor garden display that changes seasonally. Absolutely free and breathtaking.",
          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bellagio_Conservatory_Spring_2019.jpg/1280px-Bellagio_Conservatory_Spring_2019.jpg",
          "geoCoordinates": {
            "latitude": 36.1130,
            "longitude": -115.1766
          },
          "ticketPricing": "Free",
          "timeToTravelFromPrevious": "20-30 minutes walk or 10 min bus ride from New York-New York area",
          "estimatedDuration": "45-60 minutes",
          "bestTimeToVisit": "Anytime, but less crowded on weekday mornings."
        },
        {
          "placeName": "Fountains of Bellagio Show",
          "placeDetails": "Iconic water show choreographed to music. Multiple shows daily, more frequent in the evenings.",
          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fountains_of_Bellagio_2006_2.JPG/1280px-Fountains_of_Bellagio_2006_2.JPG",
          "geoCoordinates": {
            "latitude": 36.1126,
            "longitude": -115.1740
          },
          "ticketPricing": "Free",
          "timeToTravelFromPrevious": "Located at Bellagio, no extra travel time.",
          "estimatedDuration": "15 minutes per show",
          "bestTimeToVisit": "Evening (shows every 15 mins after 8 PM, every 30 mins before)."
        },
        {
          "placeName": "LINQ Promenade Stroll & Window Shopping",
          "placeDetails": "Open-air retail, dining, and entertainment district. Good for people-watching. Maybe grab a cheap drink or snack. View the High Roller from below.",
          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/The_LINQ_Hotel_%26_Casino_Promenade.jpg/1280px-The_LINQ_Hotel_%26_Casino_Promenade.jpg",
          "geoCoordinates": {
            "latitude": 36.1178,
            "longitude": -115.1709
          },
          "ticketPricing": "Free (High Roller observation wheel costs extra, approx $25-$40)",
          "timeToTravelFromPrevious": "10-15 minutes walk from Bellagio",
          "estimatedDuration": "1-2 hours",
          "bestTimeToVisit": "Evening for lively atmosphere and lights."
        },
        {
          "placeName": "Budget Dinner",
          "placeDetails": "Consider Ocean One Bar & Grille (Miracle Mile Shops) for $5.99 lunch specials (often extended), Ellis Island BBQ for affordable ribs, or In-N-Out Burger near LINQ.",
          "placeImageURL": "https://s3-media0.fl.yelpcdn.com/bphoto/vC3H_mI0xQ-5q0V9V1x_wA/o.jpg",
          "geoCoordinates": {
            "latitude": 36.1178,
            "longitude": -115.1709
          },
          "ticketPricing": "$10-$20 per person",
          "timeToTravelFromPrevious": "Varies, short walk",
          "estimatedDuration": "1 hour",
          "bestTimeToVisit": "Dinner time"
        }
      ]
    },
    "day2": {
      "theme": "Downtown Vegas & North Strip Wonders",
      "bestTimeToVisitOverall": "Morning for Downtown, evening for Fremont Street light show and Strip.",
      "activities": [
        {
          "placeName": "Downtown Container Park",
          "placeDetails": "Unique open-air shopping center and park made of shipping containers. Features boutique shops, eateries, and a kids' play area with a giant treehouse slide (The Mantis sculpture at entrance shoots fire at night).",
          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Downtown_Container_Park_Entrance_Las_Vegas.jpg/1024px-Downtown_Container_Park_Entrance_Las_Vegas.jpg",
          "geoCoordinates": {
            "latitude": 36.1679,
            "longitude": -115.1367
          },
          "ticketPricing": "Free to enter",
          "timeToTravelFromPrevious": "20-30 minutes by Deuce Bus from the Strip to Downtown.",
          "estimatedDuration": "1-2 hours",
          "bestTimeToVisit": "Late morning or afternoon."
        },
        {
          "placeName": "Fremont Street Experience (Daytime)",
          "placeDetails": "Explore historic Downtown Las Vegas. See classic casinos, street performers, and souvenir shops. Quieter during the day.",
          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Fremont_Street_Experience%2C_Las_Vegas.jpg/1280px-Fremont_Street_Experience%2C_Las_Vegas.jpg",
          "geoCoordinates": {
            "latitude": 36.1705,
            "longitude": -115.1446
          },
          "ticketPricing": "Free",
          "timeToTravelFromPrevious": "5-10 minutes walk from Container Park.",
          "estimatedDuration": "1-2 hours",
          "bestTimeToVisit": "Late morning for fewer crowds."
        },
        {
          "placeName": "Budget Lunch Downtown",
          "placeDetails": "Many cheap eats. Consider Evel Pie for pizza, White Castle, or casino cafe specials.",
          "placeImageURL": "https://s3-media0.fl.yelpcdn.com/bphoto/gM-sYc_QOa0jQ6n9gR1U7Q/o.jpg",
          "geoCoordinates": {
            "latitude": 36.1700,
            "longitude": -115.1430
          },
          "ticketPricing": "$10-$15 per person",
          "timeToTravelFromPrevious": "Short walk",
          "estimatedDuration": "1 hour",
          "bestTimeToVisit": "Lunchtime"
        },
        {
          "placeName": "Explore The Venetian & Palazzo (Grand Canal Shoppes)",
          "placeDetails": "Walk through the stunning replicas of Venice, complete with canals, gondolas (expensive to ride, free to watch), and Streetmosphere performers. Window shopping is free!",
          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Grand_Canal_Shoppes_interior.jpg/1280px-Grand_Canal_Shoppes_interior.jpg",
          "geoCoordinates": {
            "latitude": 36.1212,
            "longitude": -115.1697
          },
          "ticketPricing": "Free (Gondola rides are approx $39+ per person)",
          "timeToTravelFromPrevious": "20-30 minutes by Deuce Bus from Downtown to Venetian/Palazzo.",
          "estimatedDuration": "2-3 hours",
          "bestTimeToVisit": "Afternoon to early evening."
        },
        {
          "placeName": "Mirage Volcano Show",
          "placeDetails": "A classic free Vegas spectacle with fire, water, and music. Check showtimes as they can vary.",
          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mirage_Volcano_Show.jpg/1280px-Mirage_Volcano_Show.jpg",
          "geoCoordinates": {
            "latitude": 36.1211,
            "longitude": -115.1741
          },
          "ticketPricing": "Free",
          "timeToTravelFromPrevious": "5-10 minutes walk from The Venetian.",
          "estimatedDuration": "15 minutes per show",
          "bestTimeToVisit": "Evening, typically on the hour from 7 PM to 11 PM (verify schedule)."
        },
        {
          "placeName": "Fremont Street Experience (Evening Light Show)",
          "placeDetails": "Return to Downtown for the Viva Vision light show on the massive overhead screen, live music on multiple stages, and vibrant atmosphere. (Can swap with Mirage Volcano if preferred to stay on Strip for evening).",
          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Fremont_Street_Experience_Viva_Vision_Light_Show.jpg/1280px-Fremont_Street_Experience_Viva_Vision_Light_Show.jpg",
          "geoCoordinates": {
            "latitude": 36.1705,
            "longitude": -115.1446
          },
          "ticketPricing": "Free",
          "timeToTravelFromPrevious": "20-30 minutes by Deuce Bus from The Mirage area.",
          "estimatedDuration": "2-3 hours",
          "bestTimeToVisit": "Evenings, shows typically hourly from 6 PM."
        }
      ]
    },
    "day3": {
      "theme": "Unique Vegas & Sweet Departure",
      "bestTimeToVisitOverall": "Morning to early afternoon.",
      "activities": [
        {
          "placeName": "Ethel M Chocolates Factory & Botanical Cactus Garden",
          "placeDetails": "Free self-guided tour to see chocolates being made, plus free samples. Adjoining is a large, beautiful botanical cactus garden, one of Nevada's largest.",
          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Ethel_M_Chocolate_Factory_Cactus_Garden.JPG/1280px-Ethel_M_Chocolate_Factory_Cactus_Garden.JPG",
          "geoCoordinates": {
            "latitude": 36.0819,
            "longitude": -115.0500
          },
          "ticketPricing": "Free (chocolate purchases are extra)",
          "timeToTravelFromPrevious": "30-40 minutes by rideshare/taxi (bus options are lengthy). This is the most 'off-path' budget item, consider if transport cost fits budget. Alternative: Pinball Hall of Fame.",
          "estimatedDuration": "1.5-2.5 hours (including travel)",
          "bestTimeToVisit": "Morning or early afternoon."
        },
        {
          "placeName": "Pinball Hall of Fame (Alternative to Ethel M or if time permits)",
          "placeDetails": "A museum featuring an extensive collection of pinball machines from various eras, all playable. Pay per game, very affordable fun.",
          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pinball_Hall_of_Fame_Las_Vegas.jpg/1280px-Pinball_Hall_of_Fame_Las_Vegas.jpg",
          "geoCoordinates": {
            "latitude": 36.0900,
            "longitude": -115.1700
          },
          "ticketPricing": "Free to enter, pay per game (25c to $1 per game)",
          "timeToTravelFromPrevious": "15-20 minutes by bus/rideshare from most Strip hotels.",
          "estimatedDuration": "1-2 hours",
          "bestTimeToVisit": "Anytime."
        },
        {
          "placeName": "Casual Lunch & Last Minute Souvenirs",
          "placeDetails": "Grab a quick, cheap lunch near your hotel or on the Strip. Many souvenir shops offer affordable Vegas mementos. Try spots like Walgreens or CVS for cheaper snacks/drinks/souvenirs than dedicated gift shops.",
          "placeImageURL": "https://www.reviewjournal.com/wp-content/uploads/2019/10/12871616_web1_MERCH-OCT15-19BT04.jpg?crop=1",
          "geoCoordinates": {
            "latitude": 36.1149,
            "longitude": -115.1723
          },
          "ticketPricing": "$10-$20 per person for lunch",
          "timeToTravelFromPrevious": "Varies depending on previous activity.",
          "estimatedDuration": "1.5-2 hours",
          "bestTimeToVisit": "Early afternoon."
        },
        {
          "placeName": "Relax by the Pool (Hotel permitting)",
          "placeDetails": "If your hotel has a decent pool and time allows before heading to the airport, enjoy some downtime and soak up the Vegas sun. Free if staying at the hotel.",
          "placeImageURL": "https://media.cntraveler.com/photos/625470040702ce747f16f52a/16:9/w_2560%2Cc_limit/Las%2520Vegas%2520Pools_Park%2520MGM%2520Pools_Photo%2520by%2520Jeff%2520Green_MGMPR032.jpeg",
          "geoCoordinates": {
            "latitude": "Varies by hotel",
            "longitude": "Varies by hotel"
          },
          "ticketPricing": "Free (for hotel guests)",
          "timeToTravelFromPrevious": "At hotel",
          "estimatedDuration": "1-2 hours",
          "bestTimeToVisit": "Afternoon before departure."
        },
        {
          "placeName": "Departure",
          "placeDetails": "Head to McCarran International Airport (LAS). Allow ample time for travel, check-in, and security.",
          "placeImageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/McCarran_International_Airport_Terminal_3_exterior.jpg/1280px-McCarran_International_Airport_Terminal_3_exterior.jpg",
          "geoCoordinates": {
            "latitude": 36.0840,
            "longitude": -115.1537
          },
          "ticketPricing": "N/A",
          "timeToTravelFromPrevious": "20-30 minutes from Strip/Downtown by rideshare/taxi. Longer by shuttle/bus.",
          "estimatedDuration": "N/A",
          "bestTimeToVisit": "N/A"
        }
      ]
    },
    "budgetTips": [
      "Utilize the Deuce or RTC bus system for cheap transportation along the Strip and to Downtown. A 24-hour pass is cost-effective.",
      "Look for happy hour deals for food and drinks.",
      "Eat at food courts, off-strip eateries, or grab groceries for some meals/snacks.",
      "Sign up for players cards at casinos, even if you don't gamble much, as they can offer discounts or free play.",
      "Many hotels have resort fees; factor these into your budget. The suggested hotels typically have lower resort fees.",
      "Stay hydrated by carrying a reusable water bottle and refilling it. Bottled water on the Strip is expensive.",
      "Take advantage of free entertainment: street performers, window shopping, people-watching, and free shows like Bellagio Fountains and Mirage Volcano."
    ]
  }
}
\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

main();
