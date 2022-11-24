const enpoints = {
  login:'auth/login',
  employee:'Employee',
  dropdownCont: 'Dropdowns/countyProvinceCity',
  dropdownSkills:'Dropdowns/skills',
  payrollList: 'Payroll/list/employeeId',
  paystub: 'Payroll/payrollId',
  employeeTask: 'EmployeeTask',
  updateTask: 'EmployeeTask/updateTask',
  internalJob: 'Job',
  teams:'Teams',
  addEmployee: 'Employee/addEmployee',
  updateEmployee: 'Employee/updateEmployee',
  resignation:'Email/resign',
  deleteEmployee:'Employee/deleteEmployee',
  projectsByEmployeeId:'Projects/employeeId',
  addSalary:'Salary/addSalary',
  addEmployeeOnProject:'Projects/addEmployeeOnProject',
  otp:'Email/otp',
  changePassword:'Employee/changepassword',
  dropdownRoles :'Dropdowns/roles',
  dropdownDepartments:'Dropdowns/departments',
  dropdownCompanies:'Dropdowns/companylocations',
  projects:'Projects',
  taskListByManagerId: 'EmployeeTask/tasklist',
  teamMembers:'Dashboard/teammemberscount',
  getTeamMembers:'Dashboard/teammembers',
  projectsForHR:'Dashboard/projects',
  job:'Job',
  employeeLeave:'Leaves/employeeId',
  leaveType:'Dropdowns/leavetypes',
  addLeave:'Leaves/addLeave',
  deleteLeave:'Leaves/deleteLeave',
  updateLeave:'Leaves/updateLeave',
  timeSheet: 'TimeSheet',
  employeeLeaves:'Dashboard/employeeLeaves',
  topProjects:'Dashboard/topprojects',
  widgets:'Dashboard/charts',
  deleteWidget:'Dashboard/deleteWidget',
  addWidget:'Dashboard/addWidget',
  dashboardId:'Dashboard/dashbordId'
}

export function GetEndPoints(){
  return enpoints;
}