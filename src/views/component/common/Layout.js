import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function Layout(props) {
  const params = useLocation();
  console.log(params);

  return (
    <div>
      <div className="kakao_head blogHead" style={{background: "#000000"}}>
        <div className="inner_header tistory">
          <h1>
            <Link to="/" id="kakaoServiceLogo" className="#logo link_logo">
              <span className="img_common_tistory tit_tistory tit_tistory_white">
                티스토리
              </span>
              <span className="img_common_tistory tit_tistory tit_tistory_black"></span>
            </Link>
          </h1>
          <div id="kakaoGnb" role="navigation" className="gnb_tistory">
            <h2 className="screen_out">서비스 주요 메뉴</h2>
            <ul className="list_gnb">
              <li className="">
                <Link to="/blog" className="#feed link_gnb">
                  블로그
                </Link>
              </li>
              <li className="">
                <Link to="/login" className="#story link_gnb">
                  로그인
                </Link>
              </li>
              <li className="">
                <Link to="/login" className="#skin link_gnb">
                  회원가입
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div> {props.children}</div>
    </div>
  );
}

export default Layout;
