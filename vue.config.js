module.exports = {
	devServer: {
	        open: true, //浏览器自动打开页面
	        host: "localhost", //如果是真机测试，就使用这个IP
	        port: 8080,
	        https: false,
	        hotOnly: false, //热更新（webpack已实现了，这里false即可）
	        proxy: {
	            //配置跨域
	            '/login': {
	                target: "http://172.17.15.92:19999",
	                ws:true,
	                changOrigin:true,
	                pathRewrite:{
	                    '^/login':'/login'
	                }
	            },
				'/api/v2': {
				    target: "http://172.17.15.92:19999",
				    ws:true,
				    changOrigin:true,
				    pathRewrite:{
				        '^/api/v2':'/api/v2'
				    }
				},
				'/register': {
				    target: "http://172.17.15.92:19999",
				    ws:true,
				    changOrigin:true,
				    pathRewrite:{
				        '^/register':'/register'
				    }
				},
				'/plugin': {
				    target: "http://127.0.0.1:5000",
				    ws:true,
				    changOrigin:true,
				    pathRewrite:{
				        '^/plugin':'/plugin'
				    }
				}
	        }
	    },
    css: {
        loaderOptions: { // 向 CSS 相关的 loader 传递选项
            less: {
                javascriptEnabled: true
            }
        }
    },
    runtimeCompiler: true
};
