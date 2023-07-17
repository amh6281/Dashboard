import { topDealUsers } from "../../data";
import "./topBox.scss";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>거래 순위</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <div className="username">{user.username}</div>
                <div className="email">{user.email}</div>
              </div>
            </div>
            <span className="amount">{user.amount}₩</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
