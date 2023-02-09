import React from "react";
import { useParams } from "react-router-dom";

const ResourceDetail = () => {
  const { id } = useParams();
  console.log(id);

  return <div>ResourceDetail</div>;
};

export default ResourceDetail;
