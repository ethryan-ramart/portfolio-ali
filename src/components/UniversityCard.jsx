import { Tooltip } from "@mui/material";
import { IconFileCv } from "@tabler/icons-react";
import React from "react";

export default function UniversityCard() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 container mx-auto">
      <Tooltip title="Universidad de Guadalajara CUUAD" placement="bottom">
        <div className=" flex  justify-center col-span-1 aspect-square">
          <img src="assets/images/universidad.png" alt=""/>
        </div>
      </Tooltip>
    </div>
  );
}
