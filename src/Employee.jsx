import { useState } from 'react';
import femaleProfile from './img/femaleProfile.jpg';
import maleProfile from './img/maleProfile.jpg';

const Employee = ({employees: employee, selectedTeam,handleCard,handleSelection}) => {
   return (
      <main className="container">
         <div className="row justify-content-center my-3">
            <div className="col-6">
               <select
                  className="form-select form-select-lg"
                  value={selectedTeam}
                  onChange={handleSelection}
               >
                  <option value="TeamA">TeamA</option>
                  <option value="TeamB">TeamB</option>
                  <option value="TeamC">TeamC</option>
                  <option value="TeamD">TeamD</option>
               </select>
            </div>
         </div>
         <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8">
               <div className="card-collection">
                  {employee && employee.map((e) => (
                     <div
                        key={e.id}
                        className={(e.teamName === selectedTeam ? 'card m-3 standout' : 'card m-3')}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleCard(e.id)}
                     >
                        <img
                           src={
                              e.gender === 'male' ? maleProfile : femaleProfile
                           }
                           className="card-img-top"
                        />
                        <div className="card-body">
                           <h5 className="card-title">
                              Full Name: {e.fullName}
                           </h5>
                           <p className="card-text">
                              <b>Designation: </b>
                              {e.designation}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </main>
   );
};

export default Employee;
