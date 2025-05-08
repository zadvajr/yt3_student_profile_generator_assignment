// JS Scripts to generate student profile from a list of objects

// Array of student objects
const studentsData = [
    {
        firstName: "Innocent",
        lastName: "Sydney",
        age: 30,
        score: 90,
        courses: ["English", "Physics", "Chemistry", "Biology"]
    },
    {
        firstName: "Felicia",
        lastName: "Oyebimpe",
        age: 20,
        score: 79,
        courses: ["English", "Lit. English", "Government", "Economics"]
    },
    {
        firstName: "Kelechi",
        lastName: "Otugbuali",
        age: 29,
        score: 90,
        courses: ["English", "Mathematics", "Physics", "Chemistry"]
    },
    {
        firstName: "Stanley",
        lastName: "Onyeizugbo",
        age: 35,
        score: 65,
        courses: ["English", "Lit. English", "CRK", "Government"]
    },
    {
        firstName: "Olanrewaju",
        lastName: "Olaniyi",
        age: 34,
        score: 77,
        courses: ["English", "Economics", "Civic Edu.", "CRK"]
    },
    {
        firstName: "Tomnadoo",
        lastName: "Adyorough",
        age: 18,
        score: 66,
        courses: ["English", "Accounting", "Commerce", "Economics"]
    },
    {
        firstName: "Daniel",
        lastName: "Zadva Jnr",
        age: 20,
        score: 99,
        courses: ["English", "Mathematics", "Physics", "Chemistry"]
    },
    {
        firstName: "Oyetunde",
        lastName: "Daniel",
        age: 39,
        score: 87,
        courses: ["English", "Accounting", "Economics", "Government"]
    }
];
// end of studentsData

// Using map() method and destructuring to extract student information from the object
const studentInfo = studentsData.map(({firstName, lastName, age, score, courses}) => {
    return `${firstName} ${lastName} is ${age} years old and scored ${score}. He/She is taking: ${courses.join(", ")}\n`;
});

// Logging each student's details to console using forEach()
studentInfo.forEach((info, index) => {
    console.log(`${index + 1}. ${info}`);
    console.log("--------------------------------------------------")
});