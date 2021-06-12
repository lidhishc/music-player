import React from "react";
import { Card, CardBody, CardImg,CardTitle,CardSubtitle } from "reactstrap";
import './topChart.css'

function List({title,subTitle,image,index}) {
  return (
    <div>
      <Card className='cards'>
        <CardImg top width={index?'250px':'150px'} height={'200px'} src={image} alt="Card image cap"/>
        <CardBody>
        <CardTitle tag="h5" className='cardTitle'>{title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted cardSubtitle">{subTitle}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default List;
