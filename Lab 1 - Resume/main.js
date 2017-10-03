var name = 'jarrod ford';
console.log('Name: ' + name.toUpperCase());




console.log('Career: Programmer');

console.log('Description: ');
console.log("I am 38 years old. I have lived in Nashville for 3 years. I grew up in Denver,Colorado.")

console.log('My Interests: ')
console.log('* Combat Sports, * Reading, * Yoga, * Podcasts, * Coffee, * Learning to code');

console.log('Previous Experience: ');

function displayPosition(company, position, description) {
    console.log(position + 'at' + company);
    console.log("- " + description);

} 

displayPosition(' Oracle ', 'Implementation ',' installed point of sale systems');


function displayPosition(company, position, description) {
    console.log(position + 'at' + company);
    console.log("- " + description);

} 
displayPosition(' Micros ', 'Implementation ',' installed point of sale systems');

displayPosition(' Restaurant ', ' Manager ',' Guest Service Manager');

console.log("My skills are: ");

function displaySkill(skill, iscool) {
    if (iscool) {
        console.log('Checkit: ' + skill)
    } else {
        console.log(skill);
    }
}



displaySkill('Skiing', true);
displaySkill('Hunting', false);
displaySkill('Hiking', true);