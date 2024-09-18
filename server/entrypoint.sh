#!/bin/bash
set -e

# ストレージディレクトリに書き込み権限を付与
chown -R www-data:www-data /var/www/html/storage
chmod -R 755 /var/www/html/storage

# 他のコマンドを実行
exec "$@"