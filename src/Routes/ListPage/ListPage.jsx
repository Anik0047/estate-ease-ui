import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card'
import { listData } from '../../lib/dummydata'
import './ListPage.scss'
import Map from '../../components/Map/Map';

function ListPage(){

  const data = listData;

  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {
            data.map(item=>(
              <Card key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
      <div className="mapContainer">
       <Map></Map>  
      </div>  
    </div>
  )
}

export default ListPage