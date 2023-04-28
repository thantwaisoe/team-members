import React, { useState } from 'react';

export default function GroupedTeam({ employee, selectedTeam, setTeamFunc }) {
   const groupTeamMembers = () => {
      let team = [];

      let teamAMembers = employee.filter((e) => e.teamName === 'TeamA');
      let teamA = {
         team: 'TeamA',
         members: teamAMembers,
         collapsed: selectedTeam === 'TeamA' ? false : true,
      };
      team.push(teamA);
      let teamBMembers = employee.filter((e) => e.teamName === 'TeamB');
      let teamB = {
         team: 'TeamB',
         members: teamBMembers,
         collapsed: selectedTeam === 'TeamB' ? false : true,
      };
      team.push(teamB);
      let teamCMembers = employee.filter((e) => e.teamName === 'TeamC');
      let teamC = {
         team: 'TeamC',
         members: teamCMembers,
         collapsed: selectedTeam === 'TeamC' ? false : true,
      };
      team.push(teamC);
      let teamDMembers = employee.filter((e) => e.teamName === 'TeamD');
      let teamD = {
         team: 'TeamD',
         members: teamDMembers,
         collapsed: selectedTeam === 'TeamD' ? false : true,
      };
      team.push(teamD);
      return team;
   };
   const [groupedTeam, setGroupData] = useState(groupTeamMembers());
   const handleTeamClick = (e) => {
      let newGroupData = groupedTeam.map((d) =>
         d.team === e.currentTarget.id ? { ...d, collapsed: !d.collapsed } : d
      );
      setGroupData(newGroupData);
      setTeamFunc(e.currentTarget.id);
   };
   return (
      <main className="container">
        {}
         {groupedTeam.map((item) => {
            return (
               <div
                  key={item.team}
                  className="card mt-2 text-center"
                  style={{ cursor: 'pointer' }}
               >
                  <h4
                     id={item.team}
                     className="card-title text-secondary bg-white pt-2"
                     onClick={handleTeamClick}
                  >
                     Team Name: {item.team}
                  </h4>
                  <div
                     id={'collapse_' + item.team}
                     className={item.collapsed ? 'collapse' : ''}
                  >
                     <hr />
                     {item.members.map((member, i) => {
                        return (
                           <div className="mt-2" key={i}>
                              <h5 className="card-title mt-2">
                                 <span className="text-dark fs-2">
                                    Full Name: {member.fullName}
                                 </span>
                                 <p className='text-muted'>Designation: {member.designation}</p>
                              </h5>
                           </div>
                        );
                     })}
                  </div>
               </div>
            );
         })}
      </main>
   );
}
