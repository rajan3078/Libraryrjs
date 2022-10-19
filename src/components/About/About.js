import './About.css';
import wallpaper from '../../assets/images/wallpaper.jpg';
import Header from '../Header/Header';

const About=()=>{
    return (<>
    <Header/>
          <img className="half-image" src={wallpaper}/>
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <p>
                The Anna Centenary Library (ACL) is an established state library of the Government of Tamil Nadu. It is located at Kotturpuram, Chennai. It is built at a cost of ₹172 crores (₹1,720 million). It is named after a former chief minister of Tamil Nadu, C. N. Annadurai. It was opened by the then Chief Minister of Tamil Nadu M. Karunanidhi. The average number of persons who visited the library between January and October 2011 is around 26,500, compared to the monthly average of 20,000 in 2010.[1]
              </p>
            </div>
        </div>
       
      </div>
   
    </>)

}
export default About;