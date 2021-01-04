
--出售表
create table sale( id integer(10), sale int(255));


-- 商品表
create table Clothes(
    id INT(255) not null primary key,
    name VARCHAR(100) not null,
    price DOUBLE PRECISION not null,
    brand VARCHAR(100) not null,
    region VARCHAR(50),
    warehouse VARCHAR(50),
    inventory INT(255),
    category VARCHAR(100),
    subcategory VARCHAR(100),
    production_date VARCHAR(100),
    features VARCHAR(100)
);

-- 商品核心信息表
create table ClothesCore(
    id INT(255) not null primary key,
    name VARCHAR(100) not null,
    price DOUBLE PRECISION not null,
    category VARCHAR(100),
    subcategory VARCHAR(100)
);

-- 用户表
create table Customer(
    id INT(255) NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) not null,
    password VARCHAR(100) not null,
    name VARCHAR(100) not null,
    address VARCHAR(100),
    region VARCHAR(100) not null,
    PRIMARY KEY(id)
);


-- 购物车表 cart
create table Cart(
    id int(255) AUTO_INCREMENT,
    ClothesId int(255),
    customerId int(255),
    ClothesName VARCHAR(100),
    customerName VARCHAR(100),
    price DOUBLE PRECISION,
    number int(255),
    sumPrice DOUBLE PRECISION,
    PRIMARY KEY(id),
    FOREIGN KEY(customerId) REFERENCES Customer(id),
    FOREIGN KEY(ClothesId) REFERENCES Clothes(id)
    
);

-- 图片表
create table Image(
    id INT(255),
    image VARCHAR(1000)
);

-- 订单表
create table Orders(
    id int(255) AUTO_INCREMENT,
    ClothesId int(255),
    customerId int(255),
    ClothesName VARCHAR(100),
    customerName VARCHAR(100),
    price DOUBLE PRECISION,
    number int(255),
    sumPrice DOUBLE PRECISION,
    address VARCHAR(100),
    region VARCHAR(100),
    purchaseTime VARCHAR(100),
    PRIMARY KEY(id),
    FOREIGN KEY(customerId) REFERENCES Customer(id),
    FOREIGN KEY(ClothesId) REFERENCES Clothes(id)
);





INSERT INTO Clothes(id,name,price, brand, region, warehouse, inventory, category,subcategory,production_date,features)
VALUES(1,'bosie冬季新款针织帽男小王子联名情侣简约毛线帽潮0072T',72,'Bosie','浙江','浙江','239','shipin','maozi','2020年1月1日',' '),
(2,'纯色毛线针织小围巾女冬季日系可爱ins小清新韩版学生百搭潮围脖',49,'映画IMAGE','浙江','浙江','10000','shipin','weijin','2020年1月2日',''),
(3,'花花公子男士皮带真皮年轻人百搭纯自动扣休闲潮流牛皮正品裤腰带',69,'花花公子','广东','广东','115','shipin','yaodai','2020年1月2日',''),
(4,'cheekkiss正品皮带男真皮纯牛皮自动扣潮年轻人男士腰带裤带916',238,'cheekkiss','广东','广东','981','shipin','yaodai','2020年1月2日',''),
(5,'MLB官方 男女帽子NY毛线帽针织LOGO刺绣秋冬保暖运动休闲潮流CPB2',299,'MLB','江苏','江苏','28','shipin','maozi','2020年1月2日','');

INSERT INTO Clothes(id,name,price, brand, region, warehouse, inventory, category,subcategory,production_date,features)
VALUES(6,'TW女童加绒卫衣19秋冬新款小熊童装儿童中大童保暖上衣TKMW91152K',69,'Other','浙江','浙江','239','tongzhuang','dongzhuang','2020年1月1日',' '),
(7,'男童冬装外套加厚棉衣2020年新款儿童洋气羽绒棉服大童加绒棉袄潮',2280,'尼乐俊仔','浙江','浙江','10000','tongzhuang','dongzhuang','2020年1月2日',''),
(8,'狐狸大毛领男女装皮草獭兔毛棉衣星你同款冬季宝宝儿童派克服外套',1988,'丹美斯','广东','广东','115','tongzhuang','dongzhuang','2020年1月2日',''),
(9,'女童韩版羽绒服2020冬装新款儿童装宝宝洋气加厚大毛领白鸭绒外套',499,'EYAE KIDS','广东','广东','981','tongzhuang','dongzhuang','2020年1月2日',''),
(10,'allolugh阿路和如童装女童连帽羽绒服2020新款儿童韩版洋气亮面潮',1599,'allo＆lugh','江苏','江苏','28','tongzhuang','dongzhuang','2020年1月2日',''),
(11,'男童长袖T恤儿童纯棉圆领打底衫宝宝春秋童装大童洋气新款上衣',36,'Other','江苏','江苏','239','tongzhuang','chunzhuang','2020年1月1日',' '),
(12,'【迪士尼IP】巴拉巴拉童装女童外套春季2021新款儿童冲锋衣宝宝潮',219,'巴拉巴拉','浙江','浙江','10000','tongzhuang','chunzhuang','2020年1月2日',''),
(13,'安踏儿童卫衣2020新款秋装男童上装时尚潮流卫衣中大童休闲套头衫',199,'安踏','广东','广东','115','tongzhuang','qiuzhuang','2020年1月2日',''),
(14,'巴拉巴拉童装女童夏装网红套装 洋气2020新款小童宝宝儿童套装女日系短袖套装，甜美可爱',149,'巴拉巴拉','广东','广东','981','tongzhuang','xiazhuang','2020年1月2日',''),
(15,'FILA斐乐童装官网女童短袖t恤2020夏装儿童纯棉洋气半袖夏装',187,'FILA','江苏','江苏','28','tongzhuang','xiazhuang','2020年1月2日','');

INSERT INTO Clothes(id,name,price, brand, region, warehouse, inventory, category,subcategory,production_date,features)
VALUES(16,'哈利波特联名珺乐町筱2020冬新款白鸭绒韩版休闲撞色羽绒服外套女',315,'珺乐町筱','浙江','浙江','239','nvzhuang','dongzhuang','2020年1月1日',' '),
(17,'HLA/海澜之家简约基础款连帽羽绒服保暖舒适外套男',858,'HLA/海澜之家','浙江','浙江','10000','nanzhuang','dongzhuang','2020年1月2日',''),
(18,'官方旗舰店潮太平鸟播女装毛衣女宽松上衣冬季针织打底衫长袖外穿',258,'SZKY','广东','广东','115','nvzhuang','qiuzhuang','2020年1月2日',''),
(19,'唐狮2020冬季新款工装羽绒服女韩版宽松派克服连帽毛领外套女潮',399,'tonlion/唐狮','广东','广东','981','nvzhuang','dongzhuang','2020年1月2日',''),
(20,'安踏官网旗舰2020秋冬新款运动连帽卫衣女士宽松套头衫休闲上衣',239,'ANTA/安踏','江苏','江苏','28','nvzhuang','qiuzhuang','2020年1月2日',''),
(21,'水貂内胆派克服',7092,'AOOSHARKDEE/澳鲨迪','江苏','江苏','239','nvzhuang','dongzhuang','2020年1月1日',' '),
(22,'中长款貂皮大衣',10269,'Koradior/珂莱蒂尔','浙江','浙江','10000','nanzhuang','dongzhuang','2020年1月2日',''),
(23,'阿玛尼同款整貂皮大衣',41500,'七普鹿','广东','广东','115','nanzhuang','dongzhuang','2020年1月2日',''),
(24,'西装男套装',2000,'Youngor/雅戈尔','广东','广东','981','nanzhuang','chunzhuang','2020年1月2日',''),
(25,'运动套装男',360,'苞娅','江苏','江苏','28','nanzhuang','qiuzhuang','2020年1月2日',''),
(26,'UR2020春夏新品女装休闲日常简约纹理针织短外套WE13R9DN2000',500,'UR','广东','广东','115','nvzhuang','chunzhuang','2020年1月2日',''),
(27,'珂莱蒂尔2020女夏季新款时尚洋气喇叭袖长款修身淑女碎花连衣裙子',1299,'珂莱蒂尔','广东','广东','981','nvzhuang','xiazhuang','2020年1月2日',''),
(28,'HM DIVIDED男装男士裤子休闲裤夏季黑色直筒裤百慕大短裤0849419',70,'HM','江苏','江苏','28','nanzhuang','xiazhuang','2020年1月2日','');



INSERT INTO Image(id,image)
VALUES(1,'/static/img/1.jpeg'),(2,'/static/img/2.jpeg'),(3,'/static/img/3.jpeg'),(4,'/static/img/4.jpeg'),(5,'/static/img/5.jpeg');

INSERT INTO Image(id,image)
VALUES(6,'/static/img/6.jpg'),(7,'/static/img/7.jpg'),(8,'/static/img/8.jpg'),(9,'/static/img/9.jpg'),(10,'/static/img/10.jpg'),(11,'/static/img/11.jpg'),(12,'/static/img/12.jpg'),(13,'/static/img/13.jpg'),(14,'/static/img/14.jpg'),(15,'/static/img/15.jpg');

INSERT INTO Image(id,image)
VALUES(16,'/static/img/16.jpg'),(17,'/static/img/17.jpg'),(18,'/static/img/18.jpg'),(19,'/static/img/19.jpg'),(20,'/static/img/20.jpg'),(21,'/static/img/21.jpg'),(22,'/static/img/22.jpg'),(23,'/static/img/23.jpg'),(24,'/static/img/24.jpg'),(25,'/static/img/25.jpg'),
(26,'/static/img/26.jpg'),(27,'/static/img/27.jpg'),(28,'/static/img/28.jpg');





INSERT INTO ClothesCore(id,name,price,category,subcategory)
VALUES(1,'bosie冬季新款针织帽男小王子联名情侣简约毛线帽潮0072T',72,'shipin','maozi'),
(2,'纯色毛线针织小围巾女冬季日系可爱ins小清新韩版学生百搭潮围脖',49,'shipin','weijin'),
(3,'花花公子男士皮带真皮年轻人百搭纯自动扣休闲潮流牛皮正品裤腰带',69,'shipin','yaodai'),
(4,'cheekkiss正品皮带男真皮纯牛皮自动扣潮年轻人男士腰带裤带916',238,'shipin','yaodai'),
(5,'MLB官方 男女帽子NY毛线帽针织LOGO刺绣秋冬保暖运动休闲潮流CPB2',299,'shipin','maozi');
INSERT INTO ClothesCore(id,name,price,category,subcategory)
VALUES(6,'TW女童加绒卫衣19秋冬新款小熊童装儿童中大童保暖上衣TKMW91152K',69,'tongzhuang','dongzhuang'),
(7,'男童冬装外套加厚棉衣2020年新款儿童洋气羽绒棉服大童加绒棉袄潮',2280,'tongzhuang','dongzhuang'),
(8,'狐狸大毛领男女装皮草獭兔毛棉衣星你同款冬季宝宝儿童派克服外套',1988,'tongzhuang','dongzhuang'),
(9,'女童韩版羽绒服2020冬装新款儿童装宝宝洋气加厚大毛领白鸭绒外套',499,'tongzhuang','dongzhuang'),
(10,'allolugh阿路和如童装女童连帽羽绒服2020新款儿童韩版洋气亮面潮',1599,'tongzhuang','dongzhuang'),
(11,'男童长袖T恤儿童纯棉圆领打底衫宝宝春秋童装大童洋气新款上衣',36,'tongzhuang','chunzhuang'),
(12,'【迪士尼IP】巴拉巴拉童装女童外套春季2021新款儿童冲锋衣宝宝潮',219,'tongzhuang','chunzhuang'),
(13,'安踏儿童卫衣2020新款秋装男童上装时尚潮流卫衣中大童休闲套头衫',199,'tongzhuang','qiuzhuang'),
(14,'巴拉巴拉童装女童夏装网红套装 洋气2020新款小童宝宝儿童套装女日系短袖套装，甜美可爱',149,'tongzhuang','xiazhuang'),
(15,'FILA斐乐童装官网女童短袖t恤2020夏装儿童纯棉洋气半袖夏装',187,'tongzhuang','xiazhuang');
INSERT INTO ClothesCore(id,name,price,category,subcategory)
VALUES(16,'哈利波特联名珺乐町筱2020冬新款白鸭绒韩版休闲撞色羽绒服外套女',315,'nvzhuang','dongzhuang'),
(17,'HLA/海澜之家简约基础款连帽羽绒服保暖舒适外套男',858,'nanzhuang','dongzhuang'),
(18,'官方旗舰店潮太平鸟播女装毛衣女宽松上衣冬季针织打底衫长袖外穿',258,'nvzhuang','qiuzhuang'),
(19,'唐狮2020冬季新款工装羽绒服女韩版宽松派克服连帽毛领外套女潮',399,'nvzhuang','dongzhuang'),
(20,'安踏官网旗舰2020秋冬新款运动连帽卫衣女士宽松套头衫休闲上衣',239,'nvzhuang','qiuzhuang'),
(21,'水貂内胆派克服',7092,'nvzhuang','dongzhuang'),
(22,'中长款貂皮大衣',10269,'nanzhuang','dongzhuang'),
(23,'阿玛尼同款整貂皮大衣',41500,'nanzhuang','dongzhuang'),
(24,'西装男套装',2000,'nanzhuang','chunzhuang'),
(25,'运动套装男',360,'nanzhuang','qiuzhuang'),
(26,'UR2020春夏新品女装休闲日常简约纹理针织短外套WE13R9DN2000',500,'nvzhuang','chunzhuang'),
(27,'珂莱蒂尔2020女夏季新款时尚洋气喇叭袖长款修身淑女碎花连衣裙子',1299,'nvzhuang','xiazhuang'),
(28,'HM DIVIDED男装男士裤子休闲裤夏季黑色直筒裤百慕大短裤0849419',70,'nanzhuang','xiazhuang');




insert into sale(id, sale) values(1, 100),(2,200),(3,300),(4,400),(5,500),
(6,0),(7,0),(8,0),(9,0),(10,0),(11,0),(12,0),(13,0),(14,0),(15,0),(16,0),(17,0),(18,0),(19,0),(20,0),
(21,0),(22,0),(23,0),(24,0),(25,0),(26,0),(27,0),(28,0);

insert into customer(id,  username,password,name,address,region) 
VALUES(2,'222',222,'谭小焱','222','北京');