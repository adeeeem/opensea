import * as React from 'react';
import Crd from '../components/Card';
import { Row ,Col} from 'react-bootstrap';
export default function Catagory() {
  return (<>
    <Row>
<Col>
<Crd image="assets/images/art.png" desc="ART" a="left" hieght={200}
          />
</Col>
<Col>
<Crd image="assets/images/music.png" desc="Music" a="left" hieght={200}
          />
</Col>
<Col>
<Crd image="assets/images/domain-names.png" desc="domain-names" a="left" hieght={200}
          />
    </Col>
    </Row>
    <Row>
<Col>
<Crd image="assets/images/virtual-worlds.png" desc="virtual-worlds" a="left" hieght={200}
          />
</Col>
<Col>
<Crd image="assets/images/trading-cards.png" desc="trading-cards" a="left" hieght={200}
          />
</Col>
<Col>
<Crd image="assets/images/collectibles.png" desc="collectibles" a="left" hieght={200}
          />
    </Col>
    </Row>
    <Row>
<Col>
<Crd image="assets/images/sports.png" desc="Sports" a="left" hieght={200}
          />
</Col>
<Col>
<Crd image="assets/images/utility.png" desc="Utilitiesc" a="left" hieght={200}
          />
</Col>
<Col>
<Crd image="assets/images/all-nfts.png" desc="All NFTs" a="left" hieght={200}
          />
    </Col>
    </Row>
  
</>
 
  );
}
