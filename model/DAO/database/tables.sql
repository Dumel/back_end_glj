------------ TABELAS -----------------

-- tabela produtos -- 
create table tbl_produtos (
		id int not null primary key auto_increment,
        nome varchar(150) not null,
        valor float not null,
        foto varchar(500),
        descricao text,
        
        unique index(id)
);

-- tabela materia -- 
create table tbl_materia (
		id int not null primary key auto_increment,
        nome varchar(100) not null,
        
        unique index(id)
);

------------  Inserts ------------------

-- insert tbl_produtos --
insert into tbl_produtos(
                        nome,
                        valor,
                        foto,
                        descricao
						)
                        values
                        (
                        'Notebook Dell Inspiron 15 3000',
                        '3999.99',
                        'notebook-dell-inspiron-15-3000.png',
                        'Notebook com processador Intel Core i5, 8GB de RAM e 256GB de SSD'
                        ),
                        (
                        'Monitor Samsung LED 23.8 polegadas',
                        '799.99',
                        'monitor-samsung-led-23.8.png',
                        'Monitor LED com resolução Full HD e tempo de resposta de 5ms'
                        ),
                        (
                        'Mouse Gamer Logitech G Pro',
                        '299.99',
                        'mouse-gamer-logitech-g-pro.png',
                        'Mouse com sensor HERO 25K, 6 botões programáveis e 16000 DPI'
                        ),
                        (
                        'Teclado Mecânico Redragon Kumara',
                        '219.99',
                        'teclado-mecanico-redragon-kumara.png',
                        'Teclado mecânico com switches Outemu Blue e iluminação em LED'
                        ),
                        (
                        'Smartphone Samsung Galaxy S21',
                        '2800.99',
                        'smartphone-samsung-galaxy-s21.png',
                        'Smartphone com tela de 6.2 polegadas, processador Exynos 2100 e câmera de 64 MP'
                        ),
                        (
                        'Tablet Apple iPad Pro',
                        '8499.99',
                        'tablet-apple-ipad-pro.png',
                        'Tablet com tela de 11 polegadas, processador A12Z Bionic e câmera de 12 MP'
                        ),
                        (
                        'Caixa de Som JBL Flip 5',
                        '499.99',
                        'caixa-de-som-jbl-flip-5.png',
                        'Caixa de som portátil com Bluetooth, resistente à água e bateria com duração de até 12 horas'
                        ),
                        (
                        'Fone de Ouvido Bluetooth JBL Tune 500BT',
                        '299.99',
                        'fone-de-ouvido-bluetooth-jbl-tune-500bt.png',
                        'Fone de ouvido com conectividade Bluetooth, bateria com duração de até 16 horas e microfone integrado'
                        ),
                        (
                        'Smartwatch Samsung Galaxy Watch 3',
                        '2799.99',
                        'smartwatch-samsung-galaxy-watch-3.png',
                        'Smartwatch com tela de 1.4 polegadas, GPS integrado e bateria com duração de até 56 horas'
                        ),
                        (
                        'Câmera Sony Alpha a7 III',
                        '12999.99',
                        'camera-sony-alpha-a7-iii.png',
                        'Câmera mirrorless com sensor full-frame de 24.2 MP, estabilização de imagem de 5 eixos e gravação de vídeo em 4K'
                        ),
                        (
                        'Notebook GLJ',
                        '2600.00',
                        'https://1.bp.blogspot.com/-qChr0SCNz4s/XZlVd5Cf4iI/AAAAAAAAfs4/rFKG4oQaXOARRm8MD0ZW-dLELTfik18bACLcBGAsYHQ/s1600/lenovo-ideapad-330s-i7-8550u-8gb-1tb-windows-10-81jm0003br-D_NQ_NP_622010-MLB31685678513_082019-F.jpg',
                        'Notebook de tecnologia avançada, desenvolvida pela empresa GLJ'
                        ),
                        (
                        'Tablet GLJ',
                        '2200.00',
                        'https://w7.pngwing.com/pngs/259/279/png-transparent-turned-on-tablet-computer-sony-xperia-z4-tablet-sony-xperia-tablet-z-sony-xperia-z2-tablet-sony-xperia-tablet-s-tablet-electronics-gadget-computer-thumbnail.png',
                        'Tablet de tecnologia avançada, desenvolvido pela empresa GLJ'
                        ),
                        (
                        'Celular GLJ',
                        '1700.00',
                        'https://w7.pngwing.com/pngs/448/953/png-transparent-smartphone-feature-phone-mobile-phones-fingerprint-vivo-smartphone-gadget-electronics-mobile-phone-thumbnail.png',
                        'Celular de tecnologia avançada'
                        ),
                        (
                        'PC GLJ',
                        '4400.00',
                        'https://w7.pngwing.com/pngs/176/1000/png-transparent-laptop-personal-computer-computer-hardware-desktop-computers-computer-desktop-pc-computer-network-electronics-computer-thumbnail.png',
                        'Pc de tecnologia avançada, desenvolvido pela emprea GLJ'
                        ),
                        (
                        'Gabinete GLJ',
                        '2000.00',
                        'https://w7.pngwing.com/pngs/819/228/png-transparent-computer-cases-housings-central-processing-unit-desktop-computers-cpu-s-computer-electronic-device-computer-hardware-thumbnail.png',
                        'Gabinete desenvolvido pela empresa GLJ'
                        );
                        
-- insert tbl_materia --
insert into tbl_materia(
						nome
						)
                        values
                        (
                        'Artes'
                        ),
                        (
                        'Biologia'
                        ),
                        (
                        'Educação física'
                        ),
                        (
                        'Física'
                        ),
                        (
                        'Filosofia e sociologia'
                        ),
                        (
                        'Geografia'
                        ),
                        (
                        'História'
                        ),
                        (
                        'Inglês'
                        ),
                        (
                        'Interpretação de texto'
                        ),
                        (
                        'Português'
                        ),
                        (
                        'Matemática'
                        ),
                        (
                        'Química'
                        );

--------------- Scripts -------------------
select * from tbl_produtos;
select * from tbl_materia;



