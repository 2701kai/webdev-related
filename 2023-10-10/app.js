const organization = {
  name: "Example Corporation",
  departments: [
    {
      name: "Engineering",
      teams: [
        {
          name: "Backend",
          employees: [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
            { id: 3, name: "Charlie" },
          ],
        },
        {
          name: "Frontend",
          employees: [
            { id: 4, name: "David" },
            { id: 5, name: "Eva" },
            { id: 6, name: "Frank" },
          ],
        },
      ],
    },
    {
      name: "Marketing",
      teams: [
        {
          name: "Digital",
          employees: [
            { id: 7, name: "Grace" },
            { id: 8, name: "Henry" },
            { id: 9, name: "Ivy" },
          ],
        },
        {
          name: "Content",
          employees: [
            { id: 10, name: "Jack" },
            { id: 11, name: "Kate" },
            { id: 12, name: "Leo" },
          ],
        },
      ],
    },
  ],
};

// ---------------------------------- 1 ----------------------------------
// Write a function that returns all employees in the organization.
// const getAllEmployees = (organization) => {
//   const employees = [];
//   organization.departments.forEach((department) => {
//     department.teams.forEach((team) => {
//       team.employees.forEach((employee) => {
//         employees.push(employee);
//       });
//     });
//   });
//   return employees;
// };
// console.log(getAllEmployees(organization));

// Department: Engineering
//   Team: Backend
//     Employee: Alice, ID: 1
//     Employee: Bob, ID: 2
//     Employee: Charlie, ID: 3
//   Team: Frontend
//     Employee: David, ID: 4
//     Employee: Eva, ID: 5
//     Employee: Frank, ID: 6
// Department: Marketing
//   Team: Digital
//     Employee: Grace, ID: 7
//     Employee: Henry, ID: 8
//     Employee: Ivy, ID: 9
//   Team: Content
//     Employee: Jack, ID: 10
//     Employee: Kate, ID: 11
//     Employee: Leo, ID: 12
