import { YorumTipi } from "../../../types";

const Yorum = ({ yorum }: { yorum: YorumTipi }) => {
  return <div>{yorum.yorum}</div>;
};

export default Yorum;
