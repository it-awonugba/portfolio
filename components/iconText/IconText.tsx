import Link from "next/link";
import {IconTextPropType} from "../../types/types";

function IconText({institution, icon, certificate, certificateAddress}: IconTextPropType) {
  return (
    <Link target="_blank" href={certificateAddress} className="flex p-4 gap-4 items-center hover:rounded-md hover:shadow-md">
        {icon}
        <div className="flex flex-col">
            <h3 className="text-xl font-bold">{institution}</h3>
            <p>{certificate}</p>
        </div>
    </Link>
  )
}

export default IconText;
