//Aquì va el componentito de header

const Header = ({home, features, about, empresa}) => {

    return (
<html>
    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href='index'>Deluxe-Quila</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="localhost:3000">Home</a>
                            <a className="nav-link disabled" href='Val'>Don Julio</a>
                        </div>
                    </div>
                </div>
            </nav>
            </html>
    )
}

export default Header


// {home, features, about, empresa} => deconstructor para pasar parametros
// const {nombre, edad} = datitos => contrustor para obtener datos del smart contract