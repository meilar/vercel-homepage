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
      className={`mr-auto ml-auto max-w-3xl h-min-24 min-h-24 py-4 px-12 shadow-xl rounded-md flex flex-row align-middle items-center sticky top-0 z-20 ${primary}`}
    >
      <div>
        <div
          className={`flex h-20 w-20 ${secondary} rounded-full items-center justify-center align-middle`}
        >
          <div
            className={`flex h-16 w-16 bg-white ${iconColor} rounded-full items-center justify-center align-middle`}
          >
            {icon}
          </div>
        </div>
      </div>
      <div className="ml-8 border-r-2 border-black px-8">
        <h1 className="text-3xl font-bold text-black">{header}</h1>
      </div>
      <div className="px-8 text-black font-medium">
        <p>{description}</p>
      </div>
    </div>
  );
}
