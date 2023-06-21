migrate((db) => {
  const collection = new Collection({
    "id": "cwkb9mr3tz3hann",
    "created": "2023-06-20 18:52:19.474Z",
    "updated": "2023-06-20 18:52:19.474Z",
    "name": "search",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "spf2igo3",
        "name": "volume",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cwkb9mr3tz3hann");

  return dao.deleteCollection(collection);
})
