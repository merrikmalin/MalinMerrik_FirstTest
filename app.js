// Merrik Malin Test 1

// Question 1A.
/*
let student_data = {
    John: {
        id: 1,
        major: 'CS'
    },
    Mike: {
        id: 2,
        major: 'Math'
    },
    Sally: {
        id: 3,
        major: 'Pharmacy'
    }
}
// Question 1B.
student_data.Sarah.id=4;
student_data.Sarah.major=CS;

function displayStudents(id, name, major){

}
*/
// Question 2A.
const boys = [
    {id: 1, hobby:'baseball'},
    {id: 2, hobby:'soccer'},
    {id: 3, hobby:'running'}
];
const girls = [
    {id: 1, sport:'soccer'},
    {id: 2, sport:'running'},
    {id: 3, sport:'soccer'}
];

compare = (boys, girls) => {    
    boys.forEach((item, id) => {
        girls.forEach((item2, id2) => {
            if(item.hobby == item2.sport){
                console.log("For sport " + item.hobby + ", both boy " + item.id + " and girl " + item2.id + " like.");
                document.getElementById("q2b").innerHTML += "<li>For sport " + item.hobby + ", both boy " + item.id + " and girl " + item2.id + " like.</li>";
            }
        });
    });

}

compare(boys, girls);

//document.getElementById("q2b").innerHTML = compare(boys, girls);