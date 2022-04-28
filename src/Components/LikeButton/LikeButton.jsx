import Button from 'react-bootstrap/Button'
import axios from 'axios';

const LikeButton = (props) => {
    async function likeButton(){
        try{
            let response = await axios.patch('http://127.0.0.1:8000/api/music/'+ props.id, {"likes": true})
            console.log('Song has been liked')
        }catch(ex){
            console.log('unable to like')
        }
    }

    return ( 
        <Button variant='success' onClick={likeButton}>LIKE</Button>
     );
}
 
export default LikeButton;