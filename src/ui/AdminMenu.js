import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminMenu = (props) => {
    const [adminMenu, setAdminMenu] = useState([
        {label: "Institute Management", link:"/institute-management"},
        {label: "Trainer Management", link:"/trainer-managements"},
        {label: "Module Management", link:"/module-management"},
        {label: "Trainee Management", link:"/trainee-managements"},
        {label: "Reports", link:"/report"},
        {label: "HRMS", link:"/hrms"},
        {label: "Settings", link:"/setting"},
        {label: "Manage Batches", link:"/manage-batches"},
        {label: "Apps", link:"/app"},
        {label: "Question Bank", link:"/question-banks"},
        {label: "Online Lecture", link:"/online-lecture"},
        
        
    ]);

    const adminMenuItems = adminMenu.map(item => {
      return <ListGroup.Item key={item.id}><Link to={item.link} className={item.label == props.activelink? "active-menu":""}>{item.label} </Link></ListGroup.Item>;
    
  });

    
  return (
    <div  className="admin-menu">
      <ListGroup>
       {adminMenuItems}
      </ListGroup>
    </div>
  );
};

export default AdminMenu;