let user = {
    id: 1,
    name: `Chanchito`,
    age: 25,
};
for (let prop in user) {
    console.log(prop, user[prop]);
}