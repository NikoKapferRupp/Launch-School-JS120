const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th']

let school = {  
  students: [],

  addStudent(name, year) {
    let newStudent = {
      name: name,
      year: VALID_YEARS.includes(year) ? year : 'Invalid Year',
      courses: []
    }
    this.students.push(newStudent)
  },

  enrollStudent(name, course) {
    let that = this;
    that.students.forEach(element => {      
      if(element.name === name) {               
        element.courses.push(course);
      }
    })
  }

    
  
}

school.addStudent('Niko', '1st');
school.enrollStudent('Niko', { name: 'Math', code: 101, })

console.log(school.students[0]);
