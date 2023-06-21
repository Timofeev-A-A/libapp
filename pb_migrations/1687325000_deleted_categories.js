migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kv7960qlnymzj3s");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "kv7960qlnymzj3s",
    "created": "2023-06-20 19:18:49.406Z",
    "updated": "2023-06-20 19:37:17.932Z",
    "name": "categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "te48aqz4",
        "name": "volume",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "cwkb9mr3tz3hann",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "41apwpkw",
        "name": "category",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
