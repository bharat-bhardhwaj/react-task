import React,{useState} from 'react'
import {Card , ListGroup } from 'react-bootstrap'
import {useSelector} from 'react-redux'
import Overlay from 'react-image-overlay'
import imagesPath from '../img/Fastor_Logo.png'




function DetailsScreen(props) {


    const [image, setImage] = useState(false);
    const [src, setSrc] = useState('');

    const imageHandler =(e) => {
        console.log(e.target.src)

        setSrc(e.target.src);
        setImage(true)



    }

    const cancelHandler =() => {
        setSrc('');
        setImage(false);
    }
    

    const Details = useSelector((state) => state.DetailsReducer)
    const {details} = Details
  
    return (
        <div>

            { !image &&
                details.map(item => (

                <div>

                <h2>All Restaurants</h2>
                <Card style={{ width: '18rem' }} key={item.restaurant_id}>
                
                <Card.Body>
                    <Card.Title>{item.restaurant_name}</Card.Title>
                    <Card.Text>

                      <button onClick={
                          
                          imageHandler.bind(item.image)
                          
                          }>
                         
                   <img src={item.image} alt="restaurant" style={{height:"150px", width:"250px"}}></img>

                   </button>  
                    </Card.Text>
                    
                </Card.Body>

                    <ListGroup variant="flush">
                    <ListGroup.Item>{item.restaurant_mode}</ListGroup.Item>
                    <ListGroup.Item>{item.address_complete}</ListGroup.Item>
                    <ListGroup.Item>`opens At ${item.opens_at} or close at ${item.closes_at}`</ListGroup.Item>
                    </ListGroup>

                </Card>

                <hr>
                </hr>

                </div>

            
                ))
            }



            {
                image && 

                <div style ={{display:'flex' , flexDirection:"column"}}>
                    
                    <heading>image </heading>
                    <button onClick={cancelHandler} style={{width:'90px',height:'40px'}}>Cancel</button>
                   
                    <Overlay 
                        url={src} // required
                        overlayUrl={imagesPath}// required
                        imageHeight={100}
                        position={'bottomRight'}
                        overlayWidth={50}
                        overlayHeight={50}
                        overlayPadding={10}
                        watermark={false}
                        imageHeight={400}
                        imageWidth={400}
                        
                    />


              
                </div>
            }
           
        </div>
    )
}

DetailsScreen.propTypes = {

}

export default DetailsScreen

