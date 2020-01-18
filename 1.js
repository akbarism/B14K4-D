biodata("akbar ismail", 22)

function biodata(name, age){
    let biodata = {
        "name": name,
        "age": age,
        "address": "jl raya raya pasar serpong",
        "hobbies": ["drawing", "singing", "Reading"],
        "is_married": false,
        "list_school": [
            {
                "name": "SMK Asyamsuriyyah",
                "year_in": 2012,
                "year_out": 2015,
                "major": 'RPL'
            },
            {
                "name": "MTs Darul Mujahadah",
                "year_in": 2009,
                "year_out": 2012,
                "major": null
            },
            {
                "name": "SDN Glonggong",
                "year_in": 2004,
                "year_out": 2009,
                "major": null
            }
        ],
        "skills": [
            {
                "skill_name": "Javascript",
                "level": "beginner"
            },
            {
                "skill_name": "Sql",
                "level": "beginner"
            },
            {
                "skill_name": "HTML",
                "level": "advanced"
            },
            {
                "skill_name": "CSS",
                "level": "beginner"
            }
        ],
        "interest_in_coding": true
    }

    return console.log(JSON.stringify(biodata))
}