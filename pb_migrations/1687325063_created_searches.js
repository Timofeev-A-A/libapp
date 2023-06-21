migrate((db) => {
  const collection = new Collection({
    "id": "ojd9cap12o7u2xv",
    "created": "2023-06-21 05:24:23.963Z",
    "updated": "2023-06-21 05:24:23.963Z",
    "name": "searches",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fw9d1wyg",
        "name": "ids",
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
  const collection = dao.findCollectionByNameOrId("ojd9cap12o7u2xv");

  return dao.deleteCollection(collection);
})
