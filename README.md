# 关于

个人网站，以前用jkelly搭的，工作期间放养多年，现改为Vue😊

-- 2022.07.28

# Copyright

Copyright (c) 2022 Peng Qian

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


## Nginx部署

1. sudo systemctl start nginx
2. sudo systemctl restart nginx
3. vim /var/log/nginx/error.log
4. sudo chmod -R 777 /home/lighthouse/web
5. vim /etc/nginx/nginx.conf


## SSL

在 CentOS 7 上使用 Let's Encrypt 免费生成 SSL 证书并配置 Nginx 以使用 HTTPS，你可以按照以下步骤操作：

安装 Certbot：
Certbot 是 Let's Encrypt 客户端的一部分，它可以自动化证书的获取和安装过程。首先，你需要启用 EPEL 仓库：

sudo yum install epel-release
然后安装 Certbot 和它的 Nginx 插件：

sudo yum install certbot python2-certbot-nginx
获取证书：
使用 Certbot 获取证书，并让它自动配置 Nginx：

sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
替换 yourdomain.com 和 www.yourdomain.com 为你的实际域名。Certbot 会自动更新 Nginx 配置以使用 SSL，并且会挑战你几个问题，比如提供电子邮件地址和同意服务条款。

更新 Nginx 配置：
如果 Certbot 没有自动更新你的 Nginx 配置，或者你想手动检查，可以编辑你的 Nginx 配置文件。通常这个文件位于 /etc/nginx/conf.d/yourdomain.com.conf 或 /etc/nginx/sites-available/yourdomain.com。确保以下指令被添加到 server 块中：

listen 443 ssl;
ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
include /etc/letsencrypt/options-ssl-nginx.conf;
ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
同时，确保你有一个监听 80 端口的 server 块来处理 HTTP 请求，并将其重定向到 HTTPS：

server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}
重启 Nginx：
保存配置文件后，重启 Nginx 以使更改生效：

sudo systemctl restart nginx
自动续订证书：
Let's Encrypt 证书有效期为 90 天，所以你需要设置一个 cron 任务来自动续订证书。编辑 crontab：

sudo crontab -e
添加以下行以确保证书每天检查一次并在需要时自动续订：

0 3 * * * /usr/bin/certbot renew --quiet
这将在每天凌晨 3 点运行续订命令。

按照这些步骤，你应该能够成功地为你的 Nginx 服务器设置 Let's Encrypt SSL 证书，并配置 HTTPS。记得在配置文件中替换为你自己的域名，并根据需要调整任何其他设置。