"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Employee = function () {
	function Employee(id, name, salary) {
		_classCallCheck(this, Employee);

		this.id = id;
		this.name = name;
		this.salary = salary;
	}

	_createClass(Employee, [{
		key: "dis",
		value: function dis() {
			console.log("id is " + this.id);
			console.log("name is " + this.name);
			console.log("salary is " + this.salary);
		}
	}]);

	return Employee;
}();

var emp = new Employee(100, "Ravi", 12000);
emp.dis();

var num = [10, 20, 30, 40, 50];
num.forEach(function (e) {
	return console.log(e);
});