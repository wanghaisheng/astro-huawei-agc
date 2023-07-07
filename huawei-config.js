/*
* Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.

https://github.com/AppGalleryConnect/agc-demos/blob/de3aacbacb1add9ae187415278b3a321026a941b/Web/agc-authservice-demo-javascript/src/components/config.js
*/

import agconnect from '@agconnect/api'
import '@agconnect/instance'
import '@hw-hmscore/analytics-web'
import agConnectConfig from './config.js'        
// paste your SDK Code Snippet here, SDK Code Snippet can be found on your project general information



/**
 * Initializes app configuration
 */

// 启用调试模式
//agconnect.analytics.InitSettings.debugMode = true;
// 调试模式下，自定义终端标识
//agconnect.analytics.InitSettings.terminalName = "custom terminal name";        
//agconnect.instance().configInstance(agConnectConfig);

// 是否启用url聚类
//https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/javascript-accessing-0000001051147976#section2459527366
agconnect.analytics.UrlClusteringOptions.enabled= false;
// 是否移除协议
 agconnect.analytics.UrlClusteringOptions.removeProtocol= true;
// 是否移除协议、域名和端口
 agconnect.analytics.UrlClusteringOptions.removeOrigin= false;
// 是否移除全部参数
 agconnect.analytics.UrlClusteringOptions.removeAllParams= true;
// 是否移除指定参数
 agconnect.analytics.UrlClusteringOptions.removeParams= {
    // 默认处理方式，移除全部参数值，保留键名。 
     removeValuesOnly: true,
     params: {
        "key1": {
            // 是否只移除参数值，保留键名，覆盖外层的配置
            removeValuesOnly: false,
           // search|anchor|both  search表示锚点前的参数位置，anchor表示锚点后的参数位置，both表示锚点前的参数位置和锚点后的参数位置。
           position: 'both',
       }
     }
   };

// 是否移除锚点
 agconnect.analytics.UrlClusteringOptions.removeAnchor= true;
// URL模式，若传入的URL按照开关处理后满足任一模式，则上报该模式。URL模式可指定 {占位符名称} 格式的占位符，占位符匹配除urlSeparators外的所有字符。
 agconnect.analytics.UrlClusteringOptions.urlPatterns= [];
 agconnect.analytics.UrlClusteringOptions.urlSeparators= ':/.?=&#'

let analytics = agconnect.analytics();
