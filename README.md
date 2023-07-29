# TeamSavvy

Our objective is that an employee can access the details for projects, team members, timesheets, leaves and payroll information on one platform. The managers and HR can access the records of employees and also check the profile of the candidates who applied for jobs in their company, provide dashboard for analysis with system data. An improved user interface for a better user experience, to address this we have developed our application.

Teamsavvy is an application for an organization to provide different functionalities for employees with different roles. We have divided our project into useful functionalities based on roles(HR, manager, and employee).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)


## Installation

To install and set up TeamSavvy, follow these steps:

1. Install Node.js latest version, Visual Studio/ Visual Studio Code and Android Studio
2. Install Entity framework nuGet package, Automapper nuGet package, and Swashbuckle.AspNetCore.Swagger for back-end
3. Clone the repository.
4. Install Bio meteric android application from repo

## Usage

To use TeamSavvy, follow these steps:

1. In the User `\your\path\Interface\teamsavvy` folder, open the folder in Visual Studio Code.
2. Open the terminal in current folder, run `npm start`
3. In `\your\path\RestFul Web API\TeamSavvy.Api` folder, open TeamSavvy.Api.sln file in Visual Studio
4. Press the play icon to run the back-end

## Examples

1. Landing screen for an employee, message for an employee for the attendance.
![Bio meteric App ](<Design/Images/Biometeric app landing page.jpg>)

2. After entering the employee id the button will be activated.
![Employee ID page](<Design/Images/Employee id page.jpg>)

3. The app will ask for biometric verification, if the fingerprint matches to the record of fingerprint in device the app will accept and allow user to clock-in or clock-out.
![Biometeric verification](Design/Images/Fingerprint.jpg)

4. We have created API in .NET CORE using Entity Framework, LINQ, Automapper  and swagger documentation.
![API](Design/Images/API.png)