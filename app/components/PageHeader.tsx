interface props {
  header: string;
  description: string;
  icon: any;
  primary: string;
  secondary: string;
  iconColor: string;
}

export default function PageHeader({
  header,
  description,
  icon,
  primary,
  secondary,
  iconColor,
}: props) {
  return (
    <div
      className={`mx-auto w-full md:max-w-3xl py-4 px-4 md:px-12 shadow-xl md:rounded-md flex flex-row align-middle rounded-sm items-center sticky top-0 z-20 ${primary}`}
    >
      <div>
        <div
          className={`flex md:h-20 md:w-20 h-18 w-18 ${secondary} rounded-full items-center justify-center align-middle`}
        >
          <div
            className={`hidden md:flex h-12 w-12 md:h-16 md:w-16 bg-white ${iconColor} rounded-full items-center justify-center align-middle`}
          >
            {icon}
          </div>
        </div>
      </div>
      <div className="md:ml-8 border-r-2 border-black px-8">
        <h1 className="md:text-3xl text-lg font-bold text-black">{header}</h1>
      </div>
      <div className="px-4 md:px-8 text-black md:font-medium">
        <p>{description}</p>
      </div>
    </div>
  );
}
