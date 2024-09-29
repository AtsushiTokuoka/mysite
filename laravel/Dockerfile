FROM php:8.3.6-apache

RUN apt-get update && apt-get install -y zip unzip
RUN docker-php-ext-install pdo pdo_mysql

# composerをインストール
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# Allow composer to run as super user
ENV COMPOSER_ALLOW_SUPERUSER 1

# apache設定ファイルを反映
COPY ./apache2.conf /etc/apache2/apache2.conf
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf
RUN a2ensite 000-default.conf && a2enmod rewrite && service apache2 restart

# ホスト側のファイルをコンテナにマウント
COPY ./mount /var/www/html

# 作業ディレクトリの設定
WORKDIR /var/www/html

# パッケージのインストール
RUN composer install

#--------------------------------------------------
    #開発環境用ユーザーの作成
#--------------------------------------------------
# 環境変数の設定
ARG UID
ARG GID
ARG USERNAME

# 環境変数を使用してユーザーを作成
RUN groupadd -g ${GID} ${USERNAME} && \ 
useradd -m -u ${UID} -g ${GID} ${USERNAME}

# コンテナを操作するユーザーをルートから一般ユーザーに変更
RUN chown -R ${UID}:${GID} /var/www/html

# ApacheのPIDファイルを削除
RUN rm -f /var/run/apache2/apache2.pid

USER ${UID}