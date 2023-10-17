db = db.getSiblingDB('quick_web');
db.createUser(
    {
        user: "root",
        pwd: "123456",
        roles: [ { role: "dbAdmin", db: "quick_web" },{ role: "readWrite", db: "quick_web" } ]
    }
);
db.admin.insert({
    "username": "root",
    "password":"6a937e7e20852ce7f60bcc847be4faba",
    "salt":"ABCDEFGH"
});

