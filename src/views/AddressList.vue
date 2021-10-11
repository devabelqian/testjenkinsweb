
<template>
  Demo
  <a-row :gutter="24">
    <a-col key="status" :span="16"> </a-col>
    <a-col key="isactive" :span="8" :style="{ textAlign: 'right' }">
      <a-button type="primary" style="margin-right: 10px" @click="search"
        >检索</a-button
      >
      <a-button type="primary">追加</a-button>
    </a-col>
  </a-row>
  <a-table :columns="columns" :data-source="datalist" size="small" bordered>
  </a-table>
</template>
<script lang="ts">
import httpservice from "@/net/HttpService";
import { defineComponent } from "@vue/runtime-core";
const columns = [
  {
    title: "编号",
    dataIndex: "addressID",
  },
  {
    title: "类型",
    dataIndex: "addressTypeCode",
  },
  {
    title: "国家",
    dataIndex: "countryCode",
  },
  {
    title: "省",
    dataIndex: "provinceCode",
  },
  {
    title: "市",
    dataIndex: "cityCode",
  },
  {
    title: "地址",
    dataIndex: "address",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
];

export default defineComponent ({
  data(){
    return {
    datalist: [],
    columns,
  };
  },
  methods: {

 search() {
    httpservice
      .request({
        url: "/v1/unsecurity/address/list",
        method: "get",
      })
      .then((res) => {
        this.datalist = [];
        console.log(res);
        if (res && res.status == 200 && res.data) {
          this.datalist = res.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  },
});
</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
