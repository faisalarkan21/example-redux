import { Breadcrumb, Col, Input, Layout, Row } from "antd";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDebounce } from "use-lodash-debounce";
import { UsersAction } from "../../Services/Users/users.reducer";
const { Header, Content, Footer } = Layout;

const TableUsers = ({ users, dispatch }) => {
  const onSearch = (value) => console.log(value);
  const [queryUser, setQueryUser] = useState("");
  const debouncedSetValue = useDebounce(queryUser, 500);

  useEffect(() => {
    if (!debouncedSetValue) {
      dispatch(UsersAction.getUsers());
      return;
    }

    if (debouncedSetValue) {
      dispatch(UsersAction.getUsers(`?name=${debouncedSetValue}`));
    }
  }, [debouncedSetValue]);

  useEffect(() => {
    dispatch(UsersAction.getUsers());
  }, []);

  console.log("users", users);

  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
          <div style={{ padding: 24, minHeight: 380 }}>
            <Row>
              <Col span={24}>
                <Input
                  placeholder="Search Users"
                  enterButton="Search"
                  allowClear
                  onChange={(e) => setQueryUser(e.target.value)}
                  onSearch={onSearch}
                />
                <Row gutter={[16, 16]}>
                  {/* 
                    Jika hasil pencarian query users tidak ada data -> tampilkan tulisan No Data / Tidak ada user.
                  */}
                  {users.dataTable.length ? (
                    users.dataTable.map((v) => {
                      return (
                        <Col span={6}>
                          <img
                            width={200}
                            src={
                              "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
                            }
                          ></img>
                          <h4>{v.name}</h4>
                        </Col>
                      );
                    })
                  ) : (
                    <p>
                      Cannot find user '<b>{queryUser}</b>'
                    </p>
                  )}
                </Row>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  // console.log("mapStateToProps", state);
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(TableUsers);
