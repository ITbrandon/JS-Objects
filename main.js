class student {
  constructor(name, major, grades) {
    this.name = name;
    this.major = major;
    this.grades = grades;
  }

  addGrades(grade) {
    this.grades.push(grade);
  }

  gpa() {
    let sum = 0
    for(let i = 0; i < this.grades.length; i++)
    {
      sum += this.grades[i];
    }

    let average = sum/this.grades.length;

    return average;
  }
}

const eva = new student("Eva", "Arts", [95,75,83]);

console.log(eva);

eva.addGrades(90)

console.log(eva.gpa());