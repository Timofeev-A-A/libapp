migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kv7960qlnymzj3s")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kv7960qlnymzj3s")

  // update
  collection.schema.addField(new SchemaField({
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
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
