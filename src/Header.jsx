const Header = ({ selectedTeam, memberCount }) => {
   return (
      <header className="container">
         <div className="row justify-content-center my-3 text-center">
            <div className='col-8'>
               <h1 className='display-3'>Team Member Allocation</h1>
               <h3 className='display-6'>
                  {selectedTeam} has {memberCount}{' '}
                  {memberCount > 1 ? 'members' : 'member'}
               </h3>
            </div>
         </div>
      </header>
   );
};

export default Header;
