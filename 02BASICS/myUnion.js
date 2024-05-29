var score = 33;
score = 44;
score = "very good";
var pavan = {
    name: "pavan",
    id: 122
};
pavan = { adminname: 'apavan', id: 123 };
function getDbId(id) {
    console.log("DB id is : ".concat(id));
}
getDbId(123);
getDbId("123");
// not work in ts
// function getDbId2(id: number| string) {
//     id.toLowerCase()
// }
function getDbId2(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    else {
        id = id + 20;
    }
}
