migrate((db) => {
  const collection = new Collection({
    "id": "hh8pqu2ufi5bsxj",
    "created": "2023-06-21 05:20:16.814Z",
    "updated": "2023-06-21 05:20:16.814Z",
    "name": "search",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sqk3tzve",
        "name": "found",
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
  const collection = dao.findCollectionByNameOrId("hh8pqu2ufi5bsxj");

  return dao.deleteCollection(collection);
})
