
const Foot = () => {
    const styleObj={color:"#16151a" };
    const color={color:"#957bda"};
    return(
        <div className="container-fluid mt-5">
            <div className="card mx-5">
                <div className="row mb-4 ">
                    
                    <div className="col-md-4 col-sm-11 col-xs-11">
                        <div className="footer-text pull-left">
                             <div className="d-flex">
                                 <h1 className="font-weight-bold mr-2 px-3" style={styleObj} > T </h1>
                                 <h1 style={color}>Deluxe-Quila</h1>
                             </div>
                             <p className="card-text">Tequila puro certifiado con ayuda de Solana para asegurar que su Tequila sea Pura-Sangre</p>

                             <div className="social mt-2 mb-3">

                                <i className="fa fa-facebook-official fa-lg" ></i>
                                <i className="fa fa-instagram fa-lg"></i>
                                <i className="fa fa-twitter fa-lg"></i>
                                <i className="fa fa-linkedin-square fa-lg"></i>
                                <i className="fa fa-facebook"></i>

                             </div>
                         
                         </div>
                    </div>
                    
                    
                    <div className="col-md-2 col-sm-1 col-xs-1 mb-2"></div>
                                  
                    

                </div>
                
                
                <div className="divider mb-4" >   
                </div>
    
               
                <div className="row">
                
                <div className="col-md-6 col-sm-6 col-xs-6">
                    
                    <div className="pull-left">
                        
                        <p><i className="fa fa-copyright"></i> 2023 thezpdesign</p>
                        
                    </div>
                    
                </div>
                
                

                <div className="col-md-6 col-sm-6 col-xs-6">
                   
                   
                    <div className="pull-right mr-4 d-flex policy">
                        
                       <div>Terms of Use</div>
                       <div>Privacy Policy</div>
                       <div>Cookie Policy</div>
                        
                    </div>
                    
                    
                    
                </div>
                 
                 
                 
             </div>
            </div>
            
        </div>
    )
}

export default Foot;