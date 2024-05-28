
import {Link} from"react-router-dom";
const link=[
    {to:"/courses",
     label:"CoURSES"   
    },
    {to:"/fees",
        label:"FEES"
    },
    {to:"/learn",
        label:"LEarn"
    }
]

export  default   function Navbar()
{
    return(
        <div>
            {link?.map((link)=>
                {
                  <Link to={link.to} key={link.to}>link.label</Link>
                })}
        </div>
    )
}