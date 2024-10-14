const Gif = ({ title, url, id }) => {
  return (
    <a
      className="m-8 flex w-full flex-col rounded-md border-2 border-solid border-[#eee] p-8"
      href={`#${id}`}
    >
      <h4 className="m-0 font-bold uppercase">{title}</h4>
      <img src={url} />
    </a>
  );
};
export default Gif;
