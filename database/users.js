//Abstract Database Users
export const data = [
    {
        id: 1,
        name: "Daniil",
        description: "Web developer",
        email: "dse6023@gamil.com",
        phone: "+380951002478"
    },
    {
        id: 2,
        name: "Evgen",
        description: "DewOps",
        email: "dse602324@gamil.com",
        phone: "+380951232478"
    },
    {
        id: 3,
        name: "Svetlana",
        description: "Web developer",
        email: "mdt2412@gamil.com",
        phone: "+380951023478"
    },
];

export const schema = {
    "title": "user",
    "description": "My simple database of users in JSON format",
    "type": "object",
    "properties": {
        "id": {
            "description": "The unique identifier for a product",
            "type": "number"
        },
        "name": {
            "description": "Person name",
            "type": "string"
        },
        "description": {
            "description": "Description of person",
            "type": "string"
        },
        "email": {
            "description": "Person email",
            "type": "string"
        },
        "phone": {
            "description": "Person phone",
            "type": "string"
        }
    },
    "required": [ "id", "name", "description", "email", "phone"]
}


