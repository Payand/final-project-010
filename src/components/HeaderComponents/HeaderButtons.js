import { Button } from "antd";

const HeaderButtons = () => {
  return (
    <div className="button-header">
      <Button type="primary">
        <i className="fa-solid fa-play"></i>
        Watch Now
      </Button>
      <Button type="primary">
        <i className="fa-regular fa-heart"></i>
        Add To List
      </Button>
    </div>
  );
};

export default HeaderButtons;
