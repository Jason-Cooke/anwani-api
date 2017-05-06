define({ "api": [
  {
    "type": "delete",
    "url": "/address/:addressId",
    "title": "Remove a shared address",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Address id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/address.js",
    "groupTitle": "Address",
    "name": "DeleteAddressAddressid"
  },
  {
    "type": "delete",
    "url": "/address/:addressId",
    "title": "Remove an address",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Address id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/address.js",
    "groupTitle": "Address",
    "name": "DeleteAddressAddressid"
  },
  {
    "type": "get",
    "url": "/address/:addressId",
    "title": "Find an Address",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Address id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>Address object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.id",
            "description": "<p>Address id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.name",
            "description": "<p>Address name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.picture",
            "description": "<p>Address picture</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "address.is_main",
            "description": "<p>is main address?</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "owner",
            "description": "<p>Owner Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "loc",
            "description": "<p>geographical location</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n\t  {\n\t\t\"_id\" : ObjectId(\"590c50cc3e981c4688fe0202\"),\n\t\t\"name\" : \"FBI Church\",\n\t\t\"picture\" : \"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\",\n\t\t\"is_main\" : false,\n\t\t\"owner\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"loc\" : {\n\t\t\t\"lon\" : -989.877,\n\t\t\t\"lat\" : -9943.0973\n\t\t},\n\t\t\"date_modified\" : ISODate(\"2017-05-05T10:15:40.099Z\"),\n\t\t\"date_created\" : ISODate(\"2017-05-05T10:15:40.099Z\")\n\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Address not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/address.js",
    "groupTitle": "Address",
    "name": "GetAddressAddressid"
  },
  {
    "type": "get",
    "url": "/address/all",
    "title": "List all Addresss",
    "group": "Address",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "address",
            "description": "<p>Address's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.id",
            "description": "<p>Address id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.name",
            "description": "<p>Address name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.picture",
            "description": "<p>Address picture</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "address.is_main",
            "description": "<p>is main address?</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "owner",
            "description": "<p>Owner Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "loc",
            "description": "<p>geographical location</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n\t  [{\n\t\t\"_id\" : ObjectId(\"590c50cc3e981c4688fe0202\"),\n\t\t\"name\" : \"FBI Church\",\n\t\t\"picture\" : \"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\",\n\t\t\"is_main\" : false,\n\t\t\"owner\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"loc\" : {\n\t\t\t\"lon\" : -989.877,\n\t\t\t\"lat\" : -9943.0973\n\t\t},\n\t\t\"date_modified\" : ISODate(\"2017-05-05T10:15:40.099Z\"),\n\t\t\"date_created\" : ISODate(\"2017-05-05T10:15:40.099Z\")\n\t   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Address not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/address.js",
    "groupTitle": "Address",
    "name": "GetAddressAll"
  },
  {
    "type": "get",
    "url": "/address/search/:query",
    "title": "Find Addresss",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Address query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>Address object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.id",
            "description": "<p>Address id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.name",
            "description": "<p>Address name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.picture",
            "description": "<p>Address picture</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "address.is_main",
            "description": "<p>is main address?</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "owner",
            "description": "<p>Owner Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "loc",
            "description": "<p>geographical location</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n\t  {\n\t\t\"_id\" : ObjectId(\"590c50cc3e981c4688fe0202\"),\n\t\t\"name\" : \"FBI Church\",\n\t\t\"picture\" : \"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\",\n\t\t\"is_main\" : false,\n\t\t\"owner\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"loc\" : {\n\t\t\t\"lon\" : -989.877,\n\t\t\t\"lat\" : -9943.0973\n\t\t},\n\t\t\"date_modified\" : ISODate(\"2017-05-05T10:15:40.099Z\"),\n\t\t\"date_created\" : ISODate(\"2017-05-05T10:15:40.099Z\")\n\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Address not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/address.js",
    "groupTitle": "Address",
    "name": "GetAddressSearchQuery"
  },
  {
    "type": "get",
    "url": "/address/:userId",
    "title": "Find Addresss by User",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "address",
            "description": "<p>Address's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.id",
            "description": "<p>Address id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.name",
            "description": "<p>Address name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.picture",
            "description": "<p>Address picture</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "address.is_main",
            "description": "<p>is main address?</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "owner",
            "description": "<p>Owner Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "loc",
            "description": "<p>geographical location</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n\t  {\n\t\t\"_id\" : ObjectId(\"590c50cc3e981c4688fe0202\"),\n\t\t\"name\" : \"FBI Church\",\n\t\t\"picture\" : \"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\",\n\t\t\"is_main\" : false,\n\t\t\"owner\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"loc\" : {\n\t\t\t\"lon\" : -989.877,\n\t\t\t\"lat\" : -9943.0973\n\t\t},\n\t\t\"date_modified\" : ISODate(\"2017-05-05T10:15:40.099Z\"),\n\t\t\"date_created\" : ISODate(\"2017-05-05T10:15:40.099Z\")\n\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Address not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/address.js",
    "groupTitle": "Address",
    "name": "GetAddressUserid"
  },
  {
    "type": "get",
    "url": "/address/:userId",
    "title": "Find Shared Addresses by User",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>Address object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.id",
            "description": "<p>Address id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.name",
            "description": "<p>Address name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.picture",
            "description": "<p>Address picture</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "address.is_main",
            "description": "<p>is main address?</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "owner",
            "description": "<p>Owner Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "loc",
            "description": "<p>geographical location</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n\t  {\n\t\t\"_id\" : ObjectId(\"590c50cc3e981c4688fe0202\"),\n\t\t\"name\" : \"FBI Church\",\n\t\t\"picture\" : \"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\",\n\t\t\"is_main\" : false,\n\t\t\"owner\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"loc\" : {\n\t\t\t\"lon\" : -989.877,\n\t\t\t\"lat\" : -9943.0973\n\t\t},\n\t\t\"date_modified\" : ISODate(\"2017-05-05T10:15:40.099Z\"),\n\t\t\"date_created\" : ISODate(\"2017-05-05T10:15:40.099Z\")\n\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Address not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/address.js",
    "groupTitle": "Address",
    "name": "GetAddressUserid"
  },
  {
    "type": "post",
    "url": "/address/add",
    "title": "Register a new Address",
    "group": "Address",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": " {\n \t\"_id\" : ObjectId(\"590c4a092ead2c34acf94356\"),\n\t\t\"name\" : \"office\",\n\t\t\"picture\" : \"UIUR0lGODlhPQBEAPe\",\n\t\t\"date_modified\" : ISODate(\"2017-05-05T09:46:49.025Z\"),\n\t\t\"date_created\" : ISODate(\"2017-05-05T09:46:49.025Z\"),\n\t\t\"is_main\" : true,\n\t\t\"loc\" : {\n\t\t\t\"lon\" : -349.877,\n\t\t\t\"lat\" : 123.0973\n\t\t},\n\t\t\"__v\" : 0\n\t}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>Address object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.id",
            "description": "<p>Address id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.name",
            "description": "<p>Address name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.picture",
            "description": "<p>Address picture</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "address.is_main",
            "description": "<p>is main address?</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "owner",
            "description": "<p>Owner Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "loc",
            "description": "<p>geographical location</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n\t  {\n\t\t\"_id\" : ObjectId(\"590c50cc3e981c4688fe0202\"),\n\t\t\"name\" : \"FBI Church\",\n\t\t\"picture\" : \"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\",\n\t\t\"is_main\" : false,\n\t\t\"owner\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"loc\" : {\n\t\t\t\"lon\" : -989.877,\n\t\t\t\"lat\" : -9943.0973\n\t\t},\n\t\t\"date_modified\" : ISODate(\"2017-05-05T10:15:40.099Z\"),\n\t\t\"date_created\" : ISODate(\"2017-05-05T10:15:40.099Z\")\n\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Address not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/address.js",
    "groupTitle": "Address",
    "name": "PostAddressAdd"
  },
  {
    "type": "post",
    "url": "/address/add",
    "title": "Register a new Address",
    "group": "Address",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": " {\n \t\"_id\" : ObjectId(\"590c4a092ead2c34acf94356\"),\n\t\t\"name\" : \"office\",\n\t\t\"picture\" : \"UIUR0lGODlhPQBEAPe\",\n\t\t\"date_modified\" : ISODate(\"2017-05-05T09:46:49.025Z\"),\n\t\t\"date_created\" : ISODate(\"2017-05-05T09:46:49.025Z\"),\n\t\t\"is_main\" : true,\n\t\t\"loc\" : {\n\t\t\t\"lon\" : -349.877,\n\t\t\t\"lat\" : 123.0973\n\t\t},\n\t\t\"__v\" : 0\n\t}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "address",
            "description": "<p>Address object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.id",
            "description": "<p>Address id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.name",
            "description": "<p>Address name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.picture",
            "description": "<p>Address picture</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "address.is_main",
            "description": "<p>is main address?</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "owner",
            "description": "<p>Owner Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "loc",
            "description": "<p>geographical location</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n\t  {\n\t\t\"_id\" : ObjectId(\"590c50cc3e981c4688fe0202\"),\n\t\t\"name\" : \"FBI Church\",\n\t\t\"picture\" : \"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\",\n\t\t\"is_main\" : false,\n\t\t\"owner\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"loc\" : {\n\t\t\t\"lon\" : -989.877,\n\t\t\t\"lat\" : -9943.0973\n\t\t},\n\t\t\"date_modified\" : ISODate(\"2017-05-05T10:15:40.099Z\"),\n\t\t\"date_created\" : ISODate(\"2017-05-05T10:15:40.099Z\")\n\t   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Address not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/address.js",
    "groupTitle": "Address",
    "name": "PostAddressAdd"
  },
  {
    "type": "put",
    "url": "/address/:addressId",
    "title": "Update an Address",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>address id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": " {\n \t\"_id\" : ObjectId(\"590c4a092ead2c34acf94356\"),\n\t\t\"name\" : \"office\",\n\t\t\"picture\" : \"UIUR0lGODlhPQBEAPe\",\n\t\t\"date_modified\" : ISODate(\"2017-05-05T09:46:49.025Z\"),\n\t\t\"date_created\" : ISODate(\"2017-05-05T09:46:49.025Z\"),\n\t\t\"is_main\" : true,\n\t\t\"loc\" : {\n\t\t\t\"lon\" : -349.877,\n\t\t\t\"lat\" : 123.0973\n\t\t},\n\t\t\"__v\" : 0\n\t}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/address.js",
    "groupTitle": "Address",
    "name": "PutAddressAddressid"
  },
  {
    "type": "delete",
    "url": "/profile/:profileId",
    "title": "Remove an profile",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Profile id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles",
    "name": "DeleteProfileProfileid"
  },
  {
    "type": "get",
    "url": "/profile/all",
    "title": "List all Profiles",
    "group": "Profiles",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profile.id",
            "description": "<p>Profile id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User User Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.first_name",
            "description": "<p>Profile first_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.middle_name",
            "description": "<p>Profile middle_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.last_name",
            "description": "<p>Profile last_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.display_name",
            "description": "<p>Profile display name</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "profile.is_public",
            "description": "<p>is public profile?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "profile.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "profile.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n\t\t\"_id\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"user\" : ObjectId(\"590c20fb8eb7d442b8e7040b\"),\n\t\t\"first_name\" : \"Yididiya\",\n\t\t\"middle_name\" : \"Gebredingel\",\n\t\t\"last_name\" : \"Berhe\",\n\t\t\"display_name\" : \"Yido\",\n\t\t\"is_public\" : false,\n\t\t\"addresses\" : [\n\t    {\n\t    \t\"_id\" : ObjectId(\"590c50cc3e981c4688fe0202\"),\n\t    \t\"name\" : \"FBI Church\",\n\t    \t\"picture\" : \"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\",\n\t    \t\"is_main\" : false,\n\t    \t\"owner\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t    \t\"loc\" : {\n\t\t    \t\"lon\" : -989.877,\n\t\t    \t\"lat\" : -9943.0973\n\t    \t}\n\t    \t],\n\t    \t\"__v\" : 0,\n\t    \t\"last_modified\" : ISODate(\"2017-05-05T10:15:40.128Z\")\n \t }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles",
    "name": "GetProfileAll"
  },
  {
    "type": "get",
    "url": "/profile/:profileId",
    "title": "Find an Profile",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Profile id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profile.id",
            "description": "<p>Profile id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User User Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.first_name",
            "description": "<p>Profile first_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.middle_name",
            "description": "<p>Profile middle_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.last_name",
            "description": "<p>Profile last_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.display_name",
            "description": "<p>Profile display name</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "profile.is_public",
            "description": "<p>is public profile?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "profile.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "profile.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   {\n\t\t\"_id\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"user\" : ObjectId(\"590c20fb8eb7d442b8e7040b\"),\n\t\t\"first_name\" : \"Yididiya\",\n\t\t\"middle_name\" : \"Gebredingel\",\n\t\t\"last_name\" : \"Berhe\",\n\t\t\"display_name\" : \"Yido\",\n\t\t\"is_public\" : false,\n\t\t\"addresses\" : [\n\t    {\n\t    \t\"_id\" : ObjectId(\"590c50cc3e981c4688fe0202\"),\n\t    \t\"name\" : \"FBI Church\",\n\t    \t\"picture\" : \"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\",\n\t    \t\"is_main\" : false,\n\t    \t\"owner\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t    \t\"loc\" : {\n\t\t    \t\"lon\" : -989.877,\n\t\t    \t\"lat\" : -9943.0973\n\t    \t}\n\t    \t],\n\t    \t\"__v\" : 0,\n\t    \t\"last_modified\" : ISODate(\"2017-05-05T10:15:40.128Z\")\n \t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles",
    "name": "GetProfileProfileid"
  },
  {
    "type": "get",
    "url": "/profile/profiles/:query",
    "title": "Find addresses of a profile",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Profile query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "address",
            "description": "<p>Address's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "address.id",
            "description": "<p>Address id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.name",
            "description": "<p>Address name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address.picture",
            "description": "<p>Address picture</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "address.is_main",
            "description": "<p>is main address?</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "owner",
            "description": "<p>Owner Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "loc",
            "description": "<p>geographical location</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "address.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n\t  [{\n\t\t\"_id\" : ObjectId(\"590c50cc3e981c4688fe0202\"),\n\t\t\"name\" : \"FBI Church\",\n\t\t\"picture\" : \"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\",\n\t\t\"is_main\" : false,\n\t\t\"owner\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"loc\" : {\n\t\t\t\"lon\" : -989.877,\n\t\t\t\"lat\" : -9943.0973\n\t\t},\n\t\t\"date_modified\" : ISODate(\"2017-05-05T10:15:40.099Z\"),\n\t\t\"date_created\" : ISODate(\"2017-05-05T10:15:40.099Z\")\n\t   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Address not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles",
    "name": "GetProfileProfilesQuery"
  },
  {
    "type": "get",
    "url": "/profile/search/:query",
    "title": "Find Profiles",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Profile query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profile.id",
            "description": "<p>Profile id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User User Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.first_name",
            "description": "<p>Profile first_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.middle_name",
            "description": "<p>Profile middle_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.last_name",
            "description": "<p>Profile last_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.display_name",
            "description": "<p>Profile display name</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "profile.is_public",
            "description": "<p>is public profile?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "profile.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "profile.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n\t\t\"_id\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"user\" : ObjectId(\"590c20fb8eb7d442b8e7040b\"),\n\t\t\"first_name\" : \"Yididiya\",\n\t\t\"middle_name\" : \"Gebredingel\",\n\t\t\"last_name\" : \"Berhe\",\n\t\t\"display_name\" : \"Yido\",\n\t\t\"is_public\" : false,\n\t\t\"addresses\" : [\n\t    {\n\t    \t\"_id\" : ObjectId(\"590c50cc3e981c4688fe0202\"),\n\t    \t\"name\" : \"FBI Church\",\n\t    \t\"picture\" : \"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\",\n\t    \t\"is_main\" : false,\n\t    \t\"owner\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t    \t\"loc\" : {\n\t\t    \t\"lon\" : -989.877,\n\t\t    \t\"lat\" : -9943.0973\n\t    \t}\n\t    \t],\n\t    \t\"__v\" : 0,\n\t    \t\"last_modified\" : ISODate(\"2017-05-05T10:15:40.128Z\")\n \t }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles",
    "name": "GetProfileSearchQuery"
  },
  {
    "type": "post",
    "url": "/profile/add",
    "title": "Register a new Profile to a user",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>user id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "INPUT",
          "content": "  {\n\t\t\"_id\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"user\" : ObjectId(\"590c20fb8eb7d442b8e7040b\"),\n\t\t\"first_name\" : \"Yididiya\",\n\t\t\"middle_name\" : \"Gebredingel\",\n\t\t\"last_name\" : \"Berhe\",\n\t\t\"is_public\" : false,\n\t\t\"__v\" : 0,\n\t\t\"last_modified\" : ISODate(\"2017-05-05T10:15:40.128Z\")\n\t }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profile.id",
            "description": "<p>Profile id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User User Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.first_name",
            "description": "<p>Profile first_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.middle_name",
            "description": "<p>Profile middle_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.last_name",
            "description": "<p>Profile last_name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile.display_name",
            "description": "<p>Profile display name</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "profile.is_public",
            "description": "<p>is public profile?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "profile.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "profile.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   {\n\t\t\"_id\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"user\" : ObjectId(\"590c20fb8eb7d442b8e7040b\"),\n\t\t\"first_name\" : \"Yididiya\",\n\t\t\"middle_name\" : \"Gebredingel\",\n\t\t\"last_name\" : \"Berhe\",\n\t\t\"display_name\" : \"Yido\",\n\t\t\"is_public\" : false,\n \t }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles",
    "name": "PostProfileAdd"
  },
  {
    "type": "put",
    "url": "/profile/:profileId",
    "title": "Update an Profile",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>profile id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "INPUT",
          "content": "  {\n\t\t\"_id\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"user\" : ObjectId(\"590c20fb8eb7d442b8e7040b\"),\n\t\t\"first_name\" : \"Yididiya\",\n\t\t\"middle_name\" : \"Gebredingel\",\n\t\t\"last_name\" : \"Berhe\",\n\t\t\"is_public\" : false,\n\t\t\"__v\" : 0,\n\t\t\"last_modified\" : ISODate(\"2017-05-05T10:15:40.128Z\")\n\t }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles",
    "name": "PutProfileProfileid"
  },
  {
    "type": "put",
    "url": "/profile/:profileId",
    "title": "Set Profile picture",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>profile id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "INPUT",
          "content": "  {\n\t\t\"_id\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\"picture\" : \"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\",\n\t }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profiles",
    "name": "PutProfileProfileid"
  },
  {
    "type": "delete",
    "url": "/users/:userId",
    "title": "Remove a user",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "DeleteUsersUserid"
  },
  {
    "type": "get",
    "url": "/users/all",
    "title": "Get all Users",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_type",
            "description": "<p>User user_type</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "shared_addresses",
            "description": "<p>shared addresses</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n\t\t[ {\n\t\t\t\"_id\" : ObjectId(\"590c4dadda53bd1db8c88ed1\"),\n\t\t\t\"password\" : \"$2a$07$1YbUkcZFXqL3m9XV6OdIcOUDfp4WPTh2EDCG7fgXMWPa6zff4bSiu\",\n\t\t\t\"username\" : \"0910303229\",\n\t\t\t\"user_type\" : \"individual\",\n\t\t\t\"last_modified\" : ISODate(\"2017-05-05T10:18:25.546Z\"),\n\t\t\t\"date_created\" : ISODate(\"2017-05-05T10:02:21.038Z\"),\n\t\t\t\"shared_addresses\" : [\n\t\t\t\t {\n\t\t\t\t \t\t\"_id\" : ObjectId(\"590c50cc3e981c4688fe0202\"),\n\t\t\t\t \t\t\"name\" : \"FBI Church\",\n\t\t\t\t \t\t\"picture\" : \"OPHYTT87PQBEAPe\",\n\t\t\t\t \t\t\"is_main\" : false,\n\t\t\t\t \t\t\"owner\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\t\t \t\t\"loc\" : {\n\t\t\t\t \t\t\t\"lon\" : -989.877,\n\t\t\t\t \t\t\t\"lat\" : -9943.0973\n\t\t\t\t \t\t},\n\t\t\t\t \t\t\"date_modified\" : ISODate(\"2017-05-05T10:15:40.099Z\"),\n\t\t\t\t \t\t\"date_created\" : ISODate(\"2017-05-05T10:15:40.099Z\")\n\t\t\t   }\n\t\t\t],\n\t\t\t\"status\" : \"active\",\n\t\t\t\"realm\" : \"user\",\n\t\t\t\"__v\" : 0,\n\t\t\t\"profile\" : ObjectId(\"590c4dadda53bd1db8c88ed2\")\n\t\t}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Address not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "GetUsersAll"
  },
  {
    "type": "get",
    "url": "/users/:userId",
    "title": "Find a User",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_type",
            "description": "<p>User user_type</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "shared_addresses",
            "description": "<p>shared addresses</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n\t\t {\n\t\t\t\"_id\" : ObjectId(\"590c4dadda53bd1db8c88ed1\"),\n\t\t\t\"password\" : \"$2a$07$1YbUkcZFXqL3m9XV6OdIcOUDfp4WPTh2EDCG7fgXMWPa6zff4bSiu\",\n\t\t\t\"username\" : \"0910303229\",\n\t\t\t\"user_type\" : \"individual\",\n\t\t\t\"last_modified\" : ISODate(\"2017-05-05T10:18:25.546Z\"),\n\t\t\t\"date_created\" : ISODate(\"2017-05-05T10:02:21.038Z\"),\n\t\t\t\"shared_addresses\" : [\n\t\t\t\t {\n\t\t\t\t \t\t\"_id\" : ObjectId(\"590c50cc3e981c4688fe0202\"),\n\t\t\t\t \t\t\"name\" : \"FBI Church\",\n\t\t\t\t \t\t\"picture\" : \"OPHYTT87PQBEAPe\",\n\t\t\t\t \t\t\"is_main\" : false,\n\t\t\t\t \t\t\"owner\" : ObjectId(\"590c20fb8eb7d442b8e7040c\"),\n\t\t\t\t \t\t\"loc\" : {\n\t\t\t\t \t\t\t\"lon\" : -989.877,\n\t\t\t\t \t\t\t\"lat\" : -9943.0973\n\t\t\t\t \t\t},\n\t\t\t\t \t\t\"date_modified\" : ISODate(\"2017-05-05T10:15:40.099Z\"),\n\t\t\t\t \t\t\"date_created\" : ISODate(\"2017-05-05T10:15:40.099Z\")\n\t\t\t   }\n\t\t\t],\n\t\t\t\"status\" : \"active\",\n\t\t\t\"realm\" : \"user\",\n\t\t\t\"__v\" : 0,\n\t\t\t\"profile\" : ObjectId(\"590c4dadda53bd1db8c88ed2\")\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Address not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "GetUsersUserid"
  },
  {
    "type": "post",
    "url": "/users/logout",
    "title": "Logout a user",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Logout error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostUsersLogout"
  },
  {
    "type": "post",
    "url": "/users/signup",
    "title": "New user sign up",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": " {\n\t\"first_name\" : \"Yididiya\",\n\t\"middle_name\" : \"Gebredingel\",\n\t\"last_name\" : \"Berhe\",\n\t\"user_type\" : \"individual\",\n\t\"username\" : \"0910303229\",\n\t\"password\" : \"your password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n\t\t {\n\t\t\t\"_id\" : ObjectId(\"590c4dadda53bd1db8c88ed1\"),\n\t\t\t\"password\" : \"$2a$07$1YbUkcZFXqL3m9XV6OdIcOUDfp4WPTh2EDCG7fgXMWPa6zff4bSiu\",\n\t\t\t\"username\" : \"0910303229\",\n\t\t\t\"user_type\" : \"individual\",\n\t\t\t\"last_modified\" : ISODate(\"2017-05-05T10:18:25.546Z\"),\n\t\t\t\"date_created\" : ISODate(\"2017-05-05T10:02:21.038Z\"),\n\t\t\t\"shared_addresses\" : [],\n\t\t\t\"status\" : \"active\",\n\t\t\t\"realm\" : \"user\",\n\t\t\t\"__v\" : 0,\n\t\t\t\"profile\" :\n\t\t\t{\n\t\t        \"_id\": \"590c4dadda53bd1db8c88ed2\",\n             \"user\": \"590c4dadda53bd1db8c88ed1\",\n             \"first_name\": \"Yared\",\n             \"middle_name\": \"Dejene\",\n             \"last_name\": \"Dessalegne\",\n             \"__v\": 0,\n             \"is_public\": false,\n             \"addresses\": []\n\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User is not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostUsersSignup"
  },
  {
    "type": "post",
    "url": "/users/signup",
    "title": "user sign in",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": " {\n\t\"username\" : \"0910303229\",\n\t\"password\" : \"your password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n\t\t {\n\t\t\t\"_id\" : ObjectId(\"590c4dadda53bd1db8c88ed1\"),\n\t\t\t\"password\" : \"$2a$07$1YbUkcZFXqL3m9XV6OdIcOUDfp4WPTh2EDCG7fgXMWPa6zff4bSiu\",\n\t\t\t\"username\" : \"0910303229\",\n\t\t\t\"user_type\" : \"individual\",\n\t\t\t\"last_modified\" : ISODate(\"2017-05-05T10:18:25.546Z\"),\n\t\t\t\"date_created\" : ISODate(\"2017-05-05T10:02:21.038Z\"),\n\t\t\t\"shared_addresses\" : [],\n\t\t\t\"status\" : \"active\",\n\t\t\t\"realm\" : \"user\",\n\t\t\t\"__v\" : 0,\n\t\t\t\"profile\" :\n\t\t\t{\n\t\t        \"_id\": \"590c4dadda53bd1db8c88ed2\",\n             \"user\": \"590c4dadda53bd1db8c88ed1\",\n             \"first_name\": \"Yared\",\n             \"middle_name\": \"Dejene\",\n             \"last_name\": \"Dessalegne\",\n             \"__v\": 0,\n             \"is_public\": false,\n             \"addresses\": []\n\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User is not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostUsersSignup"
  },
  {
    "type": "put",
    "url": "/users/:userId",
    "title": "Update a User",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>user id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": " {\n\t\"_id\" : ObjectId(\"590c4dadda53bd1db8c88ed1\"),\n\t\"password\" : \"$2a$07$1YbUkcZFXqL3m9XV6OdIcOUDfp4WPTh2EDCG7fgXMWPa6zff4bSiu\",\n\t\"username\" : \"0910303229\",\n\t\"user_type\" : \"individual\",\n\t\"last_modified\" : ISODate(\"2017-05-05T10:18:25.546Z\"),\n\t\"date_created\" : ISODate(\"2017-05-05T10:02:21.038Z\"),\n\t\"status\" : \"active\",\n\t\"realm\" : \"user\",\n\t\"__v\" : 0,\n\t\"profile\" : ObjectId(\"590c4dadda53bd1db8c88ed2\")\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PutUsersUserid"
  }
] });
