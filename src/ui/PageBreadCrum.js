import { Link } from "react-router-dom";
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
const PageBreadcrum = (props) =>{

    let breadcrumb = '';

    if(props.items.length > 0){
       breadcrumb =  props.items.map(item => {
           return <Breadcrumb.Item>
           <Link  to={item.link} className={"breadcum-link"+ !item.cssClass || !item.cssClass == undefined ? item.cssClass : ''} >{item.label}</Link>
           </Breadcrumb.Item>
       });
    }

    return <div className="breadcrum-custom"><Breadcrumb>
    { breadcrumb }
    </Breadcrumb>
    </div>
};

export default PageBreadcrum;