import React from "react";
import ReactDOM from "react-dom";

import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

import CitySelect from "./citySelect";

moment.locale("zh-cn");

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <CitySelect />
  </ConfigProvider>,
  document.getElementById("root")
);
