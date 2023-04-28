const Footer = () => {
    const today = new Date()
    console.log(today)
    
    return(
        <footer className='container'>
            <div className='row justify-content-center my-3'>
                <div className='col-8'>
                    <p className='lead text-center'>Team Member Allocation App - @{today.getFullYear()}</p>
                </div>
            </div>
        </footer>    
    )
}

export default Footer