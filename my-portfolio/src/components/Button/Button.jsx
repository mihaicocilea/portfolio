const Button = ({
  buttonStyle,
  divStyle,
  primary,
  link,
  text,
  download = false,
  target,
}) => {
  return (
    <>
      <div
        className={`${divStyle}  transition duration-300 ease-in-out hover:scale-110`}
      >
        <a
          href={link}
          className={`${
            primary ? "text-black bg-white" : "text-white border border-white"
          } rounded-full px-10 py-2 font-[600] tracking-wide ${buttonStyle}`}
          download={download}
          target={target ? "_blank" : "_self"}
        >
          {text}
        </a>
      </div>
    </>
  );
};
export default Button;
