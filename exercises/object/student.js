function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${name} is a ${year} student`);      
    },

    listCourses() {
      console.log(this.courses);      
      return this.courses;
    },

    addCourse(obj) {
      this.courses.push(obj);
    },

    addNote(code, note) {
      this.courses.forEach(element => {     
        if (Object.values(element).includes(code)) {
          Object.hasOwn(element, 'note') ? element.note.push(note) : element.note = [note] ;                   
        }        
      });
    },

    viewNotes() {
      this.courses.forEach(element => {
        if (element.note) {
          console.log(`${element.name}: ${element.note.join('; ')}`);          
        }
      }) 
    },

    updateNote(code, note) {
      this.courses.forEach(element => {
        if (element.code === code) {
           element.note = [note];
        }
       
      }
      )
    }
  }
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');

foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"