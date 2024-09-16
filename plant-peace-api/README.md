# API Documentation

## Overview

This API provides endpoints for managing plant data. You can retrieve a list of all plants, create new plants, update existing plants, and delete plants.

## API Endpoints

- `GET /plants` - Retrieve a list of all plants.
- `POST /plants` - Create a new plant.
- `GET /plants/:id` - Retrieve a specific plant by ID.
- `PUT /plants/:id` - Update a specific plant by ID.
- `DELETE /plants/:id` - Delete a specific plant by ID.

## Endpoints Description

### GET /plants

Retrieves a list of all plants.

#### Response

- **Status Code:** `200 OK`
- **Content-Type:** `application/json`

##### Example Response

```json
[
  {
    "id": 1,
    "name": "Echinocereus Cacacatu",
    "subtitle": "A Majestic Addition to Your Plant Collection",
    "label": "indoor"
    "price": "139.99",
    "isInSale": true,
    "discountPercentage": 20,
    "features": "Species: Echinocereus spp. Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height. Blooming Season: Typically spring or summer, with flowers lasting several days to weeks. Pot Size: Available in various pot sizes to suit your preference and needs. Shipping: Our Echinocereus Cacti are carefully packaged and shipped with the utmost care to ensure they arrive in excellent condition.",
    "description": "Ladyfinger cactus (Echinocereus pentalophus) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.",
    "imgUrl": "Echinocereus_Cacacatu.png"
  },
  {
    
    "id": "66db3fc052e9fab4f8b9dcb4",
    "name": "Monstera Deliciosa",
    "subtitle": "A Statement Piece for Your Home",
    "label": "indoor",
    "price": "79.99",
    "isInSale": true,
    "discountPercentage": 15,
    "features": "Species: Monstera deliciosa. Mature Size: Up to 10 feet (3 meters) indoors. Pot Size: 12-inch (30 cm) pot recommended. Shipping: Ships in eco-friendly packaging to minimize waste.",
    "description": "Monstera deliciosa, also known as the Swiss Cheese Plant, is famous for its large, perforated leaves. It thrives in indirect light and requires regular watering.",
    "imgUrl": "monstera_deliciosa.png"
  }
]
```

### POST /plants

Creates a new plant.

#### Request

- **Content-Type:** `application/json`

##### Example Request

```json
[
  {
    "id": 1,
    "name": "Echinocereus Cacacatu",
    "subtitle": "A Majestic Addition to Your Plant Collection",
    "label": "indoor",
    "price": "139.99",
    "isInSale": true,
    "discountPercentage": 20,
    "features": "Species: Echinocereus spp. Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height. Blooming Season: Typically spring or summer, with flowers lasting several days to weeks. Pot Size: Available in various pot sizes to suit your preference and needs. Shipping: Our Echinocereus Cacti are carefully packaged and shipped with the utmost care to ensure they arrive in excellent condition.",
    "description": "Ladyfinger cactus (Echinocereus pentalophus) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.",
    "imgUrl": "Echinocereus_Cacacatu.png"
  }
]
```

#### Response

- **Status Code:** `201 Created`
- **Content-Type:** `application/json`

##### Example Response

```json
{
  "id": 1,
  "name": "Echinocereus Cacacatu",
  "subtitle": "A Majestic Addition to Your Plant Collection",
  "label": "indoor",
  "price": "139.99",
  "isInSale": true,
  "discountPercentage": 20,
  "features": "Species: Echinocereus spp. Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height. Blooming Season: Typically spring or summer, with flowers lasting several days to weeks. Pot Size: Available in various pot sizes to suit your preference and needs. Shipping: Our Echinocereus Cacti are carefully packaged and shipped with the utmost care to ensure they arrive in excellent condition.",
  "description": "Ladyfinger cactus (Echinocereus pentalophus) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.",
  "imgUrl": "Echinocereus_Cacacatu"
}
```

### GET /plants/:id

Retrieves a specific plant by ID.

#### Response

- **Status Code:** `200 OK`
- **Content-Type:** `application/json`

##### Example Response

```json
{
 
  "id": 1,
  "name": "Echinocereus Cacacatu",
  "subtitle": "A Majestic Addition to Your Plant Collection",
  "label": "indoor",
  "price": "$139.99",
  "isInSale": true,
  "discountPercentage": 20,
  "features": "Species: Echinocereus spp. Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height. Blooming Season: Typically spring or summer, with flowers lasting several days to weeks. Pot Size: Available in various pot sizes to suit your preference and needs. Shipping: Our Echinocereus Cacti are carefully packaged and shipped with the utmost care to ensure they arrive in excellent condition.",
  "description": "Ladyfinger cactus (Echinocereus pentalophus) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.",
  "imgUrl": "Echinocereus_Cacacatu.png"
}
```

### PUT /plants/:id

Updates a specific plant by ID.

#### Request

- **Content-Type:** `application/json`
- **Parameters:** `id` - The ID of the plant to update.
- **Body:** The updated plant data.

##### Body Request

##### Example Response

```json
{
  "id": 1,
  "name": "Echinocereus Cacacatu",
  "subtitle": "A Majestic Addition to Your Plant Collection",
  "label": "indoor",
  "price": "139.99",
  "isInSale": true,
  "discountPercentage": 20,
  "features": "Species: Echinocereus spp. Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height. Blooming Season: Typically spring or summer, with flowers lasting several days to weeks. Pot Size: Available in various pot sizes to suit your preference and needs. Shipping: Our Echinocereus Cacti are carefully packaged and shipped with the utmost care to ensure they arrive in excellent condition.",
  "description": "Ladyfinger cactus (Echinocereus pentalophus) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.",
  "imgUrl": "Echinocereus_Cacacatu.png"
}
```

#### Response

##### Example Response

```json
{

  "id": 1,
  "name": "Echinocereus Cacacatu",
  "subtitle": "A Majestic Addition to Your Plant Collection",
  "label": "indoor",
  "price": "139.99",
  "isInSale": true,
  "discountPercentage": 20,
  "features": "Species: Echinocereus spp. Mature Size: Varies by species, typically ranging from 4 to 12 inches (10-30 cm) in height. Blooming Season: Typically spring or summer, with flowers lasting several days to weeks. Pot Size: Available in various pot sizes to suit your preference and needs. Shipping: Our Echinocereus Cacti are carefully packaged and shipped with the utmost care to ensure they arrive in excellent condition.",
  "description": "Ladyfinger cactus (Echinocereus pentalophus) is also known as Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight, light fertilizer, and is prone to root rot. The root system is shallow and weak. Aphids and mealybugs are also a danger. Avoiding wet soil can help with success with a ladyfinger cactus.",
  "imgUrl": "Echinocereus_Cacacatu.png"
}
```

### DELETE /plants/:id

Deletes a specific plant by ID.

#### Response

- **Status Code:** `204 No Content`
- **Content-Type:** `application/json`
- **Body:** `{}`

## Error Responses

- **Status Code:** `404 Not Found`
- **Content-Type:** `application/json`
- **Body:** `{ "error": "Plant not found" }`

- **Status Code:** `500 Internal Server Error`
- **Status Code:** `400 Bad Request`
- **Content-Type:** `application/json`
- **Body:** `{ "error": "Invalid request" }`
