import React from "react";
import {
  IconBrandAws,
  IconBrandCpp,
  IconBrandCss3,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";
import { Tooltip } from "@mui/material";

export default function LenguajesCard() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 container mx-auto">
      <Tooltip title="Autocad" placement="bottom">
        <div className=" flex felx-col items-center justify-center col-span-1 aspect-square p-1">
          <img src="assets/images/tools/autocad.png" alt="" />
        </div>
      </Tooltip>
      <Tooltip title="Revit" placement="bottom">
        <div className=" flex felx-col items-center justify-center col-span-1 aspect-square p-1">
          <img src="assets/images/tools/revit.png" alt="" />
        </div>
      </Tooltip>
      <Tooltip title="Photoshop" placement="bottom">
        <div className=" flex felx-col items-center justify-center col-span-1 aspect-square p-1">
          <img src="assets/images/tools/Photoshop.png" alt="" />
        </div>
      </Tooltip>
      <Tooltip title="TailWind" placement="bottom">
        <div className=" flex felx-col items-center justify-center col-span-1 aspect-square">
          <IconBrandTailwind strokeWidth="2px" size="70%" />
        </div>
      </Tooltip>
    </div>
  );
}
