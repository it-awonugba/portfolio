import Link from "next/link";
import {IconTextPropType} from "../../types/types";

function IconText({institution, icon, certificate, certificateAddress}: IconTextPropType) {
  return (
    <Link target="_blank" href={certificateAddress} className="flex gap-6 items-center">
        {icon}
        <div className="flex flex-col">
            <h3 className="text-xl font-bold">{institution}</h3>
            <p>{certificate}</p>
        </div>
    </Link>
  )
}

export default IconText;
