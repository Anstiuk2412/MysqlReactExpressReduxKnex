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