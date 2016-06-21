"use strict"

function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.classes = [];
}

Student.prototype.name = function(){
  return `${this.fname} ${this.lname}`;
};

Student.prototype.enroll = function(course) {
  if (!this.classes.includes(course)) {
    this.classes.push(course);
    course.addStudent(this);
  }
};

Student.prototype.courses = function() {
  let c = [];
  this.classes.forEach(
    course => c.push(course.name)
  );
  return c;
};

Student.prototype.course_load = function() {
  let load = {};
  this.classes.forEach(course => {
      if (!load[course.department]) {
        load[course.department] = course.credits;
      } else {
        load[course.department] += course.credits;
      }
    }
  );
  return load;
};


function Course (name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
}

Course.prototype.addStudent = function (student) {
  this.students.push(student);
};

let c1 = new Course('photography', 'media', 2);
let c2 = new Course('art', 'media', 2);
let c3 = new Course('cs', 'science', 4);
let c4 = new Course('neuro', 'science', 4);

let kia = new Student('kia', 'salehi');
let kabir = new Student('kabir', 'nigam');

kia.enroll(c1);
kia.enroll(c2);
kia.enroll(c3);
kia.enroll(c4);

kabir.enroll(c1);
kabir.enroll(c4);

console.log(kia.courses());
console.log(kabir.courses());
console.log(kia.course_load());
console.log(kabir.course_load());

console.log(c1.students);
console.log(c4.students);
console.log(c3.students);
