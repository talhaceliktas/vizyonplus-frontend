import ImdbHundered from "./ImdbHundered";

const CategoriContent = ({ katalog }: { katalog: string }) => {
  return (
    <div>
      {katalog === "vizyondakiler" && <div></div>}
      {katalog === "yakindakiler" && <div>Yakindakiler</div>}
      {katalog === "imdb" && <ImdbHundered />}
    </div>
  );
};

export default CategoriContent;
