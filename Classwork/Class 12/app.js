// const userData = {
//     name: 'habban',
//     class: 'EX-21 Beginers',
//     age: 30,

// }

// console.log(userData.age);






let complexObject = {
    person: {
        name: {
            first: "John",
            last: "Doe",
        },
        age: 30,
        address: {
            street: {
                number: 123,
                name: "Nested Street",
            },
            city: "Nested City",
            country: "Nested Country",
        },
    },
    work: {
        company: {
            name: "TechCorp",
            location: {
                city: "TechCity",
                country: "TechCountry",
            },
        },
        position: "Senior Developer",
        projects: [
            {
                name: "Project A",
                technologies: ["JavaScript", "React", "Node.js"],
            },
            {
                name: "Project B",
                technologies: ["Python", "Django", ["new", ["PostgreSQL"]]],
            },
        ],
    },
    hobbies: {
        indoor: ["Reading", "Chess"],
        outdoor: ["Hiking", "Cycling"],
    },
};


console.log(complexObject.work.company.location.country);
console.log(complexObject.work.projects[0].technologies[2]);
console.log(complexObject.work.projects[1].technologies[2][1]);