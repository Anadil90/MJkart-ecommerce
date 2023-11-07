import { Row, Col } from 'reactstrap';

const RenderProductList = () => {
    fetch('https://fakestoreapi.com/products?limit=15')
      .then(res => res.json())
      .then(data => {
        if(data) {
        return (
           <Row>
          {
            data.map((item) => {
              console.log(item)
              return (
                <Col md='3' key={item}>{item.price} text</Col>
              )
            })
          
          }
          </Row>  
        )
        }
        else {
          return (
            <div>no data</div>
        )  
        }
        
      })

        
        
    }
    

  export default RenderProductList;