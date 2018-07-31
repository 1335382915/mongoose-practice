# 启动mongodb服务
### 在mongodb的bin目录下
mongod.exe --dbpath="E:\mongodb\db"
### window32位
mongod.exe --dbpath="E:\mongodb\db" --journal -storageEngine=mmapv1

### 数据导出
mongoexport -d 数据库名（mongodb文件夹名） -c 表名 -o 输出路径 --type 输出类型 --port 端口号

mongoexport -d db -c users -o "E:\user.json" --type json --port 27017

### 数据导入
mongoimport -d db -c users "E:\user.json" --type json --port 27017
