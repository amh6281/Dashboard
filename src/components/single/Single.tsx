import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];

const Single = () => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src="" alt="" />
            <h1>홍길동</h1>
            <button>수정</button>
          </div>
          <div className="details">
            <div className="item">
              <span className="itemTitle">성명: </span>
              <span className="itemValue">홍길동</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="activities">
        <h2>최근 활동</h2>
        <ul>
          <li>
            <div>
              <p>
                홍길동 사용자가 플레이스테이션 5 디지털 에디션을 구매하였습니다.
              </p>
              <time>3일 전</time>
            </div>
          </li>
          <li>
            <div>
              <p>
                홍길동 사용자가 플레이스테이션 5 디지털 에디션을 구매하였습니다.
              </p>
              <time>3일 전</time>
            </div>
          </li>
          <li>
            <div>
              <p>
                홍길동 사용자가 플레이스테이션 5 디지털 에디션을 구매하였습니다.
              </p>
              <time>3일 전</time>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Single;
