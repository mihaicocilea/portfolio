const Button = ({
  buttonStyle,
  divStyle,
  primary,
  link,
  text,
  download = false,
}) => {
  return (
    <>
      <div className={`${divStyle}`}>
        <a
          href={link}
          className={`${
            primary ? "text-black bg-white" : "text-white border border-white"
          } rounded-full px-10 py-2 font-[600] tracking-wide ${buttonStyle}`}
          download={download}
          target="_blank"
        >
          {text}
        </a>
      </div>
    </>
  );
};
export default Button;
