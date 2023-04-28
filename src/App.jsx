import './App.css';
import Header from './Header';
import Footer from './Footer';
import Employee from './Employee';
import GroupedTeam from './GroupedTeam';
import Navbar from './Navbar';
import Notfound from './Notfound';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
   const [teamSelection, setTeamSelection] = useState(
      localStorage.getItem('selectedTeam') || 'TeamB'
   );
   const [employee, setEmployee] = useState(
      JSON.parse(localStorage.getItem('employeeList')) || [
         {
            id: 1,
            fullName: 'Bob Jones',
            designation: 'JavaScript Developer',
            gender: 'male',
            teamName: 'TeamA',
         },
         {
            id: 2,
            fullName: 'Jill Bailey',
            designation: 'Node Developer',
            gender: 'female',
            teamName: 'TeamA',
         },
         {
            id: 3,
            fullName: 'Gail Shepherd',
            designation: 'Java Developer',
            gender: 'female',
            teamName: 'TeamA',
         },
         {
            id: 4,
            fullName: 'Sam Reynolds',
            designation: 'React Developer',
            gender: 'male',
            teamName: 'TeamB',
         },
         {
            id: 5,
            fullName: 'David Henry',
            designation: 'DotNet Developer',
            gender: 'male',
            teamName: 'TeamB',
         },
         {
            id: 6,
            fullName: 'Sarah Blake',
            designation: 'SQL Server DBA',
            gender: 'female',
            teamName: 'TeamB',
         },
         {
            id: 7,
            fullName: 'James Bennet',
            designation: 'Angular Developer',
            gender: 'male',
            teamName: 'TeamC',
         },
         {
            id: 8,
            fullName: 'Jessica Faye',
            designation: 'API Developer',
            gender: 'female',
            teamName: 'TeamC',
         },
         {
            id: 9,
            fullName: 'Lita Stone',
            designation: 'C++ Developer',
            gender: 'female',
            teamName: 'TeamC',
         },
         {
            id: 10,
            fullName: 'Daniel Young',
            designation: 'Python Developer',
            gender: 'male',
            teamName: 'TeamD',
         },
         {
            id: 11,
            fullName: 'Adrian Jacobs',
            designation: 'Vue Developer',
            gender: 'male',
            teamName: 'TeamD',
         },
         {
            id: 12,
            fullName: 'Devin Monroe',
            designation: 'Graphic Designer',
            gender: 'male',
            teamName: 'TeamD',
         },
      ]
   );
   const handleEmployeeCard = (id) => {
      const selectedEmployees = employee.map((e) =>
         e.id === id // if employee id (from all employees) is equal current id
            ? e.teamName === teamSelection
               ? { ...e, teamName: '' }
               : { ...e, teamName: teamSelection }
            : e
      );
      setEmployee(selectedEmployees);
   };
   const handleTeamSelection = (e) => setTeamSelection(e.target.value);
   // employee List to save in localStorage
   useEffect(() => {
      localStorage.setItem('employeeList', JSON.stringify(employee));
   }, [employee]);
   // selected team to save in localStorage
   useEffect(() => {
      localStorage.setItem('selectedTeam', teamSelection);
   }, [teamSelection]);
   return (
      <>
         <Router>
            <Navbar />
            <Header
               selectedTeam={teamSelection}
               memberCount={
                  employee.filter((e) => e.teamName === teamSelection).length
               }
            />
            <Routes>
               <Route
                  path="/"
                  element={
                     <Employee
                        employees={employee}
                        selectedTeam={teamSelection}
                        handleCard={handleEmployeeCard}
                        handleSelection={handleTeamSelection}
                     />
                  }
               ></Route>
               <Route
                  path="/grouped-team"
                  element={
                     <GroupedTeam
                        employee={employee}
                        selectedTeam={teamSelection}
                        setTeamFunc={setTeamSelection}
                     />
                  }
               ></Route>
               <Route path="*" element={<Notfound />}></Route>
            </Routes>
            <Footer />
         </Router>
      </>
   );
}

export default App;
