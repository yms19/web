import React from "react";
import Center from "../../components/Center";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
const SignPage: React.FC = () => {
  return (
    <Center>
      <Result
        status="404"
        title="404"
        subTitle="woshisign"
        extra={
          <Button type="primary">
            <Link to="/home"> 返回主页</Link>
          </Button>
        }
      />
    </Center>
  );
};
export default SignPage;
