import { Link } from 'react-router';

type Prop = {
  subTitle?: string;
};

const CustomLogo = ({ subTitle = 'shop' }: Prop) => {
  return (
    <Link to="/" className="flex items-center whitespace-nowrap">
      <span className="font-montserrat font-bold text-xl m-0 whitespace-nowrap">
        Teslo |
      </span>
      <p className="text-muted-foreground m-0 px-2 whitespace-nowrap">
        {subTitle}
      </p>
    </Link>
  );
};

export default CustomLogo;
