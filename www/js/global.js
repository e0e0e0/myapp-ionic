/**
 * Created by Administrator on 2016/4/1.
 */

// 全局变量文件
angular.module('global', [])
    .constant("GlobalVariable",{
      "SERVER_PATH":"120.1.1.1",                      // 服务器地址
      "SERVER_POINT":"8081",                          // 服务器端口号
      "VERSION":"V1.0"                                // 项目版本
    });
