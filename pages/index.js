import Header from '../components/common/Header'
import Foot from '../components/common/Footer'

export default function Home() {
  return (
    <>
    <Header empresa='Don julio' features='https://www.youtube.com/' home='https://www.google.com' about='https://www.facebook.com' />
    <div className="Back">
            <div className="splitview skewed">
        <div className="panel bottom">
            <div className="content">
                <div className="description">
                    <h1>Description</h1>
                    <p>Lorem Ipsioum</p>
                </div>

                <img src="https://th.bing.com/th/id/R.d3f2b59d7418596ed466b8dc29275048?rik=r6YQGAWfQH%2f2dg&pid=ImgRaw&r=0" alt="Original"/>
            </div>
        </div>

        <div className="panel top">
            <div className="content">
                <div className="description">
                    <h1>Tequila Don Julio</h1>
                    <p>Este es el proceso que tu botella recorrio!</p>
                </div>

                <img src="https://static.wixstatic.com/media/df287b_be970e1ad9494908a998411901ca7bf0~mv2.jpg/v1/fill/w_1280,h_853,al_c,q_85/df287b_be970e1ad9494908a998411901ca7bf0~mv2.jpg" alt="Duotone"/>
            </div>
        </div>

        <div className="handle"></div>
    </div>
        </div>  
    <Foot/>
    </>
  );
}
