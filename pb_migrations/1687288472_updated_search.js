migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cwkb9mr3tz3hann")

  collection.name = "volumes"

  // remove
  collection.schema.removeField("spf2igo3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3exiq7pk",
    "name": "google_id",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "emcq7kss",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pvuvbpri",
    "name": "author",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1m1d0hek",
    "name": "publisher",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k3ld2qfi",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4tmb7cwu",
    "name": "thumbnail",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2pkp9roi",
    "name": "pageCount",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cwkb9mr3tz3hann")

  collection.name = "search"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "spf2igo3",
    "name": "volume",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("3exiq7pk")

  // remove
  collection.schema.removeField("emcq7kss")

  // remove
  collection.schema.removeField("pvuvbpri")

  // remove
  collection.schema.removeField("1m1d0hek")

  // remove
  collection.schema.removeField("k3ld2qfi")

  // remove
  collection.schema.removeField("4tmb7cwu")

  // remove
  collection.schema.removeField("2pkp9roi")

  return dao.saveCollection(collection)
})
